import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Import your Prisma client

type Data = {
  sessionName: string;
  sessionDate: string;
  sessionTime: string;
  classApplicable: string;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) {
  if (req.method === 'POST') {
    try {
      // Destructure data from the request body
      const { sessionName, sessionDate, sessionTime, classApplicable, sessionHostId } = req.body;

      // Ensure all fields are provided
      if (!sessionName || !sessionDate || !sessionTime || !classApplicable || !sessionHostId) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Convert sessionDate to a valid Date object (full date with time)
      const date = new Date(sessionDate); // Date object for session date

      // Ensure the sessionTime is in the format "HH:MM" and is valid
      const [hours, minutes]: [number, number] = sessionTime.split(':').map((str: string) => parseInt(str, 10));

      if (Number.isNaN(hours) || Number.isNaN(minutes)) {
        return res.status(400).json({ error: 'Invalid time format' });
      }

      // Set the hours and minutes on the date to combine the date and time
      date.setHours(hours, minutes, 0, 0); // Sets both hours and minutes

      // Create session in the database
      // Ensure sessionTime is a string, not a Date object.
      const session = await prisma.session.create({
        data: {
          sessionName,
          date, // The full DateTime (combined date and time)
          time: sessionTime, // Ensure 'sessionTime' is a string, e.g., "14:30"
          applicableClass: classApplicable,
          sessionHost: {
            connect: {
              id: sessionHostId,
            },
          },
        },
      });

      // Convert date to string in "YYYY-MM-DD" format for response
      const formattedDate = session.date.toISOString().split('T')[0]; // Get the date part as string

      // Ensure session.time is a string (e.g., "14:30") before returning
      const sessionTimeFormatted = session.time.toString();

      // Return success response with only the necessary data (using property shorthand)
      return res.status(200).json({
        sessionName,
        sessionDate: formattedDate, // Format the date to string (YYYY-MM-DD)
        sessionTime: sessionTimeFormatted, // Ensure the time is returned as a string (e.g., "14:30")
        classApplicable: session.applicableClass,
      });
    } catch (error) {
      console.error('Error creating session:', error);
      return res.status(500).json({ error: 'Failed to create session' });
    }
  } else {
    // Method not allowed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

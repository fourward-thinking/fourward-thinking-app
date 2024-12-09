import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Import your Prisma client

type Data = {
  sessionName: string;
  sessionDate: string; // We'll just use this for the full Date
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
      const { sessionName, sessionDate, classApplicable, sessionHostId } = req.body;

      // Ensure all required fields are provided
      if (!sessionName || !sessionDate || !classApplicable || !sessionHostId) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Convert sessionDate to a valid Date object
      const date = new Date(sessionDate); // Assuming sessionDate ISO string format (e.g., "2024-12-09T10:00:00")

      // Ensure the sessionHostId is valid
      const sessionHost = await prisma.user.findUnique({
        where: { id: sessionHostId },
      });

      if (!sessionHost) {
        return res.status(400).json({ error: 'Invalid sessionHostId, user not found.' });
      }

      // Create session in the database
      const session = await prisma.session.create({
        data: {
          sessionName,
          date, // The full DateTime (combined date and time from sessionDate)
          applicableClass: classApplicable,
          sessionHostId, // sessionHostId is a valid User ID
          // sessionHost will be automatically set via sessionHostId
        },
      });

      // Convert date to string in "YYYY-MM-DD" format for response
      const formattedDate = session.date.toISOString().split('T')[0]; // Get the date part as string

      // Return success response with only the necessary data
      return res.status(200).json({
        sessionName,
        sessionDate: formattedDate, // Format the date to string (YYYY-MM-DD)
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

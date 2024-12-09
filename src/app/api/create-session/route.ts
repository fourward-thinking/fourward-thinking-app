/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Import your Prisma client

// Handle the POST request
export const POST = async (req: Request) => {
  try {
    const { sessionName, sessionDate, sessionTime, classApplicable, sessionHostId } = await req.json();

    // Check for missing fields
    if (!sessionName || !sessionDate || !sessionTime || !classApplicable || !sessionHostId) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Convert sessionDate to a valid Date object
    const date = new Date(sessionDate); // Date object for session date
    if (Number.isNaN(date.getTime())) {
      return NextResponse.json({ error: 'Invalid date format' }, { status: 400 });
    }

    // Ensure the sessionTime is in the correct format (HH:MM)
    const [hours, minutes]: [number, number] = sessionTime.split(':').map((str: string) => parseInt(str, 10));

    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      return NextResponse.json({ error: 'Invalid time format' }, { status: 400 });
    }

    // Set the time on the date object
    date.setHours(hours, minutes, 0, 0);

    // Create session in the database
    const session = await prisma.session.create({
      data: {
        sessionName,
        date, // The full DateTime (combined date and time)
        applicableClass: classApplicable,
        sessionHost: {
          connect: { id: sessionHostId },
        },
      },
    });

    // Return success response with only the necessary data
    return NextResponse.json({
      sessionName,
      sessionDate: session.date.toISOString().split('T')[0], // Format date
      sessionTime: session.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Format time
      classApplicable: session.applicableClass,
    });
  } catch (error) {
    console.error('Error creating session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
};

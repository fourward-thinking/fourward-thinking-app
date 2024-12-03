// src/app/api/create-session/route.ts
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  console.log('POST request received'); // Log to check if the function is triggered
  try {
    const { sessionName, sessionDate, sessionTime, classApplicable } = await req.json();
    const newSession = await prisma.session.create({
      data: {
        sessionName,
        date: new Date(sessionDate), // Ensure sessionDate is a valid date string
        time: sessionTime, // 'sessionTime' should be a string (e.g., "14:30")
        applicableClass: classApplicable,
        sessionHostId: 1, // Replace with the actual session host ID from your auth system
      },
    });

    return new Response(JSON.stringify(newSession), { status: 201 });
  } catch (error) {
    console.error('Error creating session:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create session.' }),
      { status: 500 },
    );
  }
}

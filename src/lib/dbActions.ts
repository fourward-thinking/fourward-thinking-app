import prisma from './prisma';

const createSession = async (sessionData: any) => {
  try {
    const session = await prisma.session.create({
      data: sessionData,
    });
    return session;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};

export default createSession;

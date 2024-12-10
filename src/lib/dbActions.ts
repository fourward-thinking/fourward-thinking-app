import { hash } from 'bcrypt';
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

const createUser = async (userData: { email: string; password: string }) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: userData.password,
        role: 'USER',
      },
    });
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default createUser;

export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}

export { createSession, createUser };

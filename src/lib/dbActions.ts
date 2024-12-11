// @/lib/dbActions.ts

import { hash } from 'bcryptjs';
import prisma from './prisma';

export async function createSession(sessionData: any) {
  try {
    const session = await prisma.session.create({
      data: sessionData,
    });
    return session;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
}

export async function createUser(userData: { email: string; password: string }) {
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
}

export async function changePassword(credentials: { email: string; password: string }) {
  const hashedPassword = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password: hashedPassword,
    },
  });
}

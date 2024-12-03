// types/next-auth.d.ts

import { Role } from '@prisma/client'; // Import your role type if you're using it

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    randomKey: Role; // Assuming `randomKey` is a Role or a similar property
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
    randomKey: Role;
  }
}

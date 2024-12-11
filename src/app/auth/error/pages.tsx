'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const errorMessage = new URLSearchParams(window.location.search).get('error');
    console.error('NextAuth error:', errorMessage);
  }, []);

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>There was an error with the authentication process.</p>
      {}
      <p>
        Error Details:
        {new URLSearchParams(window.location.search).get('error')}
      </p>
      <button type="button" onClick={() => router.push('/auth/signin')}>Go back to Sign In</button>
    </div>
  );
};

export default ErrorPage;

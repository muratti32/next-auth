import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { LogoutForm } from '@/components/logout-form';

type Props = {};

const HomePage = async (props: Props) => {
  const session = await auth();

  if (!session) {
    return redirect('/');
  }
  if (!session.user) {
    return redirect('/');
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-3xl text-white">{session.user.name}</h1>
      {session.user.image && (
        <Image
          src={session.user.image}
          alt="user image"
          width={72}
          height={72}
          className="rounded-full"
        />
      )}
      <div>
        <LogoutForm />
      </div>
    </div>
  );
};

export default HomePage;

import { doSocialLogin } from '@/app/actions';
import React from 'react';

type Props = {};

export const LoginForm = (props: Props) => {
  return (
    <form action={doSocialLogin} className="flex-row space-x-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        name="action"
        value={'google'}
      >
        Sign In with Google
      </button>
      <button
        type="submit"
        name="action"
        value={'github'}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign In with Github
      </button>
    </form>
  );
};

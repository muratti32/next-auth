import { doLogout } from '@/app/actions';
import React from 'react';

type Props = {};

export const LogoutForm = (props: Props) => {
  return (
    <form action={doLogout}>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

import NextAuth from 'next-auth';
import GooglePriver from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

console.log(`halo process.env.GOOGLE_ID:`, process.env.GOOGLE_ID);
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut } = NextAuth({
    providers: [
      GooglePriver({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,

        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
      }),
    ],
  });

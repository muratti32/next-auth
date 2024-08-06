import { LoginForm } from '@/components/login-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-3xl text-white">Time to SignIn</h1>
      <div className="mt-4">
        <LoginForm />
      </div>
    </main>
  );
}

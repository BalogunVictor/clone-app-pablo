import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { PasswordInput } from '@ui/PasswordInput';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container w-1/2 mx-auto mt-5">
      <div className="flex flex-col items-center">
        <h4 className="text-5xl font-bold">Login</h4>
      </div>
      <form className="space-y-6">
        <Input label="Email" placeholder="Email*" />
        <PasswordInput label="Password" placeholder="Password*" />
        <Button href="/dashboard" rounded>
          Login
        </Button>

        <div className="text-center py-4">
          <span className="text-gray-500">
            Don’t have an Account?{' '}
            <Link className="text-red-500" href="/signup">
              SignUp
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

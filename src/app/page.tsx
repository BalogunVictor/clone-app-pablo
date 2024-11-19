import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { PasswordInput } from '@ui/PasswordInput';
import Image from 'next/image';
import { Logo } from 'src/assets/images';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blueLight to-blueDark min-h-screen flex flex-col">
      <div className="container h-full md:w-1/2 mx-auto p-5 flex flex-col flex-grow">
        <div className="flex flex-col items-center">
          <Image width={300} height={300} alt="logo" src={Logo} />
        </div>
        <form className="space-y-6 flex flex-col flex-grow">
          <Input size="lg" placeholder="User ID" />
          <PasswordInput size="lg" placeholder="Password" />
          <Button kinds="normal" href="/dashboard" rounded>
            Sign On
          </Button>

          <div className="flex justify-between p-8 text-white">
            <span>Forgot User ID</span>
            <span>Forgot Password</span>
          </div>
        </form>

        <div className="mt-auto">
          <hr className="w-full bg-white" />
          <div className="flex justify-between p-2 text-white">
            <span>Find ATM</span>
            <span>Register/Activate</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

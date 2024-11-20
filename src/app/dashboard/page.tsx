import { VscSearch } from 'react-icons/vsc';
import { CiCreditCard1 } from 'react-icons/ci';
import { IoIosArrowUp } from 'react-icons/io';
import { FaMoneyCheck } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';

import { Button } from '@ui/Button';

function Page() {
  return (
    <div className="bg-gradient-to-b from-blueLight to-blueDark min-h-screen flex flex-col tracking-wider">
      <div className="mx-2">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-white text-xl font-bold tracking-wider">
            Welcome
          </h1>
          <div className="bg-white rounded-full p-2 flex justify-center items-center">
            <VscSearch className="text-blueDark text-xl" />
          </div>
        </div>
        <div className="flex justify-evenly my-6">
          <div>
            <span className="text-white font-semibold">My Citi</span>
            <hr className="h-1 bg-white" />
          </div>
          <div>
            <span className="text-gray-100/50 font-semibold">Credit Cards</span>
          </div>
          <div>
            <span className="text-gray-100/50 font-semibold">Banking</span>
          </div>
          <div>
            <span className="text-gray-100/50 font-semibold">Loans</span>
          </div>
          <div>
            <span className="text-gray-100/50 font-semibold">Invest</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white">
          <IoIosArrowUp />
          <p>Credit Cards</p>
        </div>

        <div className="bg-[#193a71] shadow-2xl rounded-md p-4 text-white my-4">
          <div className="mb-4 flex justify-between">
            <div className="flex items-center space-x-2">
              <CiCreditCard1 size={30} className="text-gray-400" />
              <span className="text-lg text-gray-400 font-semibold">
                Credit Card
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">$520.98</p>
              <p className="text-sm text-gray-400">Current Balance</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Citi@ / Customer Cash Mastercard@-4321
          </p>
        </div>

        <div className="bg-gray-900 shadow-2xl rounded-md p-4 text-white my-4">
          <div className="mb-4 flex justify-between">
            <div className="flex items-center space-x-2">
              <CiCreditCard1 size={30} className="text-gray-400" />
              <span className="text-lg text-gray-400 font-semibold">
                Credit Card
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">$690.98</p>
              <p className="text-sm text-gray-400">Current Balance</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">Citi Diamond Preferred -6713</p>
        </div>

        <div className="flex items-center gap-2 text-white">
          <IoIosArrowUp />
          <p>Checking</p>
        </div>

        <div className="bg-gradient-to-b from-blueLight to-blueDark shadow-2xl rounded-md p-4 text-white my-4">
          <div className="mb-4 flex justify-between">
            <div className="flex items-center space-x-2">
              <FaMoneyCheck size={30} className="text-gray-400" />
              <span className="text-lg text-gray-400 font-semibold">
                Checking
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">$2,500,000</p>
              <p className="text-sm text-gray-400">Available</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">My Checking -434</p>
        </div>

        <div className="flex my-4 gap-4">
          <Button>Edit</Button>
          <Button>Zelle@</Button>
          <Button>FICO Score</Button>
          <Button>Rewards</Button>
        </div>
      </div>

      <div className="bg-gray-100 rounded-t-md">
        <div className="shadow-2xl bg-white rounded-md m-4 p-4">
          <div className="flex justify-between p-1">
            <p className="font-bold">Transactions</p>
            <SlArrowRight className="text-blueLight" />
          </div>
          <hr />
          <div className="flex justify-between py-4">
            <div className="space-y-1">
              <p>UAE CENTRAL BANK</p>
              <p className="text-sm text-gray-400">YOUFLY eSport Inc</p>
            </div>
            <p>$2,500,000.00</p>
          </div>
          <div className="flex items-center text-sm text-gray-400 justify-between">
            <p>Nov 20,2024</p>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

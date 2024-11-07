import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import styles from '@/app/ui/home.module.css';
import {lusitana} from '@/app/ui/fonts'
import Image from 'next/image'

import { ConnectWalletButton } from './ui/rainbow/ConnectWalletButton';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-indigo-950">
      <div className="relative h-200 w-400 ...">
        <div className="absolute left-0 top-0 h-200 w-400 ">
          <Image
              src="/images/hero-shape-1.svg"
              width={300}
              height={200}
              className="md:block"
              alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <div className="relative h-300 w-500 ...">
        <div className="absolute right-0 top-0 h-300 w-100 ">
          <Image
            src="/images/hero-shape-2.svg"
            width={500}
            height={320}
            className="block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg  md:w-2/5 md:px-20">
            <p className={`${lusitana.className}  text-xl text-gray-100 md:text-3xl md:leading-normal`}>
              <strong>Welcome to mln.</strong> <br/> 
              Connect your wallet to get started !!!
            </p>
          <ConnectWalletButton />
        </div>
        <div className="flex items-center animate-wiggle animate-infinite animate-duration-[5s] justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/images/crypto.png"
            width={1600}
            height={900}
            className="animate-bounce md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>


       

    </main>
  );
}

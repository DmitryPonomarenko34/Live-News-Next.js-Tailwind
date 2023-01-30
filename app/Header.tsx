import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='grid grid-cols-3 p-10 items-center'>
        <button className='w-8 h-8 cursor-pointer'>
          <Bars3Icon />
        </button>
        <Link href='/' prefetch={false}>
          <h1 className='font-serif text-4xl flex-1 text-center'>
            The
            {' '}
            <span className='underline decoration-6 decoration-orange-400'>Live</span>
            {' '}
            News
          </h1>
        </Link>

        <div className='flex items-center justify-end space-x-2'>
          <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
            Subscribe Now!
          </button>
        </div>
      </div>
    </header>
  )
}
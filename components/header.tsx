import { Frame, SunMoon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <>
      <nav className='flex flex-col items-center w-full bg-background-2 border-b border-b-border-2 fixed top-0 sm:top-0 z-20'>
        <div className='max-w-[1180px] h-16 flex flex-col justify-center'>
          <div className='w-[clamp(250px,100vw,1180px)] flex items-center justify-between h-full'>
            <Link href='/'>
              <Frame className="w-6 h-6 text-brand" />
            </Link>
            <div className='border-l border-r border-border-2 h-full flex flec-col items-center'>
              <Link href="/about" className='h-full'>
                <Button variant='ghost' className='min-w-32 h-full border-r border-border-2 rounded-none'>About</Button>
              </Link>
              <Link href="/articles" className='h-full'>
                <Button variant='ghost' className='min-w-32 h-full border-r border-border-2 rounded-none'>Articles</Button>
              </Link>
              <Link href="/projects" className='h-full'>
                <Button variant='ghost' className='min-w-32 h-full border-r border-border-2 rounded-none'>Projects</Button>
              </Link>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <div className="mb-36"></div>
    </>
  )
}

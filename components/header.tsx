'use client'

import { Frame, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);
  
  return (
    <>
      <nav className='flex flex-col items-center w-full bg-background-2 border-b border-b-border-2 fixed top-0 sm:top-0 z-20'>
        <div className='max-w-[1180px] h-16 flex flex-col justify-center w-auto'>
          <div className='w-[clamp(250px,100vw,1180px)] flex items-center justify-between h-full md:px-0 px-6'>
            <Link href='/' onClick={() => isOpen && toggleMenu()}>
              <Frame className="w-6 h-6 text-brand" />
            </Link>
            <div className='border-l border-r border-border-2 h-full md:flex hidden flec-col items-center'>
              <Link href="/about" className='h-full'>
                <Button variant='ghost' className={cn(
                  'min-w-32 h-full border-r border-border-2 rounded-none',
                  pathname == '/about' && 'bg-background-3 text-foreground-2'
                )}>About</Button>
              </Link>
              {/* <Link href="/articles" className='h-full'>
                <Button variant='ghost' className={cn(
                  'min-w-32 h-full border-r border-border-2 rounded-none',
                  pathname == '/articles' && 'bg-background-3 text-foreground-2'
                )}>Articles</Button>
              </Link> */}
              <Link href="/projects" className='h-full'>
                <Button variant='ghost' className={cn(
                  'min-w-32 h-full border-r border-border-2 rounded-none',
                  pathname == '/projects' && 'bg-background-3 text-foreground-2'
                )}>Projects</Button>
              </Link>
            </div>
            <div className='md:block hidden'>
              <ThemeToggle />
            </div>
            <div className='md:hidden block'>
              <Button variant="outline" size="icon" className='[&_svg]:size-5' onClick={toggleMenu}>
                {!isOpen ? (
                  <Menu />
                ): (
                  <X />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: isOpen ? 1 : 0, }}
          transition={{ type: 'tween', duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 shadow-lg overflow-hidden",
            "z-[50]",
            "fixed top-16"
          )}
        >
          <>
            <div className='bg-background-2 h-screen overflow-hidden'>
              <ul className="nav-links flex flex-col gap-5 mb-8 px-6">
                <Link href="/about" className='h-full w-full'>
                  <Button onClick={toggleMenu} variant='ghost' className='px-0 justify-start w-full h-full rounded-none'>About</Button>
                </Link>
                <Link href="/articles" className='h-full w-full'>
                  <Button onClick={toggleMenu} variant='ghost' className='px-0 justify-start w-full h-full rounded-none'>Articles</Button>
                </Link>
                <Link href="/projects" className='h-full'>
                  <Button onClick={toggleMenu} variant='ghost' className='px-0 justify-start w-full h-full rounded-none'>Projects</Button>
                </Link>

                <div className='flex justify-between items-center border-y border-border-2 py-5'>
                  <span className='text-sm text-foreground-3'>Theme</span>
                  <ThemeToggle />
                </div>
              </ul>
            </div>
          </>
        </motion.div>
      )}
      <div className={cn("md:mb-36 mb-28")}></div>
    </>
  )
}

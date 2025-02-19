import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

export default function Socials({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("flex gap-4 justify-center mt-10 relative z-10", className)}>
        <Link href="https://www.linkedin.com/in/usmaila-abdoul" target="_blank" rel="nofollow" className='h-full'>
          <Button variant='secondary' size='icon' 
            className={cn(
              'rounded-full [&_svg]:size-5',
              'bg-background-4 text-foreground-6 dark:bg-background-4 dark:text-foreground-6 hover:bg-background-4/80'
            )}
          ><FaLinkedin /></Button>
        </Link>
        <Link href="https://x.com/Abdoul_usma_ila" target="_blank" rel="nofollow" className='h-full'>
          <Button variant='secondary' size='icon' 
            className={cn(
              'rounded-full [&_svg]:size-5',
              'bg-background-4 text-foreground-6 dark:bg-background-4 dark:text-foreground-6 hover:bg-background-4/80'
            )}
          ><FaXTwitter /></Button>
        </Link>
        <Link href="https://www.github.com/usmailaabdoul" target="_blank" rel="nofollow" className='h-full'>
          <Button variant='secondary' size='icon' 
            className={cn(
              'rounded-full [&_svg]:size-5',
              'bg-background-4 text-foreground-6 dark:bg-background-4 dark:text-foreground-6 hover:bg-background-4/80'
            )}
          ><FaGithub /></Button>
        </Link>
        <Link href="/about" className='h-full'>
          <Button variant='secondary' size='icon' 
            className={cn(
              'rounded-full [&_svg]:size-5',
              'bg-background-4 text-foreground-6 dark:bg-background-4 dark:text-foreground-6 hover:bg-background-4/80'
            )}
          ><FaGoogle /></Button>
        </Link>
      </div>
    </>
  )
}

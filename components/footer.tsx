import { Frame, SunMoon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Box from './ui/box'
import { ThemeToggle } from './theme-toggle'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box crossPosition={['top-left', 'top-right']} className="border-t-0 flex-row">
        <Box className="flex-row w-1/2 border-t-0 border-b-0 border-l-0 border-r-0 p-5 justify-center items-center gap-4">
          <Link href='/'>
            <Button variant='link'>Home</Button>
          </Link>
          <Link href='/about'>
            <Button variant='link'>About</Button>
          </Link>
          <Link href='/articles'>
            <Button variant='link'>Articles</Button>
          </Link>
          <Link href='/projects'>
            <Button variant='link'>Projects</Button>
          </Link>
        </Box>
        <Box className="w-1/2 border-t-0 border-b-0 border-r-0 p-5 justify-center items-center">
          <p>© {year} Usmaila Abdoul. All rights reserved.</p>
        </Box>
        <Box className='w-20 flex items-center justify-center border-t-0 border-b-0 border-r-0'>
          <ThemeToggle />
        </Box>
      </Box>
    </footer>
  )
}

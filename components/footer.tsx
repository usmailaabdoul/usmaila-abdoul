import { Frame, SunMoon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Box from './ui/box'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box crossPosition={['top-left', 'top-right']} className="border-t-0 flex-row">
        <Box className="flex-row w-1/2 border-t-0 border-b-0 border-l-0 border-r-0 p-5 justify-center items-center gap-4">
          <Button variant='link'>About</Button>
          <Button variant='link'>Articles</Button>
          <Button variant='link'>Projects</Button>
        </Box>
        <Box className="w-1/2 border-t-0 border-b-0 border-r-0 p-5 justify-center items-center">
          <p>© {year} Usmaila Abdoul. All rights reserved.</p>
        </Box>
      </Box>
    </footer>
  )
}

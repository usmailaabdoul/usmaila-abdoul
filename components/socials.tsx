import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export default function Socials() {
  return (
    <>
      <div className="flex gap-4 justify-center mt-10 relative z-10">
        <Link href="https://www.linkedin.com/in/usmaila-abdoul" target="_blank" rel="nofollow" className='h-full'>
          <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaLinkedin /></Button>
        </Link>
        <Link href="https://x.com/Abdoul_usma_ila" target="_blank" rel="nofollow" className='h-full'>
          <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaXTwitter /></Button>
        </Link>
        <Link href="https://www.github.com/usmailaabdoul" target="_blank" rel="nofollow" className='h-full'>
          <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaGithub /></Button>
        </Link>
        <Link href="/about" className='h-full'>
          <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaGoogle /></Button>
        </Link>
      </div>
    </>
  )
}

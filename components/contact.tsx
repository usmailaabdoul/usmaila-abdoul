import React from 'react'
import Box from './ui/box'
import Link from 'next/link'
import Socials from './socials'

export default function Contact() {
  return (
    <>
      <Box className="min-h-[544px] grid md:grid-cols-3 grid-cols-1">
        <Box className='border-t-0 border-l-0 border-b-0'>
          <div />
        </Box>
        <Box className='border-t-0 border-l-0 border-b-0'>
          <div />
        </Box>
        <Box className='border-0'>
          <div />
        </Box>
        
        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className="text-5xl pb-4 text-center">Contacts</h2>
          <p className="text-center">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/usmaila-abdoul"
              target="_blank"
              rel="nofollow"
              className="relative z-10 text-brand"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <br />
            <Link 
              href="https://x.com/Abdoul_usma_ila" 
              target="_blank" 
              rel="nofollow"
              className="relative z-10 text-brand"
            >
              Twitter
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
          
          <Socials />
        </div>
      </Box>
    </>
  )
}

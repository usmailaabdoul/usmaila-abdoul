import React from 'react'
import Box from './ui/box'
import Link from 'next/link'
import Socials from './socials'

export default function Contact() {
  return (
    <>
      <Box className="md:min-h-[544px] min-h-[400px] grid md:grid-cols-3 grid-cols-1">
        <Box className='md:flex hidden border-t-0 border-l-0 border-b-0'>
          <div />
        </Box>
        <Box className='md:flex hidden border-t-0 border-l-0 border-b-0'>
          <div />
        </Box>
        <Box className='md:flex hidden border-0'>
          <div />
        </Box>

        <div className="md:hidden block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-full border-[1.5px] border-t-0 border-l-0 border-b-0 border-border-2 md:border-solid border-dashed"/>

        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full px-5'>
          <h2 className="md:text-5xl text-4xl pb-4 text-center">Contacts</h2>
          <p className="text-center font-inter">
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

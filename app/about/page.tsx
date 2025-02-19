import React from 'react'
import Container from '@/components/ui/container'
import Box from '@/components/ui/box'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const boxAtEdges = [9, 19, 29, 39];

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Container className="">
        <Box className='min-h-44 grid grid-cols-10' crossPosition={['top-left', 'bottom-right']}>
          {new Array(40).fill('').map((val, id) => {
            const row = Math.floor(id / 10);
            const col = id % 10;
            // We only remove borders in row 1 or 2 (i.e., 2nd or 3rd row) AND col not 0 or 9
            const centerRows = (row === 1 || row === 2) && col !== 0 && col !== 9;
            const bottomRow = (row === 2) && col !== 0 && col !== 9;
            const centerRightRow = (row === 1 || row === 2) && (id == 18 || id == 28);

            return (
              <Box key={id} className={cn(
                'min-h-24 border-t-0 border-l-0',
                // If we're removing borders, apply border-0
                // Otherwise, keep the original border logic
                centerRows ? 'border-0' : 'border-t-0 border-l-0',
                !centerRows && id > 29 && 'border-b-0',
                !centerRows && boxAtEdges.includes(id) && 'border-r-0',
                bottomRow && 'border-b-[1.5px]',
                centerRightRow && 'border-r-[1.5px]'
              )}>
                <div/>
              </Box>
            )
          })}
          <div className='absolute top-[50.5%] left-[50.25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
            <h1 className="text-5xl">About</h1>
            <div className="flex gap-4 justify-center mt-4 relative z-10">
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
          </div>
        </Box>
        <Box className='border-t-0 flex-row'>
          <Box className='flex-col p-10 border-t-0 border-b-0 border-l-0'>
            <div className="relative w-64 h-64 z-10">
              <div className="absolute inset-0 backdrop-blur-sm overflow-hidden">
                <Image 
                  src="/usmaila.png" 
                  alt="usmailas-picture"
                  priority 
                  className="w-full h-full object-cover"
                  width={256}
                  height={256}
                />
              </div>
            </div>
            <Box className='p-4'>
              <h2 className='text-xl mb-2'>Skills</h2>
              <ul className='flex flex-wrap flex-shrink gap-2'>
                <li className='bg-white text-black px-2 rounded-full'>React</li>
                <li className='bg-white text-black px-2 rounded-full'>React Native</li>
                <li className='bg-white text-black px-2 rounded-full'>TailwindCSS</li>
                <li className='bg-white text-black px-2 rounded-full'>Node.JS</li>
                <li className='bg-white text-black px-2 rounded-full'>PostgreSQL</li>
                <li className='bg-white text-black px-2 rounded-full'>MongoDB</li>
                <li className='bg-white text-black px-2 rounded-full'>TypeScript</li>
                <li className='bg-white text-black px-2 rounded-full'>GitHub</li>
              </ul>

              <h2 className='text-xl mt-4 mb-2'>Interests</h2>
              <ul className='flex flex-wrap flex-shrink gap-2'>
                <li className='bg-white text-black px-2 rounded-full'>Swift</li>
                <li className='bg-white text-black px-2 rounded-full'>IOS</li>
              </ul>
            </Box>
          </Box>
          <Box className='flex-col gap-4 p-10 border-t-0 border-b-0 border-l-0 border-r-0'>
            <p className='text-lg'>
              Hi there! I&apos;m Usmaila Abdoul, a Full Stack Engineer with 4+ years of experience who&apos;s passionate about building web and mobile applications. I love the challenge of taking an idea and turning it into a working product that people can use.
            </p>
            <p className='text-lg'>
              My focus is on building high-quality applications that meet client expectations and are built to last. I have experience in a variety of industries, and I&apos;m always looking for new challenges and opportunities to grow. As a team player, I enjoy collaborating with others to find creative solutions to complex problems. I&apos;m also a quick learner and enjoy staying up-to-date with the latest trends and technologies in the industry.
            </p>
            <p className='text-lg'>
              When I&apos;m not coding, you can find me volunteering for local community initiatives, and staying active with outdoor activities. I&apos;m based in Buea, Southwest, Cameroon, but I&apos;m open to working remotely or relocating for the right opportunity.
            </p>
            <p className='text-lg'>
              If you&apos;re looking for a dedicated and skilled Full Stack Engineer who&apos;s passionate about delivering high-quality products, feel free to connect with me on LinkedIn or send me an email. I&apos;d love to hear from you!
            </p>
          </Box>
        </Box>
        
        <Footer />
      </Container>
    </div>
  )
}

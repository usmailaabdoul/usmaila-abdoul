import React from 'react'
import Container from '@/components/ui/container'
import Box from '@/components/ui/box'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Container className="">
        <Box className='h-[380px]' crossPosition={['top-left', 'bottom-right']}>
          <div className="absolute inset-0" style={{ 
            backgroundImage: `
              linear-gradient(to right, #1F1F1F 1.5px, transparent 1px),
              linear-gradient(to bottom, #1F1F1F 1.5px, transparent 1px)
            `,
            backgroundSize: '108px 95px'
          }} />
          <div className='bg-black h-[188px] w-[calc(100%_-_215px)] absolute top-[50.5%] left-[50.25%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
            <h1 className="text-4xl">About</h1>
          </div>
        </Box>
        <Box className='border-t-0 flex-row'>
          <Box className='flex-col p-10 border-t-0 border-b-0 border-l-0'>
            <div className="relative w-64 h-64 z-10">
              <div className="absolute inset-0 backdrop-blur-sm overflow-hidden">
                <img 
                  src="/usmaila.png" 
                  alt="placeholder" 
                  className="w-full h-full object-cover"
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

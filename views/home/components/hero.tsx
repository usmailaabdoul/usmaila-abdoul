import Socials from '@/components/socials';
import Box from '@/components/ui/box';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <Box className='min-h-44 grid grid-cols-10' crossPosition={['top-left', 'bottom-right']}>
        {new Array(80).fill('').map((val, id) => {
          const row = Math.floor(id / 10);
          const col = id % 10;

          const rightEdge = col === 9;
          const bottomEdge = row === 7;

          return (
            <Box key={id} className={cn(
              'min-h-24 border-t-0 border-l-0',
              bottomEdge && 'border-b-0',
              rightEdge && 'border-r-0',
            )}>
              <div/>
            </Box>
          )
        })}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_230px)] flex flex-col items-center justify-center p-14">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-3xl h-4/5 bg-transparent backdrop-blur-[2px]" 
              style={{
                background: 'radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, transparent 70%)'
              }} />
          </div>

          <h1 className="text-5xl font-bold mb-8 relative z-10 max-w-3xl text-center">
            Hi, I&apos;m Usmaila Abdoul
          </h1>
          
          <p className="dark:text-gray-300 text-xl mb-12 max-w-2xl mx-auto text-center relative z-10 px-8">
            A Software Engineer<br/>
            With more than 4 years of experience, i am passionate about building web and mobile applications. I love the challenge of taking an idea and turning it into a working product that people can use.
          </p>
          
          <div className="absolute -inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-orange-500/20 opacity-90" />
          </div>
          
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

          <Socials />
        </div>
      </Box>
    </>
  )
}

import Socials from '@/components/socials';
import Box from '@/components/ui/box';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <Box crossPosition={['top-left', 'bottom-right']} className='md:hidden'>
        <Box className='border-0 border-b py-10 px-5'>
          <h1 className="text-2xl font-bold mb-4 relative z-10 text-center">
            Hi, I&apos;m Usmaila Abdoul
          </h1>
          <p className="text-foreground-3 font-light text-lg text-center font-sans">
            A Software Engineer<br/>
            With more than 4+ years of experience, i am passionate about building web and mobile applications. I love the challenge of taking an idea and turning it into a working product that people can use.
          </p>
          <Socials />
        </Box>
        <Box className='border-0 grid grid-cols-7'>
          {new Array(35).fill('').map((val, id) => {
            const row = Math.floor(id / 7);
            const col = id % 7;

            const rightEdge = col === 6;
            const bottomEdge = row === 4;

            return (
              <Box key={id} className={cn(
                'min-h-14 border-t-0 border-l-0',
                bottomEdge && 'border-b-0',
                rightEdge && 'border-r-0',
              )}>
                <div/>
              </Box>
            )
          })}

          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_100px)] flex flex-col items-center justify-center p-4">
            <div className="relative w-44 h-44 z-10">
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
          </div>
        </Box>
      </Box>
      <Box className='min-h-44 md:grid grid-cols-10 hidden' crossPosition={['top-left', 'bottom-right']}>
        {new Array(80).fill('').map((val, id) => {
          const row = Math.floor(id / 10);
          const col = id % 10;

          const emptyRows = row !== 0 && row !== 7 && col !== 0 && col !== 9;

          const rightEdge = col === 9;
          const bottomEdge = row === 7;
          const emptyRightEdge = col == 8;
          const emptyBottomEdge = row == 6;

          return (
            <Box key={id} className={cn(
              'min-h-24 border-t-0 border-l-0',
              emptyRows && 'border-0',
              emptyRows && emptyRightEdge && 'border-r-[1.5px]',
              emptyRows && emptyBottomEdge && 'border-b-[1.5px]',
              bottomEdge && 'border-b-0',
              rightEdge && 'border-r-0',
            )}>
              <div/>
            </Box>
          )
        })}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_230px)] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-5 relative z-10 max-w-3xl text-center">
            Hi, I&apos;m Usmaila Abdoul
          </h1>
          
          <p className="dark:text-gray-300 text-xl text-center px-5 mb-8 font-sans">
            A Software Engineer<br/>
            With more than 4+ years of experience, i am passionate about building web and mobile applications. I love the challenge of taking an idea and turning it into a working product that people can use.
          </p>
          
          <div className="relative w-60 h-60">
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
          <Socials className='mt-5'/>
        </div>
      </Box>
    </>
  )
}

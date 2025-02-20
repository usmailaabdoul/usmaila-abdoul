import React from 'react'
import Container from '@/components/ui/container'
import Box from '@/components/ui/box'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const boxAtEdges = [9, 19, 29, 39];

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <Container className="">
        <Box className='md:min-h-44 min-h-36 grid grid-cols-10' crossPosition={['top-left', 'bottom-right']}>
          {new Array(40).fill('').map((val, id) => {
            const row = Math.floor(id / 10);
            const col = id % 10;
            // We only remove borders in row 1 or 2 (i.e., 2nd or 3rd row) AND col not 0 or 9
            const centerRows = (row === 1 || row === 2) && col !== 0 && col !== 9;
            const bottomRow = (row === 2) && col !== 0 && col !== 9;
            const centerRightRow = (row === 1 || row === 2) && (id == 18 || id == 28);

            return (
              <Box key={id} className={cn(
                'md:min-h-24 min-h-16 border-t-0 border-l-0',
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
            <h1 className="md:text-5xl text-4xl">Articles</h1>
          </div>
        </Box>
        <Box className='border-t-0 md:flex-row flex-col h-80 justify-center items-center'>
          <div className='md:text-4xl text-3xl'>Coming soon!</div>
        </Box>
        
        <Footer />
      </Container>
    </div>
  )
}

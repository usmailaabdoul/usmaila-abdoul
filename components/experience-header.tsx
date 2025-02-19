'use client'

import Box from './ui/box'
import { Button } from './ui/button'
import { FaFileArrowDown } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

export default function ExperienceHeader({ className }: {className?: string}) {
  return (
    <>
      <Box className={cn("flex-row", className)}>
        <Box className="p-10 flex-1 border-t-0 border-b-0 border-l-0 border-r-0">
          <div className="text-4xl">Experience</div>
        </Box>
        <Box crossPosition={['top-right', 'bottom-right']} className="p-10 border-t-0 border-b-0 border-r-0">
          <Button
            onClick={() => window.open("/Usmaila_Abdoul_-_Software_Engineer.pdf")}
            variant={'secondary'}
            className='bg-background-4 text-foreground-6 hover:bg-background-4 hover:opacity-85'
            >Download CV <FaFileArrowDown />
          </Button>
        </Box>
      </Box>
    </>
  )
}

import React from 'react'
import Box from './ui/box'
import { EXPERIENCES } from '@/constants'
import ExperienceHeader from './experience-header'

export default function Experiences({ className }: {className?: string}) {
  return (
    <>
      <ExperienceHeader className={className} />

      <Box className="h-fit grid md:grid-cols-3 grid-cols-1">
        <Box className="col-span-1 row-span-1 md:block hidden border-t-0 border-l-0 border-b-0 border-dashed"><div/></Box>
        <Box className="relative md:col-[2_/_4] col-span-1 md:p-10 p-5 md:py-24 py-16 border-0">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-full border-[1.5px] border-t-0 border-l-0 border-b-0 border-border-2 border-dashed"/>
          <ul className="flex flex-col md:gap-24 gap-16">
            {EXPERIENCES.map((experience) => {
              return (
                <li key={experience.company}>
                  <div className="relative flex flex-col gap-5">
                    <time className="absolute top-[6px] right-[calc(100%_+_30px)] -translate-x-[1px] md:flex hidden gap-5 items-center w-max" dateTime={experience.startDate}>
                      <span className="text-foreground-3 text-sm">{experience.startDate} - {experience.endDate}</span>
                      <div className="w-5 h-5 bg-background-2 border-[1.5px] border-border-2 rounded-full shadow bg-clip-border grid place-items-center">
                        <div className="w-2 h-2 rounded-full bg-brand"/>
                      </div>
                    </time>
                    <time className="gap-5 items-center w-max bg-background-4 px-3 py-1 rounded-full" dateTime={experience.startDate}>
                      <span className="text-foreground-6 text-sm">{experience.startDate} - {experience.endDate}</span>
                    </time>
                    <div className="flex md:flex-row flex-col gap-1 justify-between md:items-center">
                      <h2 className="md:text-3xl text-2xl">{experience.company}</h2>
                      <span className="md:text-sm text-xs font-medium text-foreground-3">{experience.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="md:text-xl text-lg text-foreground-3">{experience.title}</h3>
                    </div>
                    <div className="mt-1">
                      <ul 
                        className="list-disc list-inside flex flex-col gap-2 text-foreground-3/90" 
                        dangerouslySetInnerHTML={{__html: experience.description}}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Box>
      </Box>
    </>
  )
}

import React from 'react'
import Box from './ui/box'
import { EXPERIENCES } from '@/constants'
import ExperienceHeader from './experience-header'

export default function Experiences({ className }: {className?: string}) {
  return (
    <>
      <ExperienceHeader className={className} />

      <Box className="h-fit grid md:grid-cols-3 grid-cols-1">
        <Box className=" col-span-1 row-span-1 md:block hidden border-t-0 border-l-0 border-b-0 border-dashed"><div/></Box>
        <Box className="relative md:col-[2_/_4] col-span-1 p-10 py-24 border-0">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-full border-[1.5px] border-t-0 border-l-0 border-b-0 border-[#242424] border-dashed"/>
          <ul className="flex flex-col gap-24">
            {EXPERIENCES.map((experience) => {
              return (
                <li key={experience.company}>
                  <div className="relative flex flex-col gap-5">
                    <time className="absolute top-[6px] right-[calc(100%_+_30px)] -translate-x-[1px] flex gap-5 items-center w-max" dateTime="2021-05-21">
                      <span className="text-[#A1A1A1] text-sm">{experience.startDate} - {experience.endDate}</span>
                      <div className="w-5 h-5 bg-black border-[1.5px] border-[#242424] rounded-full shadow bg-clip-border grid place-items-center">
                        <div className="w-2 h-2 rounded-full bg-brand"/>
                      </div>
                    </time>
                    <div className="flex justify-between items-center">
                      <h2 className="text-3xl">{experience.company}</h2>
                      <span className="text-sm font-medium text-[#A1A1A1]">{experience.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl text-[#A1A1A1]">{experience.title}</h3>
                    </div>
                    <div className="mt-1">
                      <ul 
                        className="list-disc list-inside flex flex-col gap-2 text-white/90" 
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

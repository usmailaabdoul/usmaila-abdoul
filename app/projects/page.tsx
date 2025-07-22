import React from 'react'
import Container from '@/components/ui/container'
import Box from '@/components/ui/box'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaGithub, FaGoogle, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Socials from '@/components/socials'
import { ProjectProp, PROJECTS } from '@/constants';
import { Link as LinkIcon } from 'lucide-react';

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
            <h1 className="md:text-5xl text-4xl">Projects</h1>
          </div>
        </Box>
        <Box crossPosition={['bottom-left']} className="p-5 border-t-0"><div/></Box>
        <Box className='border-t-0 grid md:grid-cols-3 grid-cols-1 grid-auto-rows min-h-full'>
          {PROJECTS.map((project, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;

            const isEdge = col == 2;
            const isLastRow = (row * 3) >= (PROJECTS.length - 2);
            const isLast = (i === PROJECTS.length -1)

            return (
              <Link
                key={project.id}
                prefetch
                href={project.link}
                target="_blank" 
                rel="nofollow"
                className="block w-full group hover:bg-background-3 hover:text-foreground-2 transition-all"
                aria-label={`View details for ${project.title}`}
              >
                <Box 
                  className={cn(
                    'md:p-10 px-5 py-10 border-t-0 border-l-0 row-span-full h-full md:border-r-[1.5px] border-r-0',
                    isEdge && 'border-r-0',
                    isLastRow && 'md:border-b-0 border-b-[1.5px]',
                    isLast && 'border-b-0'
                  )}
                >
                  <Image
                    width={300}
                    height={300}
                    src={project.featuredImage}
                    // quality={80}
                    priority
                    sizes="(max-width: 768px) 50vw, 33vw"
                    alt={`Cover photo of ${project.title}`}
                    className="w-full h-[200px] object-cover mb-5"
                  />
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className='flex items-start justify-between'>
                    {/* <div className='mr-2 bg-background-4 text-foreground-6 px-3 text-sm rounded-full w-fit'>{project.date}</div> */}
                    <div className='mr-2 bg-background-4 text-foreground-6 px-2 text-xs rounded-full w-fit flex items-center gap-1 font-inter'><LinkIcon size={12} /> link</div>
                    <ul className='flex flex-wrap justify-end font-inter'>
                      {project.techStack.map((stack, i) => (
                        <li key={stack} className='w-fit text-xs'>
                          <span>{stack}</span>
                          {i != (project.techStack.length-1) && (
                            <span aria-hidden="true" className="mx-1">•</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.description && <p className='mt-4 text-foreground-3 font-inter'>{project.description}</p>}
                </Box>
              </Link>
            )}
          )}
        </Box>
        
        <Footer />
      </Container>
    </div>
  )
}

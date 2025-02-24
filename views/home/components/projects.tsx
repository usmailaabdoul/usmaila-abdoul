import { getIcon } from '@/components/recent-activities';
import Box from '@/components/ui/box';
import { ProjectProp, PROJECTS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Box className="h-fit grid md:grid-cols-3 grid-cols-1">
        <Box className="col-span-1 row-span-1 border-t-0 border-l-0 md:border-b-0 md:border-r-[1.5px] border-r-0 md:p-10 p-5">
          <div className="w-1/3">
            <h2 className="text-4xl">Projects</h2>
          </div>
        </Box>
        <Box className="relative md:col-[2_/_4] col-span-1 md:p-0 p-5 md:py-10 md:pr-10 gap-10 border-0 grid md:grid-cols-2 grid-cols-1">
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-full border-[1.5px] border-t-0 border-l-0 border-b-0 border-border-2 md:border-solid border-dashed"/>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Box>
      </Box>
    </>
  )
}

const ProjectCard = ({
  link,
  featuredImage,
  title,
  date,
  techStack
}: ProjectProp) => {
  return (
    <Box className="flex min-h-56 p-5 md:inset-x-10">
      <Link
        prefetch
        href={link}
        target="_blank" 
        rel="nofollow"
        className="block w-full shadow-lg group"
        aria-label={`View details for ${title}`}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            fill
            src={`${featuredImage}?w=28&blur=auto&fm=auto&q=auto`}
            alt=""
            className="object-cover blur-md opacity-80 transition-transform duration-300 group-hover:scale-110"
            // quality={20}
            priority
            sizes="(max-width: 768px) 50vw, 33vw"
            style={{ transform: 'scale(1.1)' }}
          />
        </div>
        {featuredImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              width={300}
              height={300}
              src={featuredImage}
              // quality={80}
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
              alt={`Cover photo of ${title}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <div className="flex flex-col justify-center absolute bottom-0 left-0 right-0 h-[40%] p-4 bg-gradient-to-t from-black/95 to-transparent text-white">
          <h3 className="text-xl font-bold truncate">{title}</h3>
          <div 
            role="list" 
            className="text-xs opacity-75"
          >
            {techStack?.map((stack, index) => (
              <span 
                key={stack || index}
                role="listitem"
                className="inline-block"
              >
                {stack}
                {index < techStack.length - 1 && (
                  <span aria-hidden="true" className="mx-1">•</span>
                )}
              </span>
            ))}
          </div>
          {/* <div className={`text-white px-2 rounded-full flex w-fit items-center gap-1`}>
            <span>{date}</span>
          </div> */}
        </div>
      </Link>
    </Box>
  )
}
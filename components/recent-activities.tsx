import Image from 'next/image'
import Box from './ui/box'
import Link from 'next/link'
import { ActivityProp, PlatformProp, RECENT_ACTIVITIES } from '@/constants'
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

export default function RecentActivities() {
  return (
    <>
      <Box crossPosition={['top-left']} className="w-full md:flex-row flex-col">
        <Box className="md:p-10 p-5 md:w-1/3 w-full border-t-0 md:border-b-0 border-l-0 border-r-0">
          <h2 className="text-4xl">Recent Activity</h2>
        </Box>
        <Box className="md:p-10 p-5 md:w-2/3 w-full border-t-0 border-b-0 border-r-0 md:border-l border-l-0 gap-5 flex-wrap flex-row">
          {RECENT_ACTIVITIES.map((activity) => {
            return (
              <ActivityCard key={activity.id} {...activity} />
            )
          })}
        </Box>
      </Box>
    </>
  )
}

const ActivityCard = ({
  title,
  image,
  date,
  platform,
  link
}: ActivityProp ) => {
  return (
    <Box className="flex md:w-[calc(33.33%_-_13.33px)] w-full h-52 border-0">
      <Link
        prefetch
        href={link}
        target="_blank" 
        rel="nofollow"
        className="block relative w-full aspect-[4/4] overflow-hidden shadow-lg group focus:outline-none focus:ring-4 focus:ring-paleCyan focus:ring-offset-2"
        aria-label={`View details for ${title}`}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <Image
            fill
            src={`${image}?w=28&blur=auto&fm=auto&q=auto`}
            alt=""
            className="object-cover blur-md opacity-80 transition-transform duration-300 group-hover:scale-110"
            quality={20}
            priority
            sizes="(max-width: 768px) 50vw, 33vw"
            style={{ transform: 'scale(1.1)' }}
          />
        </div>
        {image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              width={300}
              height={300}
              src={image}
              quality={80}
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
              alt={`Cover photo of ${title}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] p-4 bg-gradient-to-t from-black/95 to-transparent text-white">
          <h3 className="text-xl font-bold truncate">{title}</h3>
          <div 
            role="list" 
            className="text-xs flex justify-between"
          >
            <div className={cn(`bg-${platform} text-white px-2 py-1 rounded-full flex w-fit items-center gap-1`)}>
              <span>{platform}</span>
              {getIcon(platform)}
            </div>
            <div className={`text-white px-2 rounded-full flex w-fit items-center gap-1`}>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </Link>
    </Box>
  )
}


export const getIcon = (platform: PlatformProp ) => {
  if (platform == 'linkedIn') return <FaLinkedin />
  if (platform == 'twitter') return <FaXTwitter />
  if (platform == 'github') return <FaGithub />
  if (platform == 'instagram') return <FaInstagram />
}
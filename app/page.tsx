import Link from "next/link";
import Header from "@/components/header";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { FaGithub, FaLinkedin, FaXTwitter, FaGoogle, FaFileArrowDown } from "react-icons/fa6";


export default function home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <div className="mt-44"></div>
      <div className="flex flex-col items-center">
        <Container className="">
          {/* Hero */}
          <Box 
            className="flex justify-center items-center py-5"
            crossPosition={["bottom-right", 'top-left']}
          >
            <div className="absolute inset-0" style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '108px 111px'
            }} />

            <div className="relative h-full flex flex-col items-center justify-center p-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-3xl h-4/5 bg-transparent backdrop-blur-[2px]" 
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, transparent 70%)'
                    }} />
              </div>

              <h1 className="text-5xl font-bold text-white mb-8 relative z-10 max-w-3xl text-center">
                Hi, I&apos;m Usmaila Abdoul
              </h1>
              
              <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto text-center relative z-10 px-8">
                A Software Engineer<br/>
                With more than 4 years of experience, i am passionate about building web and mobile applications. I love the challenge of taking an idea and turning it into a working product that people can use.
              </p>
              
              <div className="absolute -inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-orange-500/20 opacity-90" />
              </div>
              
              <div className="relative w-64 h-64 z-10">
                <div className="absolute inset-0 backdrop-blur-sm rounded-lg overflow-hidden">
                  <img 
                    src="/usmaila.png" 
                    alt="placeholder" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-center mt-10 relative z-10">
                <Link href="https://www.linkedin.com/in/usmaila-abdoul" target="_blank" rel="nofollow" className='h-full'>
                  <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaLinkedin /></Button>
                </Link>
                <Link href="https://x.com/Abdoul_usma_ila" target="_blank" rel="nofollow" className='h-full'>
                  <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaXTwitter /></Button>
                </Link>
                <Link href="https://www.github.com/usmailaabdoul" target="_blank" rel="nofollow" className='h-full'>
                  <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaGithub /></Button>
                </Link>
                <Link href="/about" className='h-full'>
                  <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaGoogle /></Button>
                </Link>
              </div>
            </div>
          </Box>
          <Box className="p-5 border-t-0 border-b-0"><div/></Box>

          {/* Recent Activity */}
          <Box crossPosition={['top-left']} className="w-full">
            <Box className="p-10 w-1/3 border-t-0 border-b-0 border-l-0 border-r-0">
              <h2 className="text-4xl">Recent Activity</h2>
            </Box>
            <Box className="p-10 w-2/3 border-t-0 border-b-0 border-r-0 gap-5 flex-wrap">
              <Box className="flex w-[198px] h-52 p-5">LinkedIn message</Box>
              <Box className="flex w-[198px] h-52 p-5">LinkedIn message</Box>
              <Box className="flex w-[198px] h-52 p-5">LinkedIn message</Box>
            </Box>
          </Box>

          {/* Experience */}
          <Box className="border-t-0 border-b-0">
            <Box className="p-10 flex-1 border-t-0 border-b-0 border-l-0 border-r-0">
              <div className="text-4xl">Experience</div>
            </Box>
            <Box crossPosition={['top-right', 'bottom-right']} className="p-10 border-t-0 border-b-0 border-r-0">
              <Button variant={'secondary'}>Download CV <FaFileArrowDown /></Button>
            </Box>
          </Box>
          {/* Experiences */}
          <Box className="h-auto border-t-0 border-b-0 flex-col gap-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1.5px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1.5px, transparent 1px)
              `,
              backgroundSize: '360px 100%'
            }} />

            <Box className="flex-col p-10 border-r-0 border-l-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl">GitStart Community (YC S19)</h3>
                <span className="text-sm font-bold">06/2021 - Present</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-brand">Technical Lead & Senior Software Developer</h3>
                <span className="text-sm font-bold">San Francisco & Hong Kong · Remote</span>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[#A1A1A1]">
                  <li>Operated as a full-stack developer for a distributed engineering team, delivering scalable public-facing web applications.</li>
                  <li>Developed advanced features across multiple client projects using <strong>React.js, Next.js, React Native, Redux, Node.js. and TypeScript</strong>,
                  enhancing user experience and functionality.</li>
                  <li>Optimized application performance for Core Web Vitals using <strong>Server-Side
                  Rendering (SSR)</strong> and <strong>Static Site Generation (SSG)</strong> with Next.js.</li>
                  <li>Led a team of six developers, managing Agile workflows, code reviews
                  and stand-ups to deliver projects on time and withing budget.</li>
                  <li>Merged 100+ pull requests, shipping 3,000+ credits in features and
                  driving significant revenue growth for the team.</li>
                  <li>Built API endpoints with Express.js and databases like PostgreSQL.</li>
                  <li>Ensured code quality through unit testing (React Testing Library).</li>
                </ul>
              </div>
            </Box>

            <Box crossPosition={['top-right']} className="flex-col p-10 border-r-0 border-l-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl">The Sports Media Agency</h3>
                <span className="text-sm font-bold">01/2022 - 12/2023</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-brand">Frontend Developer</h3>
                <span className="text-sm font-bold">London · Remote</span>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[#A1A1A1]">
                  <li>Revamped, and redesigned various sports media websites using Angular and TypeScript, achieving improvements in performance optimization
                    and load times.</li>
                  <li>Developed and maintained new features to enhance SEO and WCAG accessibility compliance.</li>
                  <li>Collaborated with designers and backend engineers to integrate APIs, delivering seamless user-centric features.</li>
                  <li>Conducted code reviews and peer mentoring to uphold quality standards in a collaborative Agile environment</li>
                </ul>
              </div>
            </Box>

            <Box crossPosition={['top-right']} className="flex-col p-10 border-r-0 border-l-0 border-b-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl">Digital Renter</h3>
                <span className="text-sm font-bold">03/2019 - 04/2021</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl text-brand">Frontend Developer</h3>
                <span className="text-sm font-bold">Cameroon · Hybrid</span>
              </div>
              <div className="mt-4">
                <ul className="list-disc list-inside flex flex-col gap-2 text-[#A1A1A1]">
                  <li>Designed and developed the Digital Rental cross-platform mobile application using React Native, achieving over 1,000+ downloads across iOS and Android platforms.</li>
                  <li>Created a Facebook Messenger bot with Node.js, reducing customer support costs by 25% and driving more traffic to the company website.</li>
                  <li>Leveraged React Native to build cross platform mobile application, driving revenue up and user satisfaction.</li>
                  <li>Built API endpoints with Express.js and databases like PostgreSQL.</li>
                  <li>Provided coaching and mentorship to junior developers, fostering a collaborative and proactive development culture.</li>
                </ul>
              </div>
            </Box>
          </Box>
          <Box crossPosition={['top-right', 'bottom-left']} className="py-5 border-b-0"><div/></Box>
          
          {/* Projects */}
          <Box crossPosition={['bottom-right']} className="p-10 h-[532px] border-t-0 border-b-0">
            <div className="absolute inset-0 -z-10" style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.08) 1.5px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1.5px, transparent 1px)
                `,
                backgroundSize: '360px 100%'
              }} />
            <div className="w-1/3">
              <h2 className="text-4xl">Projects</h2>
            </div>
            <div className="w-2/3 flex flex-wrap gap-9 absolute right-[-42px]">
              <Box className="flex w-[320px] h-52 p-5 border-r-0">Project 1</Box>
              <Box className="flex w-[320px] h-52 p-5 border-r-0">Project 2</Box>
              <Box className="flex w-[320px] h-52 p-5 border-r-0">Project 3</Box>
            </div>
          </Box>

          {/* Contact */}
          <Box className="py-44 border-t-0 flex-col items-center">
            <div className="absolute inset-0" style={{ 
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.08) 1.5px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1.5px, transparent 1px)
                `,
                backgroundSize: '360px 100%'
              }} />
            <h2 className="text-5xl pb-4">Contacts</h2>
            <p className="text-center">
              Shoot me an email if you want to connect! You can also find me on{" "}
              <Link
                href="https://www.linkedin.com/in/usmaila-abdoul"
                target="_blank"
                rel="nofollow"
                className="relative z-10 text-brand"
              >
                Linkedin
              </Link>{" "}
              or{" "}
              <br />
              <Link 
                href="https://x.com/Abdoul_usma_ila" 
                target="_blank" 
                rel="nofollow"
                className="relative z-10 text-brand"
              >
                Twitter
              </Link>{" "}
              if that&apos;s more your speed.
            </p>
            <div className="flex gap-4 justify-center mt-10 relative z-10">
              <Link href="https://www.linkedin.com/in/usmaila-abdoul" target="_blank" rel="nofollow" className='h-full'>
                <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaLinkedin /></Button>
              </Link>
              <Link href="https://x.com/Abdoul_usma_ila" target="_blank" rel="nofollow" className='h-full'>
                <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaXTwitter /></Button>
              </Link>
              <Link href="https://www.github.com/usmailaabdoul" target="_blank" rel="nofollow" className='h-full'>
                <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaGithub /></Button>
              </Link>
              <Link href="/about" className='h-full'>
                <Button variant='secondary' size='icon' className='rounded-full [&_svg]:size-5'><FaGoogle /></Button>
              </Link>
            </div>
          </Box>

          {/* Footer */}
          <Box crossPosition={['top-left', 'top-right']} className="border-t-0">
            <Box className="w-1/2 border-t-0 border-b-0 border-l-0 border-r-0 p-5 justify-center items-center gap-4">
              <Button variant='link'>About</Button>
              <Button variant='link'>Articles</Button>
              <Button variant='link'>Projects</Button>
            </Box>
            <Box className="w-1/2 border-t-0 border-b-0 border-r-0 p-5 justify-center items-center">
              <p>© {year} Usmaila Abdoul. All rights reserved.</p>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

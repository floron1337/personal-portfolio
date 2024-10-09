import ContactForm from "@/components/ContactForm";
import ScrollButton from "@/components/ScrollButton";
import { Toaster } from "@/components/ui/toaster";
import { BriefcaseBusiness, CodeXml, FolderGit2, GraduationCap, Layers, Lock, Paperclip, Send, SquareArrowOutUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className='w-full h-[90vh] max-md:h-screen' id="hero-section">
        <div className='absolute w-full h-[90vh] max-md:h-screen hero-gradient flex flex-row items-center justify-center gap-4'>
          <div className='flex flex-col max-md:mx-32'>
            <h2 className='text-dark-blue text-2xl font-semibold max-md:text-lg'>The Personal Portfolio of</h2>
            <h1 className='text-white text-6xl font-bold max-md:text-5xl'>FLORIN VENIȘ</h1>

            <div className='typewriter text-3xl max-md:text-xl text-white bg-dark-blue font-medium w-[25rem] max-md:w-[16.5rem]'>
              <h1 className=''><span className='text-cyan-400'>web_developer</span><span className='text-orange-300'>.init()</span></h1>
            </div>

            <div className='flex flex-row mt-4 gap-4 max-md:flex-col max-md:items-center'>
              <ScrollButton scrollId="projects-section" className='primary-btn max-md:text-base max-md:w-full max-md:justify-center'>
                <FolderGit2 /> Projects 
              </ScrollButton>
              <ScrollButton scrollId="contact-section" className='secondary-btn max-md:text-base max-md:w-full max-md:justify-center'>
                <Send/> Work with me
              </ScrollButton>
            </div>
          </div>
        </div>
        <div className="w-full h-[90vh] max-md:h-screen bg-[url('/img/home-bg.jpg')] bg-cover"></div>
      </section>

      <section className="w-full bg-[url('/img/about-bg.png')] bg-cover pb-16 flex flex-col items-center border-t-8" id='about-section'>
        <div className='flex flex-row items-center justify-center gap-4 mx-32 text-white mt-4 max-md:mx-4 translate-x-8 max-md:translate-x-0'>
          <div className='w-12 h-12 bg-white'></div>
          <h1 className='text-3xl font-semibold max-md:text-xl'>Work & Study Experience</h1>
        </div>
        <div className='flex flex-row mt-4 text-white justify-center translate-x-8 max-md:translate-x-0 max-md:gap-12'>
            <h1 className='text-sm -rotate-90 translate-x-12 max-md:hidden'>Florin Veniș</h1>
            <Image src="/img/avatar.png" alt="Picture of Florin Venis" width={160} height={160} className='-translate-x-6 max-md:translate-x-8'/>
            <div className='flex flex-col justify-center'>
              <h2>Living in Romania</h2>
              <h2>Born in 2004</h2>
              <h2>Over 6 years of experience</h2>
            </div>
        </div>

        <div className='h-[0.1px] bg-white w-1/2 mt-8 translate-x-8 max-md:translate-x-0'>
        </div>

        <div className='flex flex-col mx-32 items-center max-md:mx-4 translate-x-8 max-md:translate-x-0'>
        <div className='flex flex-col text-white'>

          <div className='flex flex-col'>
            <div className='flex flex-row gap-4 items-center mt-8'>
              <BriefcaseBusiness className='size-10'/> <h1 className='text-4xl font-semibold text-aqua max-md:text-2xl'>Work Experience</h1>
            </div>
            <h1 className='text-xl mt-4 font-medium'>Lead Trainer at Logiscool Medgidia</h1>
            <h3 className='text-xs'>January 2022 - July 2024</h3>
            <p className='mt-2'>
              IT Instructor, teaching children aged 9-18. Helped with internal organization and local community events.
            </p>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row gap-4 items-center mt-8'>
              <Layers className='size-10'/> <h1 className='text-4xl font-semibold text-aqua max-md:text-2xl'>Tech Stack</h1>
            </div>
            <div className='flex flex-row gap-8 mt-4 flex-wrap'>
              <Image src='/img/stack/git.svg' alt="git icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/css3.svg' alt="css3 icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/html5.svg' alt="html5 icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/javascript.svg' alt="javascript icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/nextdotjs.svg' alt="nextjs icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/tailwindcss.svg' alt="tailwind icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/react.svg' alt="react icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/django.svg' alt="django icon" width={60} height={60} className='invert hover:scale-125 ease'/>
              <Image src='/img/stack/python.svg' alt="python icon" width={60} height={60} className='invert hover:scale-125 ease'/>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row gap-4 items-center mt-8'>
              <GraduationCap className='size-12'/> <h1 className='text-4xl font-semibold text-aqua max-md:text-2xl'>Studies & Distinctions</h1>
            </div>
            <h1 className='text-xl mt-4 font-medium'>Bachelor&apos;s in Informatics - University of Bucharest</h1>
            <h3 className='text-xs'>October 2024 - Ongoing</h3>

            <h1 className='text-xl mt-4 font-medium'>Math & Computer Science - &quot;Nicolae Balcescu&quot; High School Medgidia</h1>
            <h3 className='text-xs'>September 2020 - June 2024</h3>

            <h1 className='text-xl mt-4 font-medium'>GENIUS Olympiad NY, USA - Bronze Medal</h1>
            <h3 className='text-xs'>June 2024</h3>

            <h1 className='text-xl mt-4 font-medium'>National Olympiad of Applied Informatics - Polytechnic University of Bucharest</h1>
            <h3 className='text-xs'>May 2024</h3>
          </div>

          <div className='mt-16 flex flex-col items-center'>
            <h1 className='text-4xl font-medium max-md:text-xl'>Made up your mind?</h1>
            <h2 className='max-md:text-sm text-center'>Schedule a private meeting for free!</h2>

            <div className='flex flex-row gap-4 mt-4'>
              <Dialog>
                <DialogTrigger className='primary-light-btn max-md:text-xs'>
                  <Paperclip/> Curriculum Vitae
                </DialogTrigger>
                <DialogContent className='min-w-[75vw] h-full'>        
                  <iframe src="https://drive.google.com/file/d/1fUz14WBXOoUc-787G7U0V6l2riI5mxwZ/preview" width="100%" height="95%" allow="autoplay" className='mt-4'></iframe>
                </DialogContent>
              </Dialog>
              <ScrollButton scrollId='contact-section' className='secondary-btn max-md:text-xs'>
                <Send/> Work with me
              </ScrollButton>
            </div>
          </div> 
          </div>
        </div>   
      </section>

      <section className='w-full' id='projects-section'>
        <div className='flex flex-row items-center justify-center gap-4 bg-dark-blue text-white py-8 border-t-8'>
          <CodeXml className="size-24"/>
          <div>
            <h1 className='text-4xl font-bold'>Take a look at some of my projects</h1>
            <h2>Built with love, over the years</h2>
          </div>
        </div>

        <div className="min-h-[75vh] bg-[url('/img/projects/novaks.jpg')] bg-cover flex items-center ">
          <div className='ml-48 text-[#01446F] bg-white p-8 w-1/2 max-md:w-2/3 rounded-2xl border-4 max-md:ml-4'>
            <h2 className='font-medium'>E-Commerce</h2>
            <h1 className='text-5xl font-bold'>Novak&apos;s Seaside Diner</h1>
            <h3 className='text-xs'>July 2024</h3>
            <p className='mt-4'>
              A beautiful custom made e-commerce website, equipped with secure payment services and management systems.
            </p>
            <div className="flex mt-4">
              <Link href="https://novaks-diner.vercel.app/" target="_blank" className='bg-[#01446F] text-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl hover:gap-4 ease items-center justify-center'>
                <SquareArrowOutUpLeft/>
                Check it out
              </Link>
            </div>
          </div>
        </div>

        <div className="min-h-[75vh] bg-[url('/img/projects/vichess.JPG')] bg-cover flex items-center ">
          <div className='ml-48 text-white vichess-bg-gradient p-8 w-1/2 rounded-2xl border-4 border-black max-md:w-2/3 max-md:ml-4'>
            <h2 className='font-medium'>Web Application</h2>
            <h1 className='text-5xl font-bold'>VIChess</h1>
            <h3 className='text-xs'>May 2023 - July 2023</h3>
            <p className='mt-4'>
              The power of A.I. move prediction and image recognition unleashed in the noble game of Chess. 
            </p>
            <div className="flex mt-4">
              <Link href="https://vichess.vercel.app/" target="_blank" className='border text-white hover:text-black hover:bg-white hover:gap-4 flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                <SquareArrowOutUpLeft/>
                Check it out
              </Link>
            </div>
          </div>
        </div>

        <div className="min-h-[75vh] bg-[url('/img/projects/algovs.PNG')] bg-cover flex items-center ">
          <div className='ml-48 text-white p-8 w-1/2 rounded-2xl max-md:w-2/3 max-md:ml-4'>
            <h2 className='font-medium'>Web Application</h2>
            <h1 className='text-5xl font-bold'>AlgoVS</h1>
            <h3 className='text-xs'>March 2024 - present</h3>
            <p className='mt-4'>
              A 3D Web Application where you can build stunning animations and algorithm visualizations.
            </p>
            <div className="flex mt-4">
              <Link href="https://algo-vs.vercel.app/" target="_blank" className='bg-white text-black flex flex-row gap-2 py-[8px] px-[24px] rounded-xl hover:gap-4 ease items-center justify-center'>
                <SquareArrowOutUpLeft />
                Check it out
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[url('/img/contact-bg.jpg')] bg-cover border-t-8 pb-16" id='contact-section'>
        <div className='mx-32 mt-8 flex flex-col items-center translate-x-8 max-md:mx-4 max-md:translate-x-0'>
          <div className='flex flex-row items-center justify-center gap-4 text-white mt-4'>
            <div className='w-12 h-12 bg-white'></div>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-semibold max-md:text-lg'>Contact Me</h1>
              <h3 className='max-md:text-xs'>Get started today with building your dream.</h3>
            </div>
          </div>

          <ContactForm/>

        </div>
      </section>
      <Toaster/>
    </main>
  );
}

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
import SuspenseImage from "@/components/SuspenseImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className='w-full h-[90vh]' id="hero-section">
        <div className='absolute w-full h-[90vh] z-30 hero-gradient flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col max-md:mx-32'>
            <h2 className='text-dark-blue text-2xl font-semibold max-md:text-lg'>The Personal Portfolio of</h2>
            <h1 className='text-white text-6xl font-bold max-lg:text-5xl max-md:text-4xl'>FLORIN VENIȘ</h1>

            <div className='typewriter text-3xl max-md:text-xl text-white bg-dark-blue font-medium w-[31rem] max-md:w-[20.5rem]'>
              <h1 className=''><span className='text-cyan-400'>software_developer</span><span className='text-orange-300'>.init()</span></h1>
            </div>

            <div className='w-full justify-between flex flex-row mt-4 gap-4 max-md:flex-col max-md:items-center'>
              <Link href="https://github.com/floron1337" target="_blank" className='primary-btn max-md:text-base max-md:w-full max-md:justify-center'>
                <FolderGit2 /> GitHub Projects
              </Link>
              <ScrollButton scrollId="contact-section" className='secondary-btn max-md:text-base max-md:w-full max-md:justify-center'>
                <Send /> Work with me
              </ScrollButton>
            </div>
            <Dialog>
              <DialogTrigger className='primary-light-btn max-md:text-base mt-4 justify-center'>
                <Paperclip /> Curriculum Vitae
              </DialogTrigger>
              <DialogContent className='min-w-[75vw] h-full'>
                <iframe src="https://drive.google.com/file/d/1G9sUsKzrer5qM8oPxw9MbpdM3pACCBdZ/preview" width="100%" height="95%" allow="autoplay" className='mt-4'></iframe>
              </DialogContent>
            </Dialog>
          </div>

          <div className="absolute top-[80vh] h-[10vh] w-full flex items-center justify-center gap-8">
            <Link href="https://www.linkedin.com/in/florin-veni%C8%99-5169b3332/" target="_blank">
              <SuspenseImage src='/img/social/linkedin.png' alt="python icon" width={103} height={25} className='hover:scale-105 ease' />
            </Link>
            <Link href="https://github.com/floron1337" target="_blank">
              <SuspenseImage src='/img/social/github.png' alt="python icon" width={87} height={25} className='hover:scale-105 ease' />
            </Link>
          </div>
        </div>
        <SuspenseImage priority src="/img/home-bg.jpg" width={1920} height={972} alt="hero background" className="w-full object-cover z-0 h-[90vh]" />
      </section>

      <section className='w-full' id='projects-section'>
        <div className='h-[10vh] border-t border-b flex flex-row items-center justify-center gap-4 bg-dark-blue text-white py-12 px-8'>
          <CodeXml className="size-24 max-lg:size-12" />
          <div>
            <h1 className='text-4xl font-bold max-lg:text-2xl max-md:text-lg'>Take a look at some of my projects</h1>
            <h2 className="max-md:text-sm">Built with love, over the years</h2>
          </div>
        </div>

        <div className="min-h-[75vh] bg-center bg-[url('/img/projects/vichess2.jpg')] bg-cover flex justify-center items-center border-black">
          <div className='vichess-bg-gradient max-lg:ml-[5vw] max-md:ml-0 max-md:px-8 text-white p-8 rounded-2xl border'>
            <div className="flex flex-wrap gap-2 items-center mb-4 [&>p]:bg-white [&>p]:px-2 [&>p]:text-black [&>p]:rounded [&>p]:text-base">
              <p>Machine Learning</p>
              <p>Image Recognition</p>
              <p>NEXTjs</p>
              <p>FastAPI</p>
              <p>Ultralytics YOLOv8</p>
              <p>OpenCV</p>
            </div>

            <h2 className='text-base'>Web Application</h2>

            <h1 className='text-5xl font-bold max-lg:text-4xl'>VIChess</h1>
            <h3 className='text-xs'>May 2023 - July 2023</h3>
            <p className='mt-4'>
              The power of A.I. move prediction and image recognition unleashed in the noble game of Chess.
            </p>
            <div className="flex mt-4 gap-4">
              <Link href="https://vichess.vercel.app/" target="_blank" className='border text-white max-md:text-xs hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                <SquareArrowOutUpLeft className="max-md:size-4" />
                Check it out
              </Link>
              <Link href="https://github.com/floron1337/VIChess" target="_blank" className='border max-md:text-xs text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                <FolderGit2 className="max-md:size-4" />
                Project GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full bg-[url('/img/projects-bg.png')] bg-cover border-t flex flex-col items-center">
          <div className="ml-[5vw] px-8 max-xl:ml-0 max-xl:px-0  flex items-center py-8 gap-32 max-xl:flex-col max-xl:gap-8">
            <div className="w-1/2 max-xl:w-auto max-xl:px-8 max-xl:ml-[10vw] max-md:px-8 max-md:ml-0">
              <div className="flex flex-wrap gap-2 items-center mb-4 [&>p]:bg-white [&>p]:px-2 [&>p]:text-black [&>p]:rounded [&>p]:text-base">
                <p>Assembly x86</p>
                <p>C</p>
                <p>Computer Architecture</p>
                <p>Memory</p>
              </div>

              <h2 className='text-base'>Program</h2>
              <h1 className="text-3xl font-semibold">Memory Management System in Assembly x86</h1>
              <h3 className='text-xs'>December 2024</h3>
              <p className='mt-4'>
                The raw power of Assembly used for a system to allocate and de-allocate memory for files, plus complexe functions like defragmentation and concrete.
              </p>
              <div className="flex mt-4 gap-4">
                <Link href="https://github.com/floron1337/memory-asc" target="_blank" className='border max-md:text-xs text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                  <FolderGit2 className="max-md:size-4" />
                  Project GitHub
                </Link>
              </div>
              <SuspenseImage className="mt-8 border" src="/img/projects/memory.jpg" alt="screenshot of allocated space for files" width={1920} height={1080} />
            </div>
            <div className="w-1/2 max-xl:w-auto max-xl:px-8 max-xl:ml-[10vw] max-md:ml-0 max-md:px-8">
              <div className="flex flex-wrap gap-2 items-center mb-4 [&>p]:bg-white [&>p]:px-2 [&>p]:text-black [&>p]:rounded [&>p]:text-base">
                <p>Python</p>
                <p>Keras</p>
                <p>SKlearn</p>
                <p>KMeans</p>
                <p>ResNet</p>
                <p>Cosine Similarity</p>
              </div>

              <h2 className='text-base'>Program</h2>
              <h1 className="text-3xl font-semibold">Website Logo Matching and Grouping</h1>
              <h3 className='text-xs'>March 2025</h3>
              <p className='mt-4'>
                Built during a challenge to scrape all the logos from a list of domains and group them based on similarity.
              </p>
              <div className="flex mt-4 gap-4">
                <Link href="https://github.com/floron1337/logo-cluster" target="_blank" className='border max-md:text-xs text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                  <FolderGit2 className="max-md:size-4" />
                  Project GitHub
                </Link>
              </div>
              <SuspenseImage className="mt-8 border" src="/img/projects/grouping.png" alt="screenshot of allocated space for files" width={1920} height={1080} />
            </div>
          </div>
        </div>

        <div className="bg-[url('/img/projects-bg2.png')] border-b min-h-[70vh] bg-cover border-t flex flex-col items-center">
          <div className="ml-[5vw] max-md:ml-0 px-8 max-xl:w-auto max-xl:px-8 max-xl:ml-[10vw] border-b py-8 flex gap-16 max-xl:gap-8 items-center max-xl:flex-col">
            <div className="w-1/2 max-xl:w-full">
              <div className="flex flex-wrap gap-2 items-center mb-4 [&>p]:bg-white [&>p]:px-2 [&>p]:text-black [&>p]:rounded [&>p]:text-base">
                <p>C++</p>
                <p>SFML</p>
                <p>CMake</p>
                <p>Object-Oriented Programming</p>
              </div>

              <h2 className='text-base'>Game</h2>

              <h1 className='text-5xl font-bold max-md:text-4xl'>Worldshaper&apos;s Gambit</h1>
              <h3 className='text-xs'>March 2025 - Current</h3>
              <p className='mt-4'>
                A dark, politics-focused game where you take control through force of the Planet and must mantain control at all cost, making tough decisions through cards.
                <br /><br />
                A very early demo is available on GitHub.
              </p>
              <div className="flex mt-4 gap-4">
                <Link href="https://github.com/floron1337/worldshapers-gambit" target="_blank" className='border max-md:text-xs text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                  <FolderGit2 className="max-md:size-4" />
                  Project GitHub
                </Link>
              </div>
            </div>
            <div className="w-1/2 max-xl:w-full">
              <SuspenseImage src="/img/projects/worldshapers.png" alt="photo of the project Novaks Diner" width={1280} height={640} />
            </div>
          </div>
          <div className="ml-[5vw] max-md:ml-0 px-8 max-xl:w-auto max-xl:px-8 max-xl:ml-[10vw] border-b py-8 flex gap-16 max-xl:gap-8 items-center justify-center max-xl:flex-col">
            <div className="w-1/2 max-xl:w-full">
              <div className="flex flex-wrap gap-2 items-center mb-4 [&>p]:bg-white [&>p]:px-2 [&>p]:text-black [&>p]:rounded [&>p]:text-base">
                <p>Frontend</p>
                <p>Shopify</p>
                <p>NEXTjs</p>
              </div>

              <h2 className='text-base'>E-Commerce</h2>

              <h1 className='text-5xl font-bold max-md:text-4xl'>Novak&apos;s Seaside Diner</h1>
              <h3 className='text-xs'>July 2024</h3>
              <p className='mt-4'>
                A beautiful custom made e-commerce website, equipped with secure payment services and management systems.
              </p>
              <div className="flex mt-4 gap-4">
                <Link href="https://novaks-diner.vercel.app/" target="_blank" className='border max-md:text-xs text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                  <SquareArrowOutUpLeft className="max-md:size-4" />
                  Check it out
                </Link>
                <Link href="https://github.com/floron1337/novaks-diner" target="_blank" className='border max-md:text-xs text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                  <FolderGit2 className="max-md:size-4" />
                  Project GitHub
                </Link>
              </div>
            </div>
            <div className="w-1/2 max-xl:w-full">
              <SuspenseImage src="/img/projects/novaks.jpg" alt="photo of the project Novaks Diner" width={1280} height={640} />
            </div>
          </div>

          <div className="ml-[5vw] max-md:ml-0 px-8 max-xl:w-auto max-xl:px-8 max-xl:ml-[10vw] py-8 flex gap-16 max-xl:gap-8 items-center max-xl:flex-col">
            <div className="w-1/2 max-xl:w-full">
              <div className="flex flex-wrap gap-2 items-center mb-4 [&>p]:bg-white [&>p]:px-2 [&>p]:text-black [&>p]:rounded [&>p]:text-base">
                <p>Rust</p>
                <p>APIs</p>
              </div>

              <h2 className='text-base'>Terminal App</h2>

              <h1 className='text-5xl font-bold max-md:text-4xl'>Rusty Weather</h1>
              <h3 className='text-xs'>February 2025</h3>
              <p className='mt-4'>
                A weather app build using Rust and Open Weather API. Built during a hackathon.
              </p>
              <div className="flex mt-4 gap-4">
                <Link href="https://github.com/floron1337/rusty-weather" target="_blank" className='max-md:text-xs border text-white hover:text-black hover:bg-white flex flex-row gap-2 py-[8px] px-[24px] rounded-xl ease items-center justify-center'>
                  <FolderGit2 className="max-md:size-4" />
                  Project GitHub
                </Link>
              </div>
            </div>
            <div className="w-1/2 max-xl:w-full">
              <SuspenseImage src="/img/projects/weather.png" alt="photo of the project Novaks Diner" width={1280} height={640} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[url('/img/contact-bg.jpg')] bg-cover pb-16" id='contact-section'>
        <div className='mx-32 mt-8 flex flex-col items-center translate-x-8 max-md:mx-4 max-md:translate-x-0'>
          <div className='flex flex-row items-center justify-center gap-4 text-white mt-4'>
            <div className='w-12 h-12 bg-white'></div>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-semibold max-md:text-lg'>Contact Me</h1>
              <h3 className='max-md:text-xs'>Get started today with building your dream.</h3>
            </div>
          </div>

          <ContactForm />

        </div>
      </section>
      <Toaster />
    </main >
  );
}

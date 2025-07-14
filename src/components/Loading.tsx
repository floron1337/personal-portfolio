import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <section className='w-full h-[90vh]' id="hero-section">
            <div className='absolute w-full h-[90vh] hero-gradient flex flex-col items-center justify-center gap-4'>
                <div className='flex flex-col max-md:mx-32'>
                    <h1 className='text-white text-4xl font-bold  max-md:text-base'>The magic si loading.</h1>
                    <h2 className="font-light">Are you ready?</h2>
                    <br />
                    <Skeleton className="h-[20px] rounded-full" />
                </div>

            </div>
            <div className="w-full h-[90vh] max-md:h-screen bg-dark-blue bg-cover"></div>
        </section>
    )
}

export default Loading
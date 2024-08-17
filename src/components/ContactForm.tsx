'use client'

import { Mail, Pencil, Send, User } from "lucide-react";
import { createRef, FormEvent } from "react";
import { useToast } from "./ui/use-toast";

export default function ContactForm(){
    const { toast } = useToast()
    const ref = createRef<HTMLFormElement>();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const accessKey = process.env.NEXT_PUBLIC_WEB3ACCESS_KEY!

        formData.append("access_key", accessKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            ref.current!.reset();
            toast({
                title:"Your message has been sent.",
                description: "You will receive your answer shortly"
            })
        }
        else{
            toast({
                variant:"destructive",
                title:"There has been an error.",
                description: "Try to send your message again or kindly wait for the problem to be solved."
            })
        }
    }
  
    return(
      <>
        <form className='flex flex-col w-1/2 mt-8 border-4 p-8 bg-white max-xl:w-full' onSubmit={handleSubmit} method="POST" ref={ref}>
          <label className='flex flex-row items-center gap-1'><User className='size-6'/> Name</label>
          <input required type="text" name="name" placeholder="Enter your name" className='border-black border h-8 mb-4 mt-1 px-2'/>
          <label className='flex flex-row items-center gap-1'><Mail className='size-6'/> Email</label>
          <input required type="email" name="email" placeholder="Enter your e-mail address" className='border-black border h-8 mb-4 mt-1 px-2'/>
          <label className='flex flex-row items-center gap-1'><Pencil className='size-6'/>What do you want to build?</label>
          <textarea required name="message" placeholder="Enter a short description of your project" className='border-black border h-60 mb-4 mt-1 px-2'/>
          <div className='flex flex-row gap-2'>
            <input required type="checkbox"/>
            <p>I confirm sending this message.</p>
          </div>
          <div className='mt-4'>
            <button type='submit' className='primary-light-btn hover:bg-dark-blue hover:text-white'><Send/>Send</button>
          </div>
  
          <label className='flex flex-row items-center gap-1 mt-8 cursor-text max-md:flex-col'><Mail className='size-6'/> <span className='font-semibold'>Work Email:</span> florinvenis.dev.business@gmail.com</label>
        </form>
      </>
    )
  }
"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InlineWidget } from 'react-calendly';
import { useEffect } from "react";
export default function Component() {
  // useEffect(() => {
  //   var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
  //   if (httpTokens) {
  //     window.location.replace('https://' + httpTokens[1]);
  //   }
  // }, []); 
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <header className="flex items-center justify-between px-6 py-4">
        <div style={{color:"white"}}className=" text-2xl font-bold">Studio G</div>
        <nav className="flex space-x-6 text-lg">
          {/* <a href="#" className="hover:underline" style={{color:"white"}}>
            Explore
          </a>
          <a href="#" className="hover:underline"style={{color:"white"}}>
            Recent jobs
          </a>
          <a href="#" className="relative hover:underline"style={{color:"white"}}>
            Tracks
          </a>
          <a href="#" className="hover:underline"style={{color:"white"}}>
            SoundCheck
          </a>
          <a href="#" className="hover:underline"style={{color:"white"}}>
            Plugins
          </a>
          <a href="#" className="hover:underline"style={{color:"white"}}>
            Sign in
          </a> */}
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-bold mb-4"style={{color:"white"}}>Welcome to Studio G</h1>
        <p className="text-lg mb-8"style={{color:"white"}}>
          The world’s best mixing & mastering engineers, singers, songwriters, producers and studio musicians for hire
        </p>
        <div className="flex space-x-4 mb-8">
          <Button className="bg-[#4a90e2] text-white px-6 py-3">BOOK A SESSION</Button>
          <Button variant="outline" className="border border-white text-white px-6 py-3">
            PARTNER SERVICES
          </Button>
        </div>
        <div className="flex items-center space-x-2">
         
          <span style={{color:"white"}}>Watch Video</span>
        </div>


<div>
<InlineWidget url="https://calendly.com/highlyfecollective"/>
</div>

        
      </main>
    </div>
  )
}


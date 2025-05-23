"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Link from "next/link";
export default function Component() {
    useEffect(() => {
        var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
        if (httpTokens) {
          window.location.replace('https://' + httpTokens[1]);
        }
      }, []); 
    return (
       
       <html>
        <meta name="viewport" content="width=device-width, initial-scale=.4" />
      <>
     
<div
 style={{  
    backgroundImage: "url(" + "https://profilepic23.s3.amazonaws.com/IMG_3677.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

  }}>
    <Link href="/home">
<header style={{color:"white"}}className=" text-2xl  font-bold flex items-center justify-between px-6 py-4">
      
       Studio G
      
        </header>
        </Link>
            {/* <div 
            style={{  
                backgroundImage: "url(" + "https://profilepic23.s3.amazonaws.com/IMG_3677.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

              }}
              className="break-words bg-[#F5F5F5] min-h-screen grid grid-cols-3 gap-4 items-center justify-center"> */}
             
              {/* <div style={{backgroundColor:"white"}}className="bg-white shadow-lg rounded-lg w-full max-w-3xl px-8 py-12">
                <header className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-2">Gabe</h1>
                  <img
                    src="/placeholder.svg"
                    alt="Gabe"
                    className="mx-auto"
                    width="200"
                    height="100"
                    style={{ aspectRatio: "800/200", objectFit: "cover" }}
                  />

             
                </header>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Tracks</h2>
                    <div className="flex items-center gap-4 mb-4">
                    
                      <div>
                        <p className="text-lg font-medium">Song 1</p>
                        <p className="text-lg font-medium">Song 2</p> 
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                     
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Location</h2>
                        <p className="text-lg font-medium">Studio G</p>
                      </div>
                    </div>
                  </div>
                  <div>
               
                    <form className="space-y-4">
                    
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Email</h2>
                      <p className="text-lg font-medium">StudioGofficial@gmail.com</p>
                        </div>
                        <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Instagram</h2>
                      <p className="text-lg font-medium">@StudioGofficial</p>
                        </div>
                    </form>
                  </div>
                </div>
               
              </div> */}
              <div
              className="break-words text-container min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
              <div style={{backgroundColor:"white"}}className=" bg-white shadow-lg rounded-lg w-full max-w-3xl px-8 py-12">
                <header className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-2">Eric</h1>
                  <img
                    src="https://profilepic23.s3.amazonaws.com/IMG_2299.jpg"
                    alt="Eric"
                    className="mx-auto"
                    width="200"
                    height="400"
                    style={{ aspectRatio: "200/200", objectFit: "cover" }}
                  />

             
                </header>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2  gap-8">
                  <div>
                 
                    <h2 className="text-2xl font-serif font-bold mb-4">Tracks</h2>
                  
                    <div className="flex flex-wrap  items-center gap-4 mb-4">
                    
                      <div>
                      <Button style={{backgroundColor:"orange"}}variant="outline" className="overflow-button border border-white text-white px-6 py-3  w-full sm:w-auto">
                      <Link legacyBehavior href="https://on.soundcloud.com/CVj4PJBqjKq8spEP6" >

        <a target="_blank">
                        <p className="text-lg font-medium">SoundCloud</p>
                     </a>
                     </Link>
                     </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                     
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Role</h2>
                      <Button style={{backgroundColor:"orange"}}variant="outline" className="border border-white text-white px-6 py-3  w-full sm:w-auto">
                        <p className="text-lg font-medium">Book a Time</p>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
               
                    {/* <form className="space-y-4"> */}
                    
                      <div>
                        
                      <h2 className="text-2xl font-serif font-bold mb-4">Email</h2>
                      <Button style={{backgroundColor:"black"}}variant="outline" className=" overflow-button border border-white text-white px-3 py-3  w-full sm:w-auto ">
                      <p style={{color:"white"}}className="text-lg font-medium">Eskomgmt@gmail.com</p>
                      </Button>
                        </div>
                        <div>

                      <h2 className="mt-4 text-2xl font-serif font-bold mb-4">Instagram</h2>
                      <Button style={{backgroundColor:"black"}}variant="outline" className="overflow-button border border-white text-white px-6 py-3  w-full sm:w-auto">
                      <Link legacyBehavior href="https://www.instagram.com/esko_7777/" >
        <a target="_blank">
                        <p style={{color: "white"}}className="text-white text-lg font-medium">@esko_7777</p>
                     </a>
                     </Link>
                     </Button>
                   
                        </div>
                    {/* </form> */}
                  </div>
                </div>
               
              </div>
              <div style={{backgroundColor:"white"}}className=" bg-white shadow-lg rounded-lg w-full max-w-3xl px-8 py-12">
                <header className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-2">Zames</h1>
                  <img
                
                    src="/placeholder.svg"
                    alt="Artist"
                    className="mx-auto"
                    width="200"
                    height="100"
                    style={{ aspectRatio: "800/200", objectFit: "cover" }}
                  />

             
                </header>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Tracks</h2>
                    <div className="flex items-center gap-4 mb-4">
                    
                      <div>
                        <p className="text-lg font-medium">Song 1</p>
                        <p className="text-lg font-medium">Song 2</p> 
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                     
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Location</h2>
                        <p className="text-lg font-medium">Studio G</p>
                      </div>
                    </div>
                  </div>
                  <div>
               
                    <form className="space-y-4">
                    
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Email</h2>
                      <p className="text-lg font-medium">StudioGofficial@gmail.com</p>
                        </div>
                        <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Instagram</h2>
                      <p className="text-lg font-medium">@StudioGofficial</p>
                        </div>
                    </form>
                  </div>
                </div>
               
              </div>
              <div style={{backgroundColor:"white"}}className=" bg-white shadow-lg rounded-lg w-full max-w-3xl px-8 py-12">
                <header className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-2">612 Entertainment</h1>
                  <img
                    src="/placeholder.svg"
                    alt="Artist"
                    className="mx-auto"
                    width="200"
                    height="100"
                    style={{ aspectRatio: "800/200", objectFit: "cover" }}
                  />

             
                </header>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Tracks</h2>
                    <div className="flex items-center gap-4 mb-4">
                    
                      <div>
                        <p className="text-lg font-medium">Song 1</p>
                        <p className="text-lg font-medium">Song 2</p> 
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                     
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Location</h2>
                        <p className="text-lg font-medium">Studio G</p>
                      </div>
                    </div>
                  </div>
                  <div>
               
                    <form className="space-y-4">
                    
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Email</h2>
                      <p className="text-lg font-medium">StudioGofficial@gmail.com</p>
                        </div>
                        <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Instagram</h2>
                      <p className="text-lg font-medium">@StudioGofficial</p>
                        </div>
                    </form>
                  </div>
                </div>
               
              </div>
              <div style={{backgroundColor:"white"}}className=" bg-white shadow-lg rounded-lg w-full max-w-3xl px-8 py-12">
                <header className="text-center">
                  <h1 className="text-4xl font-serif font-bold mb-2">Artist</h1>
                  <img
                    src="/placeholder.svg"
                    alt="Artist"
                    className="mx-auto"
                    width="200"
                    height="100"
                    style={{ aspectRatio: "800/200", objectFit: "cover" }}
                  />

             
                </header>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-4">Tracks</h2>
                    <div className="flex items-center gap-4 mb-4">
                    
                      <div>
                        <p className="text-lg font-medium">Song 1</p>
                        <p className="text-lg font-medium">Song 2</p> 
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                     
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Location</h2>
                        <p className="text-lg font-medium">Studio G</p>
                      </div>
                    </div>
                  </div>
                  <div>
               
                    <form className="space-y-4">
                    
                      <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Email</h2>
                      <p className="text-lg font-medium">StudioGofficial@gmail.com</p>
                        </div>
                        <div>
                      <h2 className="text-2xl font-serif font-bold mb-4">Instagram</h2>
                      <p className="text-lg font-medium">@StudioGofficial</p>
                        </div>
                    </form>
                  </div>
                </div>
               
              </div> 
              </div>
            </div>
        
            {/* </div> */}
            </>
            </html>
          )
        }
        
       

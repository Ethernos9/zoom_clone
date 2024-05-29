import SideBar from '@/components/SideBar'
import NavBar from '@/components/ui/NavBar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video Calling App",
  icons:{
    icon:"/icons/logo.svg"
  }
};

const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
   <main className='relative'>
     <NavBar/>

       <div className='flex'>
           <SideBar/>

           <section className='flex min-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pd-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
           </section>
       </div>


   </main>
  )
}

export default HomeLayout

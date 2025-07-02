"use client";
import SideNav from './_components/SideNav'
import Link from 'next/link';
import FeaturesGrid from './_components/FeaturesGrid'
import { motion } from "motion/react";
import { SignedOut, SignOutButton } from '@clerk/nextjs';

export default function HeroSectionOne() {
  return (
    <div
    
      className="relative flex flex-col items-center justify-center">
      <Navbar />   
   
      <div className="px- py-10 md:py-20">
        <h1
          className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-5xl dark:text-slate-300">
          {"Fuel Your Brand with AI-Generated Content – Fast, Fresh, and On-Demand 🚀"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Content creation just got smarter.
          Launch campaigns, blogs, and landing pages in record time with our AI-powered tools. 🚀 🤖
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            
          <Link href={"/dashboard"}>
          <button
            className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
            Explore Now ✈️    
          </button></Link>
          
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          >
          <div ><FeaturesGrid/></div>
        </motion.div>
      </div>
    
      
      
      
    </div>
  );
}

const Navbar = () => {
  return (
    <nav
      className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div
           />
        <h1 className="text-base font-bold md:text-2xl">Content AI ✒️</h1>
      </div>
      <Link href="/dashboard">
      <button
        className="w-34 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
        Get Started
      </button></Link>
      

      {/* <button className="w-34 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer">
      <SignOutButton/>
   </button>    */}
      
    </nav>
  );
};




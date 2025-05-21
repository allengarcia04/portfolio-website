import React from 'react';
import heroimage from "../assets/heroimage.JPEG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm Allen The Analyst
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                 I specialize in bridging business needs and technical solutions through data analysis, systems thinking, and process optimization — all driven by my passion for solving real-world problems with smart systems and meaningful data. Whether it's streamlining workflows or enhancing decision-making, I thrive at the intersection of people, process, and technology.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                        
                    </Link>
                </div>
            </div>
            <div>
                <img src={heroimage} alt="my profile" className="rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-xl lg:max-w-2xl hover:scale-105 transition duration-300 border-4 border-cyan-500 shadow-cyan-500/50 shadow-xl"/>
            </div>
        </div>
    </div>
  )
}

export default Home
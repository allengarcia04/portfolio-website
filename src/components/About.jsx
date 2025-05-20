import React from 'react'

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="mt-10 pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-1">
            Hello, I’m Allen Garcia — an IT Analyst based in Melbourne, Australia, with a strong focus on business and data analysis. I’m passionate about bridging business needs with technical solutions through data-driven insights, systems thinking, and user-centered design. I hold an ECBA certification, an AWS Cloud certification, and a Master’s in Business Information Systems.

            </p>

            <br />
            <p className="text-xl"> I bring hands-on experience in digital transformation, stakeholder engagement, user acceptance testing, system optimization, and software development. I've led projects that improved operational efficiency across fintech and education environments. My technical toolkit includes Python, SQL, Power BI, Jira, React, and AWS — empowering me to deliver impactful solutions that drive measurable business value.</p>

        </div>

    </div>
  )
}

export default About
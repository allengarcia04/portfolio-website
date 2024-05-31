import React from 'react'

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="mt-10 pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-1">
            Hello, I'm Allen Garcia, I'm a software engineer based in Melbourne, Australia. I am passionate about combining business acumen with technology to create impactful solutions. Currently pursuing a Master's Degree in Business Information Systems at Torrens University Australia. With a strong foundation in software engineering and business analysis, I have extensive experience in developing efficient systems, and implementing robust cybersecurity measures.

            </p>

            <br />
            <p className="text-xl"> I thrive on working with technologies like Python, JavaScript, React, Tailwind CSS, and more. I enjoy tackling coding projects in my free time. As a fitness enthusiast, I believe in maintaining a healthy balance between physical activity and my tech pursuits. I am eager to contribute to a dynamic team environment, driving innovative solutions and making a meaningful impact.</p>

        </div>

    </div>
  )
}

export default About
import React from 'react'
import tasktracker from '../assets/portfolio/tasktracker.jpg';
import cryptotracker from '../assets/portfolio/cryptotracker.jpg';
import productlandingpage from '../assets/portfolio/productlandingpage.jpg';



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: tasktracker,
            demoLink: 'https://tasktracker.pythonanywhere.com/login',
            codeLink: 'https://github.com/allengarcia04/TaskTracker'
        },
        {
            id: 2,
            src: cryptotracker,
            demoLink: 'https://papaya-truffle-ab02a5.netlify.app/',
            codeLink: 'https://github.com/allengarcia04/crypto-tracker-react-api'
        },
        {
            id: 3,
            src: productlandingpage,
            demoLink: 'https://www.assessmentchampions.com/',
            codeLink: 'https://github.com/allengarcia04/assessment-champions'
        },
    ]

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="mt-20 pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">Portfolio</p>
                <p className="py-6">Check out some of my work!</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolios.map(({id, src, demoLink, codeLink}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex item-center justify-center">
                        <button onClick={() => handleClick(demoLink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button onClick={() => handleClick(codeLink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
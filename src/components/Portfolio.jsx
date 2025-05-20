import React from 'react';
import tasktracker from '../assets/portfolio/tasktracker.jpg';
import cryptotracker from '../assets/portfolio/cryptotracker.jpg';
import productlandingpage from '../assets/portfolio/productlandingpage.jpg';
import dgr1 from '../assets/portfolio/dgr1.jpg';
import dt from '../assets/portfolio/dt.jpg';
import capstone from '../assets/portfolio/capstone.jpg';
import powerbi from '../assets/portfolio/powerbi.jpg';
import eda from '../assets/portfolio/eda.jpg';
import sql from '../assets/portfolio/sql.jpg';

const businessProjects = [
  {
      id: 1,
      src: dgr1,
      demoLink: 'https://github.com/allengarcia04/DGR-system-analysis-design-project',
    },
    {
      id: 2,
      src: dt,
      demoLink: 'https://github.com/allengarcia04/digital-transformation-uat',
    },
    {
      id: 3,
      src: capstone,
      demoLink: 'https://github.com/allengarcia04/giverly-information-systems-capstone',
    },
];

const dataProjects = [
  {
      id: 1,
      src: powerbi,
      demoLink: 'https://github.com/allengarcia04/sql-powerbi-sales-analysis',
    },
    {
      id: 2,
      src: eda,
      demoLink: 'https://www.kaggle.com/code/reneallengarcia/eda-of-economic-indicators-using-python-pandas',
    },
    {
      id: 3,
      src: sql,
      demoLink: 'https://github.com/allengarcia04/sql-data-cleaning-nashville-housing',
    },
];

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
  ];

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-20">

        {/* Portfolio Title */}
        <div className="mt-20 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Portfolio</p>
          <p className="py-6">A collection of my work across business analysis, data analysis, and software development. Showcasing real-world projects that highlight my technical expertise, problem-solving approach, and ability to deliver data-driven and user-centered solutions.</p>
        </div>

        {/* Business Analyst Projects */}
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 p-2">Business Analysis Projects</p>
          <p className="py-6">
            Projects highlighting business process analysis, stakeholder engagement, UAT, system diagrams, and UI/UX enhancements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {businessProjects.map(({ id, src, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex item-center justify-center">
                <button onClick={() => handleClick(demoLink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">View Project</button>
              </div>
            </div>
          ))}
        </div>

        {/* Data Analyst Projects */}
        <div className="mt-20 pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 p-2">Data Analysis Projects</p>
          <p className="py-6">
            Projects focused on data visualization, exploratory data analysis (EDA), and data cleaning to support data-driven decision-making.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {dataProjects.map(({ id, src, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex item-center justify-center">
                <button onClick={() => handleClick(demoLink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">View Project</button>
              </div>
            </div>
          ))}
        </div>

        {/* Software Development Projects */}
        <div className="mt-20 pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 p-2">Software Development Projects</p>
          <p className="py-6">
            Applications and websites developed using Python, JavaScript, HTML, CSS, RESTful APIs, and modern frameworks for responsive and interactive user experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex item-center justify-center">
                <button onClick={() => handleClick(demoLink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                <button onClick={() => handleClick(codeLink)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;

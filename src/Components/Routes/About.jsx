import React from 'react'
import Navbar from '../Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
        <div className="max-w-lg mx-auto">
          <p className="text-lg mb-4">
            Hello I'm Rishabh Kumar a full stack web developer
          </p>
          <p className="text-lg mb-4">
            As a full-stack web developer, I have a deep passion for creating dynamic and interactive web applications. With expertise in both frontend and backend technologies, I strive to deliver seamless user experiences by bridging the gap between design and functionality.
            On the frontend, I excel in crafting visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. I have experience with modern frontend frameworks like React and Angular, allowing me to build highly modular and efficient components. I pay attention to details, ensuring the user interface is intuitive and accessible across different devices and browsers.
          </p>
          <p className='text-lg mb-4'>
            Continuously learning and staying updated with the latest web technologies is integral to my professional growth. I actively seek opportunities to expand my skill set and stay ahead of industry trends. I am always excited to explore new frameworks, libraries, or methodologies that can enhance the efficiency and scalability of my applications.
            In summary, as a full-stack web developer, I bring a comprehensive skill set to the table, combining my expertise in frontend and backend technologies to create immersive and high-performing web applications. I am committed to delivering elegant and functional solutions that meet the unique needs of each project I work on.
          </p>
          <p className="text-lg mb-4">
            Moving to the backend, I am proficient in server-side programming languages such as Node.js, Python, or Java. I have hands-on experience with frameworks like Express.js and Django, enabling me to build robust APIs and handle server-side logic. I also have a solid understanding of databases, including SQL and NoSQL, and can design efficient data models and perform complex queries.
            Furthermore, 
            </p>
            <p className='text-lg mb-4'>
            I am well-versed in version control systems like Git, which helps me collaborate with teams and maintain clean codebases. I also value the importance of testing and implementing automated testing frameworks such as Jest or Mocha to ensure the reliability and quality of my code.
            What sets me apart as a full-stack developer is my ability to analyze project requirements and translate them into technical solutions. I am comfortable working in an agile environment, collaborating with cross-functional teams, and adapting to evolving project needs. I am a strong problem solver and enjoy tackling challenges with a systematic and logical approach.
            </p>
        </div>
      </div>
    </>
  )
}

export default About
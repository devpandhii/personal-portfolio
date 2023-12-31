import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Passionate and driven Computer Engineering student eager to apply technical skills and gain hands-on experience in the industry. Currently pursuing a Bachelor's degree in Computer Science and Engineering (IOT and Cybersecurity with Block Chain Technology) with a focus on programming languages and software development. Skilled in Java, Python, and C++. Interested in exploring areas such as web development, artificial intelligence, and cybersecurity. Proactive team player with strong communication and problem-solving skills. Seeking opportunities to learn and grow as a computer engineer.
        </p>

        <br />

        <p className="text-xl">        
           Passionate badminton player, chess enthusiast, and hackathon participant. These extracurricular activities have taught me the importance of strategic thinking, focus, and problem-solving. I thrive on competition and enjoy pushing myself to new heights. Excited to bring this same level of enthusiasm and dedication to my professional journey.
        </p>
      </div>
    </div>
  );
};

export default About;

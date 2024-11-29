import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc",
    period: "2021 - Present",
    description: "Led development of enterprise-scale applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
    achievements: [
      "Reduced application load time by 40%",
      "Implemented microservices architecture",
      "Led team of 5 developers"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects. Specialized in building responsive web applications and RESTful APIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    achievements: [
      "Delivered 15+ successful projects",
      "Improved database performance by 50%",
      "Implemented automated testing"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Studios",
    period: "2017 - 2019",
    description: "Created interactive user interfaces and implemented responsive designs for various client websites.",
    technologies: ["JavaScript", "React", "SASS", "Webpack"],
    achievements: [
      "Built 20+ responsive websites",
      "Reduced bounce rate by 30%",
      "Implemented modern UI/UX practices"
    ]
  }
]

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-purple-400 mb-2">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-gray-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

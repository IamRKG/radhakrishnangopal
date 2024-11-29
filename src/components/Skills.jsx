import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Three.js", level: 80 },
      { name: "Tailwind CSS", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 78 }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 85 }
    ]
  }
]

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-white">{name}</span>
      <span className="text-purple-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
    </div>
  </div>
)

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              {category.skills.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

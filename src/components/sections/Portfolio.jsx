import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'GorkhaTV',
      category: 'Media Platform',
      description: 'Professional streaming platform for Nepali content',
      color: 'from-red-600',
      icon: '📺',
    },
    {
      id: 2,
      title: 'Darjeeling Hotel',
      category: 'Hospitality',
      description: 'Luxury hotel website with booking system',
      color: 'from-orange-600',
      icon: '🏨',
    },
    {
      id: 3,
      title: 'Premium Café',
      category: 'F&B Business',
      description: 'Modern café website with menu showcase',
      color: 'from-amber-600',
      icon: '☕',
    },
    {
      id: 4,
      title: 'Travel Agency',
      category: 'Tourism',
      description: 'Tour booking platform for Himalayan adventures',
      color: 'from-green-600',
      icon: '✈️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">Portfolio Highlights</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto"></div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className={`relative h-80 rounded-xl overflow-hidden group cursor-pointer bg-gradient-to-br ${project.color} to-gray-900 p-1`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <p className="text-sm font-semibold text-gray-300 mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">{project.description}</p>
                <button className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

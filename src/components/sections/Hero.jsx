import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Mountain silhouette background */}
      <div className="absolute inset-0 opacity-10 mountain-pattern"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm font-semibold text-red-400">
            ✨ Welcome to Darjeeling Web Studio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
        >
          <span className="text-white">Darjeeling</span>
          <br />
          <span className="gradient-text">Web Studio</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          Where Local Brands
          <span className="text-red-500 font-semibold"> Go Global</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Professional web design, development, and branding services tailored for businesses in
          Darjeeling and nearby regions. We help local brands build a powerful digital presence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="btn-primary inline-block text-center"
          >
            View Portfolio
          </a>
          <a
            href="https://wa.me/917557061046"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block text-center"
          >
            💬 Contact on WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero

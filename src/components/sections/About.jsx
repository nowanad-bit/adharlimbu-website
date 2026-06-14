import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-12 rounded-xl"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-red-500 font-semibold">Darjeeling Web Studio</span> is a digital agency
              dedicated to helping local brands in Darjeeling and nearby regions build a strong online presence.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              We understand the unique challenges faced by local businesses. Our mission is to bridge the gap
              between traditional local enterprises and the digital world, enabling them to compete globally.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in modern web technologies, design thinking, and digital marketing, we create
              solutions that are not just beautiful but also drive real business results.
            </p>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <p className="text-gray-400 text-sm">Support Available</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

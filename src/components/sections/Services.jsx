import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Website Design',
      description: 'Beautiful, modern designs that reflect your brand identity and captivate your audience.',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'High-performance, scalable websites built with the latest technologies and best practices.',
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Fully responsive designs that work seamlessly across all devices and screen sizes.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Strategic SEO implementation to improve visibility and drive organic traffic to your site.',
    },
    {
      icon: '🎯',
      title: 'Branding',
      description: 'Complete branding solutions including logo design, color schemes, and brand guidelines.',
    },
    {
      icon: '📱',
      title: 'Social Media',
      description: 'Engaging social media content and strategy to build your online community.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="glass-effect p-8 rounded-xl card-hover"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

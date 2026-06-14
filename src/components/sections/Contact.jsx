import { motion } from 'framer-motion'

const Contact = () => {
  const contactMethods = [
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+91 7557061046',
      link: 'https://wa.me/917557061046',
      color: 'from-green-600',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'nowanad@gmail.com',
      link: 'mailto:nowanad@gmail.com',
      color: 'from-blue-600',
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'adharlimbu.online',
      link: 'https://adharlimbu.online',
      color: 'from-red-600',
    },
  ]

  const socialLinks = [
    { icon: '👨‍💻', label: 'GitHub', url: 'https://github.com/nowanad-bit' },
    { icon: '💼', label: 'LinkedIn', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '📷', label: 'Instagram', url: '#' },
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Ready to take your business online? Let's talk!</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto mt-4"></div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover="hover"
              className={`glass-effect p-8 rounded-xl text-center card-hover bg-gradient-to-br ${method.color} to-transparent opacity-80 hover:opacity-100 transition-opacity`}
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <p className="text-gray-300 text-sm mb-2">{method.label}</p>
              <p className="text-white font-semibold break-all">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-12 text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Create Something Amazing</h3>
          <p className="text-red-100 mb-8">Whether you need a new website, redesign, or digital strategy consultation</p>
          <motion.a
            href="https://wa.me/917557061046"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4"
        >
          <p className="text-gray-400">Follow us:</p>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl hover:text-red-500 transition-colors"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

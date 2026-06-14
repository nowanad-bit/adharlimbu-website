import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-red-600 mb-2">DWS</div>
            <p className="text-gray-400 text-sm">Where Local Brands Go Global</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-red-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  SEO & Branding
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+917557061046" className="hover:text-red-500 transition-colors">
                  +91 7557061046
                </a>
              </li>
              <li>
                <a href="mailto:nowanad@gmail.com" className="hover:text-red-500 transition-colors">
                  nowanad@gmail.com
                </a>
              </li>
              <li>
                <a href="https://adharlimbu.online" className="hover:text-red-500 transition-colors">
                  adharlimbu.online
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm"
          >
            <p>
              © {currentYear} Darjeeling Web Studio. All rights reserved. | Made with ❤️ in the Mountains
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

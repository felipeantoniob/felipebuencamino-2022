import { motion } from 'framer-motion'
import ContactForm from '../ContactForm'

const ContactSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 0 },
      }}
      id="contact"
      className="py-32"
    >
      <h2 className="text-center text-2xl sm:text-4xl">CONTACT ME</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
        <ContactForm />
        <div className="p-8">
          <p className="text-lg sm:text-xl">
            Have an exciting project you need some help with? Feel free to send me a message, and
            let's chat.
          </p>
          <p className="mt-8 text-lg sm:text-xl break-words">
            If you have any questions about me or my projects, you can send an email to{' '}
            <a
              href="mailto:felipebuencamino@gmail.com"
              className="underline italic hover:opacity-75 transition-all"
            >
              felipebuencamino@gmail.com
            </a>{' '}
            and I'll get back to you as soon as possible.
          </p>
          <p className="mt-8 text-lg sm:text-xl">
            Drop a comment, question, or concern, and thanks for stopping by!
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactSection

import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'

export default function Contact() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      "service_cosn704",
      "template_7vzg0q9",
      formRef.current,
      "j39NKhI-dpYOb-04x"
    )
    .then(() => {
      toast.success("✅ Message sent successfully!")
      formRef.current.reset()
    })
    .catch(() => {
      toast.error("❌ Failed to send message. Try again.")
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold">Contact</h3>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ x: -8, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="p-6 glass rounded-lg"
        >
          <label className="block text-sm text-slate-300">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full p-3 rounded-md bg-transparent border border-slate-700"
          />

          <label className="block text-sm text-slate-300 mt-4">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full p-3 rounded-md bg-transparent border border-slate-700"
          />

          <label className="block text-sm text-slate-300 mt-4">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="mt-2 w-full p-3 rounded-md bg-transparent border border-slate-700"
          ></textarea>

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ x: 8, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="p-6 glass rounded-lg"
        >
          <div className="text-slate-300">For professional inquiries:</div>
          <div className="mt-4 flex items-center gap-3 text-slate-200">
            <Mail />
            <a
              href="mailto:satyanarayanapyla031@gmail.com"
              className="underline"
            >
              satyanarayanapyla031@gmail.com
            </a>
          </div>
          <div className="mt-3 flex items-center gap-3 text-slate-200">
            <Phone /> 9390938369
          </div>
        </motion.div>

      </div>
    </section>
  )
}

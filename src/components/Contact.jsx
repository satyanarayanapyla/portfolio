import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.form initial={{x:-8,opacity:0}} whileInView={{x:0,opacity:1}} className="p-6 glass rounded-lg">
          <label className="block text-sm text-slate-300">Name</label>
          <input className="mt-2 w-full p-3 rounded-md bg-transparent border border-slate-700 focus-ring" placeholder="Your name" />
          <label className="block text-sm text-slate-300 mt-4">Email</label>
          <input className="mt-2 w-full p-3 rounded-md bg-transparent border border-slate-700 focus-ring" placeholder="you@example.com" />
          <label className="block text-sm text-slate-300 mt-4">Message</label>
          <textarea className="mt-2 w-full p-3 rounded-md bg-transparent border border-slate-700 focus-ring" rows="5" placeholder="Say hello..."></textarea>
          <div className="mt-4"><button className="btn-primary">Send Message</button></div>
        </motion.form>

        <motion.div initial={{x:8,opacity:0}} whileInView={{x:0,opacity:1}} className="p-6 glass rounded-lg">
          <div className="text-slate-300">For professional inquiries:</div>
          <div className="mt-4 flex items-center gap-3 text-slate-200">
            <Mail /> <a href="mailto:satyanarayanapyla031@gmail.com" className="underline">satyanarayanapyla031@gmail.com</a>
          </div>
          <div className="mt-3 flex items-center gap-3 text-slate-200"><Phone /> 9390938369</div>
          <div className="mt-6 text-slate-400">Connect on LinkedIn for full profile and endorsements.</div>
        </motion.div>
      </div>
    </section>
  )
}

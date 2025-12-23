import { motion } from 'framer-motion'
import HeroIllo from '../assets/profile.jpeg'

export default function Hero(){
  return (
    <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-16">
      <div>
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold leading-tight">Pyla Satyanarayana
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 block md:inline"> — Frontend Developer</span>
        </motion.h1>
        <motion.p initial={{y:12,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="mt-4 text-slate-300 max-w-xl">
          Detail-oriented React.js developer building component-driven, secure, and scalable frontends. Focused on clean UX, authentication flows, and production-grade deployments.
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}} className="mt-6 flex gap-3">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-slate-700 text-slate-200 hover:bg-white/5">Hire Me</a>
        </motion.div>

        <div className="mt-6 flex gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" /> Visakapatnam, Andhra Pradesh
          </div>
          <div className="hidden sm:flex items-center gap-2"> satyanarayanapyla031@gmail.com • 9390938369</div>
        </div>
      </div>

      <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.25}} className="flex justify-center md:justify-end">
        <div className="w-full max-w-md glass rounded-2xl p-6">
          <img src={HeroIllo} alt="Hero illustration" className="w-full h-auto" />
        </div>
      </motion.div>
    </section>
  )
}

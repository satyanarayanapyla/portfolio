import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="py-12">
      <motion.h2 initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} className="text-2xl font-semibold">About Me</motion.h2>
      <motion.div className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}}>
        <p>
          I am a Frontend Developer experienced in React.js, component-driven architecture, secure REST API integration and JWT authentication. Familiar with Node.js, Express.js, Python and relational & NoSQL databases. Looking to grow into a Full-Stack role.
        </p>
        <ul className="mt-4 space-y-2 text-slate-400">
          <li>• Production React apps, reusable components & dynamic forms</li>
          <li>• Protected routes, role-based dashboards & API testing</li>
          <li>• Payment integrations, admin panels & video workflows</li>
        </ul>
      </motion.div>
    </section>
  )
}

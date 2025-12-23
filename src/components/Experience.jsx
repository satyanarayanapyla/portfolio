import { motion } from 'framer-motion'

const EXPERIENCE = [{
  role: 'Software Associate Engineer',
  company: 'Adiverse Technologies',
  range: 'Apr 2025 – Dec 2025',
  bullets: [
    'Built production-grade React applications',
    'Implemented React Router, protected routes, and role-based dashboards',
    'Created reusable components, dynamic forms, tables with pagination & search',
    'Integrated Lyra Payment Gateway for subscriptions'
  ]
}]

export default function Experience(){
  return (
    <section id="experience" className="py-12">
      <h3 className="text-2xl font-semibold">Experience</h3>
      <div className="mt-6 space-y-4">
        {EXPERIENCE.map(e=> (
          <motion.div key={e.company} initial={{x:-8,opacity:0}} whileInView={{x:0,opacity:1}} className="p-4 glass rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{e.role}</div>
                <div className="text-sm text-slate-400">{e.company}</div>
              </div>
              <div className="text-sm text-slate-400">{e.range}</div>
            </div>
            <ul className="mt-3 text-slate-300 list-inside list-disc space-y-1">
              {e.bullets.map(b=> <li key={b}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

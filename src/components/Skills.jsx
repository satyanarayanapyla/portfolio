import { BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const SKILLS = [
  {group: 'Frontend', items: ['HTML','CSS','JavaScript','React.js','React Native','Bootstrap','Tailwind CSS']},
  {group: 'Backend', items: ['Node.js','Express.js','Python']},
  {group: 'Databases', items: ['PostgreSQL','MongoDB','SQLite']},
  {group: 'Tools', items: ['Git','GitHub','Postman','JWT','REST API','Lyra']}
]

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Skills</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILLS.map((s)=> (
          <motion.div key={s.group} initial={{y:8,opacity:0}} whileInView={{y:0,opacity:1}} className="p-4 glass rounded-lg">
            <div className="font-semibold text-slate-900 dark:text-slate-100">{s.group}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map(i=> (
                <div key={i} className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-slate-100/60 text-slate-700 dark:bg-white/5 dark:text-slate-100">
                  <BadgeCheck size={14} className="text-green-300" /> {i}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

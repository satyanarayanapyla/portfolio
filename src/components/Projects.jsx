import { motion } from 'framer-motion'
// import Project1 from '../assets/project-1.svg'
import Project1 from '../assets/codexoimage.jpg'
import Project2 from '../assets/project-2.svg'

const PROJECTS = [
  {
    title: 'CodeXo – Multi-Role College Management Platform',
    tech: 'React, JWT, REST APIs',
    desc: 'Large-scale multi-role college management system with dynamic UI and role-based permissions.',
    img: Project1,
    features: ['JWT Access & Refresh Tokens','Dynamic dashboards','Pagination & search']
  },
  {
    title: 'Synthesia-Style AI Video Generation Platform',
    tech: 'React, AI Tools, Lyra Payments',
    desc: 'AI-powered video creation with scene editor, avatars, and subscription-based payments.',
    img: Project2,
    features: ['Multi-role system','Scene-by-scene editor','Lyra payment integration']
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p,idx)=> (
          <motion.article initial={{y:12,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:idx*0.08}} key={p.title} className="p-4 glass rounded-2xl hover:scale-[1.01] transition-transform">
            <div className="flex gap-4 items-start">
              <img src={p.img} alt={p.title} className="w-28 h-20 object-cover rounded-lg shadow-md" />
              <div>
                <div className="font-semibold text-lg">{p.title}</div>
                <div className="text-sm text-slate-400">{p.tech}</div>
                <p className="mt-3 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.features.map(f=> <span key={f} className="text-sm px-2 py-1 rounded-md bg-white/5">{f}</span>)}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const EDU = [
  {title: 'Nxtwave', subtitle: 'Industry Ready Certification in Full-Stack Development', range: '2023 – Ongoing'},
  {title: 'B.Tech ECE', subtitle: 'Avanthi Institute of Engineering and Technology', range: '2019 – 2023'},
  {title: 'Intermediate MPC', subtitle: 'NRI Junior College'},
  {title: 'SSC', subtitle: 'ZP High School'}
]

export default function Education(){
  return (
    <section id="education" className="py-12">
      <h3 className="text-2xl font-semibold">Education</h3>
      <div className="mt-6 space-y-4">
        {EDU.map((e)=> (
          <motion.div key={e.title} initial={{x:-6,opacity:0}} whileInView={{x:0,opacity:1}} className="p-4 glass rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-slate-400">{e.subtitle}</div>
              </div>
              <div className="text-sm text-slate-400">{e.range || ''}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

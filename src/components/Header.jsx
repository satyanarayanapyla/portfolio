import { Sun, Moon, GitBranch } from 'lucide-react'

export default function Header({ theme, setTheme }){
  return (
    <header className="w-full py-4 bg-transparent glass sticky top-0 z-40">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md gradient-1 flex items-center justify-center text-black font-bold">PS</div>
          <div>
            <div className="text-sm font-semibold">Pyla Satyanarayana</div>
            <div className="text-xs text-slate-400">Frontend Developer</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/satyanarayana-pyla" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
            <GitBranch size={18} />
          </a>
          <button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md focus-ring">
            {theme === 'dark' ? <Sun size={18} className="text-yellow-300" /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}

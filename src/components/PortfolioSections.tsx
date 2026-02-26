import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Github, 
  MessageSquare, 
  Server, 
  Gamepad2, 
  Code2, 
  ExternalLink, 
  Cpu, 
  Globe,
  Terminal,
  Layers,
  Bot,
  Mail,
  Zap,
  Shield,
  Target,
  Quote,
  Activity,
  Clock,
  Wifi
} from "lucide-react";

export const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Ventures", path: "/ventures" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-4 relative overflow-hidden">
        <Link to="/" className="mr-2">
          <img 
            src="https://cdn.discordapp.com/attachments/1338476072160727091/1476474414295158915/hulklogo-removebg-preview.png?ex=69a14173&is=699feff3&hm=5df0e8d1b5eea4539652ec2e563f2364c6b0882971b402f4e6c4800714a2d92f&" 
            alt="Logo" 
            className="w-8 h-8 object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path} 
            className={({ isActive }) => 
              `text-sm font-medium transition-all relative z-10 flex items-center gap-2 ${isActive ? 'text-brand-primary drop-shadow-[0_0_8px_rgba(255,0,204,0.5)]' : 'text-white/60 hover:text-brand-primary hover:drop-shadow-[0_0_8px_rgba(255,0,204,0.3)]'}`
            }
          >
            {item.name}
            {item.name === "Projects" && (
              <span className="text-[8px] bg-brand-primary text-white px-1.5 py-0.5 rounded-full font-bold">4</span>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <img 
        src="https://picsum.photos/seed/hulk-bg/1920/1080?blur=10" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
      
      {/* System Status Widget */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-32 right-8 hidden lg:flex flex-col gap-4"
      >
        <div className="glass p-4 rounded-2xl flex items-center gap-4">
          <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
          <div className="text-[10px] font-mono">
            <p className="text-white/40 uppercase">System Status</p>
            <p className="text-brand-accent uppercase">All Systems Operational</p>
          </div>
        </div>
        <div className="glass p-4 rounded-2xl flex items-center gap-4">
          <Clock className="text-brand-primary w-4 h-4" />
          <div className="text-[10px] font-mono">
            <p className="text-white/40 uppercase">Local Time</p>
            <p className="text-white uppercase">{time}</p>
          </div>
        </div>
        <div className="glass p-4 rounded-2xl flex items-center gap-4">
          <Activity className="text-brand-secondary w-4 h-4" />
          <div className="text-[10px] font-mono">
            <p className="text-white/40 uppercase">Server Load</p>
            <p className="text-white uppercase">{(Math.random() * 10 + 2).toFixed(1)}%</p>
          </div>
        </div>
        <div className="glass p-4 rounded-2xl flex items-center gap-4">
          <Wifi className="text-brand-accent w-4 h-4" />
          <div className="text-[10px] font-mono">
            <p className="text-white/40 uppercase">Network</p>
            <p className="text-brand-accent uppercase">Stable</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -140 }} // Moved down by 1 cm (~40px)
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-4"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/5 text-white text-xs font-mono glow">
            AVAILABLE FOR NEW PROJECTS
          </span>
          <img 
            src="https://cdn.discordapp.com/attachments/1338476072160727091/1476474414295158915/hulklogo-removebg-preview.png?ex=69a14173&is=699feff3&hm=5df0e8d1b5eea4539652ec2e563f2364c6b0882971b402f4e6c4800714a2d92f&" 
            alt="Hulk Logo" 
            className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
          I AM <span className="text-brand-accent">HULK</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-mono leading-relaxed h-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-primary mr-2">&gt;</span>
            Developer, entrepreneur, and builder of digital worlds. 
            Crafting high-performance Discord ecosystems and Minecraft experiences.
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-6 bg-brand-primary ml-1 align-middle"
            />
          </motion.p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-brand-primary transition-colors inline-block"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact"
              className="px-8 py-4 glass rounded-xl font-semibold hover:border-brand-primary/50 transition-colors inline-block"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-brand-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export const HomeDetails = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote size={80} className="text-brand-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Zap className="text-brand-primary" /> THE WORD ON HULK
          </h2>
          <div className="space-y-8">
            <div className="border-l-2 border-brand-primary pl-6">
              <p className="text-xl italic text-white/80 mb-2">"A visionary developer who turns complex ideas into seamless digital realities."</p>
              <p className="text-sm text-white/40 font-mono tracking-widest uppercase">— INDUSTRY RECOGNITION</p>
            </div>
            <div className="border-l-2 border-brand-accent pl-6">
              <p className="text-xl italic text-white/80 mb-2">"Unmatched expertise in Discord and Minecraft ecosystems. Hulk is the gold standard."</p>
              <p className="text-sm text-white/40 font-mono tracking-widest uppercase">— COMMUNITY LEADER</p>
            </div>
            <div className="border-l-2 border-brand-secondary pl-6">
              <p className="text-xl italic text-white/80 mb-2">"A leader who builds not just projects, but thriving, sustainable ventures."</p>
              <p className="text-sm text-white/40 font-mono tracking-widest uppercase">— VENTURE PARTNER</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-8 tracking-tighter">THE <span className="text-gradient">MINDSET</span></h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                <Target className="text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Relentless Excellence</h3>
                <p className="text-white/50 leading-relaxed">
                  I don't just build; I perfect. My attitude is defined by a refusal to settle for "good enough." Every line of code is a commitment to peak performance and absolute quality.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                <Shield className="text-brand-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Strategic Management</h3>
                <p className="text-white/50 leading-relaxed">
                  Managing Primecraft and Pluto Hosting requires a surgical approach. I manage work through rigorous prioritization, automated workflows, and a focus on long-term scalability over short-term fixes.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                <Cpu className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community-First Logic</h3>
                <p className="text-white/50 leading-relaxed">
                  My work management is rooted in user-centric design. I build systems that serve people, ensuring that every digital environment I create is robust, welcoming, and intuitive.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Building the <span className="text-brand-primary">Future</span> of Communities.
          </h2>
          <p className="text-lg text-white/60 mb-6 leading-relaxed">
            I'm a developer and entrepreneur with a passion for building tools and platforms that empower online communities. From complex Discord bot architectures to immersive Minecraft server environments, my focus is always on performance, scalability, and user experience.
          </p>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            As the founder of Primecraft and Pluto Cloud Hosting, I understand the intersection of technology and business, ensuring that every project I build is not just code, but a sustainable venture.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-brand-primary font-bold text-2xl mb-1">5+</h3>
              <p className="text-sm text-white/40 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-brand-secondary font-bold text-2xl mb-1">100+</h3>
              <p className="text-sm text-white/40 uppercase tracking-wider">Projects Built</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
            <img 
              src="https://picsum.photos/seed/hulk-dev/800/800" 
              alt="Hulk Workspace" 
              className="w-full h-full object-cover rounded-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl glow">
            <Terminal className="text-brand-primary w-8 h-8 mb-2" />
            <p className="font-mono text-sm">root@hulk:~$ build --all</p>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="mt-32 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-dark to-transparent z-10" />
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {["React", "TypeScript", "Node.js", "Java", "Spigot", "Docker", "Kubernetes", "Redis", "MongoDB", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Express", "Vite"].map((tech) => (
            <span key={tech} className="text-4xl md:text-6xl font-bold text-white/5 font-display tracking-tighter uppercase">
              {tech}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {["React", "TypeScript", "Node.js", "Java", "Spigot", "Docker", "Kubernetes", "Redis", "MongoDB", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Express", "Vite"].map((tech) => (
            <span key={tech + "-dup"} className="text-4xl md:text-6xl font-bold text-white/5 font-display tracking-tighter uppercase">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      title: "Minecraft Ecosystems",
      category: "Minecraft",
      description: "Custom plugin development, world generation, and server-side optimization for large-scale Minecraft networks.",
      icon: Gamepad2,
      tags: ["Java", "Spigot", "Paper", "NMS"],
      className: "md:col-span-2 md:row-span-2",
      status: "Production"
    },
    {
      title: "Discord Bot Architectures",
      category: "Discord",
      description: "High-performance, sharded Discord bots serving thousands of guilds with complex moderation and economy systems.",
      icon: Bot,
      tags: ["Node.js", "Discord.js", "Redis", "MongoDB"],
      className: "md:col-span-1 md:row-span-1",
      status: "Active"
    },
    {
      title: "Infrastructure Automation",
      category: "Infra",
      description: "Automated deployment pipelines and container orchestration for hosting services and game servers.",
      icon: Server,
      tags: ["Docker", "Kubernetes", "Linux", "Bash"],
      className: "md:col-span-1 md:row-span-2",
      status: "Internal"
    },
    {
      title: "Web Interfaces",
      category: "Web",
      description: "Modern, responsive dashboards for managing server resources and community interactions.",
      icon: Globe,
      tags: ["React", "TypeScript", "Tailwind", "Next.js"],
      className: "md:col-span-1 md:row-span-1",
      status: "Beta"
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-brand-primary font-mono text-sm mb-4 tracking-widest uppercase">Selected Work</p>
          <h2 className="text-5xl font-bold tracking-tighter">PROJECTS</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", "Minecraft", "Discord", "Infra", "Web"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${filter === cat ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(255,0,204,0.3)]' : 'glass text-white/40 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div 
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`glass p-8 rounded-3xl group transition-all duration-300 hover:border-brand-primary/30 flex flex-col justify-between ${p.className}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <p.icon className="text-brand-accent w-6 h-6" />
                  </div>
                  <span className="text-[8px] font-mono px-2 py-1 rounded-md border border-white/10 bg-white/5 text-white/40 uppercase tracking-widest">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm line-clamp-3">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {p.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export const Ventures = () => {
  return (
    <section id="ventures" className="py-32 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">VENTURES</h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            The brands and companies I've founded and currently lead.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[40px] bg-[#1a1a1a] p-12 border border-white/5 group"
          >
            <div className="absolute top-8 right-8 flex items-center gap-2 z-20">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">Live</span>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] -z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-brand-primary flex items-center justify-center">
                  <img 
                    src="https://images-ext-1.discordapp.net/external/0y1WAp9AXtWLez01qKsuu4eiCWu6zk0GLeRKa1UABKg/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1018058595016912908/81c46d47808848d9e7d159932d798422.png?format=webp&quality=lossless&width=512&height=512" 
                    alt="Primecraft Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl font-bold">Primecraft</h3>
              </div>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Primecraft is a Tamil public Minecraft server offering a unique and engaging community experience for players.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  Tamil Community Server
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  Public Survival & Minigames
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  Active Player Base
                </li>
              </ul>
              <a 
                href="https://www.primemc.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-primary font-bold group-hover:gap-4 transition-all"
              >
                View Primecraft <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[40px] bg-[#1a1a1a] p-12 border border-white/5 group"
          >
            <div className="absolute top-8 right-8 flex items-center gap-2 z-20">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">Live</span>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 blur-[80px] -z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-brand-secondary flex items-center justify-center">
                  <img 
                    src="https://images-ext-1.discordapp.net/external/cThJ0h-Syv14U3aASEdfxBY_Jo2-7LBEsq4F7xkZxa8/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1127451377547870399/858290902f422d9af5a4db4020dac796.png?format=webp&quality=lossless&width=512&height=512" 
                    alt="Pluto Hosting Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl font-bold">Pluto Hosting</h3>
              </div>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                High-performance cloud hosting solutions tailored for developers and gamers. Providing low-latency, DDoS-protected infrastructure at scale.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                  Game Server Hosting
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                  VPS & Dedicated Servers
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                  24/7 Technical Support
                </li>
              </ul>
              <a 
                href="https://web.plutocloud.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-secondary font-bold group-hover:gap-4 transition-all"
              >
                View Pluto Cloud <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  const skills = [
    { name: "Java", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 92 },
    { name: "React", level: 85 },
    { name: "Docker", level: 80 },
    { name: "SQL/NoSQL", level: 88 },
    { name: "Linux Admin", level: 85 },
    { name: "Discord API", level: 98 },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold mb-6">TECH STACK</h2>
          <p className="text-white/40 mb-8">
            My primary tools and technologies that I use to bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-3">
            {["VS Code", "IntelliJ", "Git", "Postman", "Figma"].map(tool => (
              <span key={tool} className="px-4 py-2 rounded-xl glass text-xs font-mono">{tool}</span>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-white/40 font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <p className="text-brand-primary font-mono text-sm mb-4 tracking-widest uppercase">Get in Touch</p>
          <h2 className="text-6xl font-bold mb-8 tracking-tighter">LET'S <span className="text-gradient">CONNECT</span></h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Whether you have a project in mind, want to discuss a potential partnership, or just want to say hi, my inbox is always open.
          </p>
          
          <div className="space-y-8">
            <motion.a 
              href="https://discord.gg/6dDz5RNn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-colors">
                <MessageSquare className="text-[#5865F2] w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Discord</p>
                <p className="text-xl font-bold group-hover:text-[#5865F2] transition-colors">Join the Community</p>
              </div>
            </motion.a>
            
            <motion.a 
              href="mailto:hulk08002@gmail.com"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <Mail className="text-brand-primary w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Email</p>
                <p className="text-xl font-bold group-hover:text-brand-primary transition-colors">hulk08002@gmail.com</p>
              </div>
            </motion.a>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] -z-10" />
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors font-mono text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors font-mono text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors font-mono text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Message</label>
              <textarea placeholder="Tell me about your project..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors font-mono text-sm resize-none" />
            </div>
            <button className="w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(255,0,204,0.3)] transition-all active:scale-[0.98]">
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/20 text-sm font-mono">© 2024 HULK. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-brand-primary transition-colors text-sm">Twitter</a>
          <a href="#" className="text-white/40 hover:text-brand-primary transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-white/40 hover:text-brand-primary transition-colors text-sm">Instagram</a>
        </div>
      </div>
    </section>
  );
};

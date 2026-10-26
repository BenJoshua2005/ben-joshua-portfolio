import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, ArrowLeft, Search, Menu, X, Sparkles, Code2,
  BrainCircuit, Eye, Layers3, GraduationCap, Compass, BookOpen, Users,
  Accessibility, CheckCircle2, Github, Linkedin, Mail, ExternalLink,
  ChevronDown, MousePointer2, Smartphone, Zap, Lightbulb, CircleHelp,
  SlidersHorizontal, Terminal, Play, ShieldCheck, Languages, Clock3
} from 'lucide-react';
import './styles.css';

const email = 'benjoshuarajasingh@gmail.com';

const projects = [
  {
    id: 'interview-prep', title: 'Interview Preparation Platform', category: 'Web', status: 'Project in development',
    summary: 'A concept for bringing interview preparation tools into one focused workflow.',
    description: 'The platform concept brings together resume and job-description uploads, ATS-style feedback, aptitude practice, DSA coding tests, and voice/video mock interview ideas. The intended goal is to help a candidate move from preparation to practice in one place.',
    stack: ['React', 'Node.js', 'Express', 'Axios', 'AI API exploration'],
    role: 'Student project', accent: 'violet', icon: BrainCircuit,
    features: ['Resume and job-description workflow', 'Practice-oriented question generation', 'DSA test experience', 'Mock interview concept'],
    note: 'Presented as a project concept / development work; not represented as a production service.'
  },
  {
    id: 'motionlab', title: 'MotionLab AI', category: 'AI / CV', status: 'Prototype / technical exploration',
    summary: 'Exploring pose detection as a foundation for movement analysis.',
    description: 'A computer-vision starter project using MediaPipe Pose Landmarker to detect a person and extract body landmarks from visual input. The longer-term research direction is sports biomechanics and video-based exercise feedback.',
    stack: ['Python', 'MediaPipe Tasks', 'Pose Landmarks', 'Computer Vision'],
    role: 'Personal technical exploration', accent: 'mint', icon: Eye,
    features: ['Pose Landmarker loading and testing', '33 body landmarks detected in a test run', 'Potential movement tracking', 'Future biomechanics analysis'],
    note: 'The current scope is pose-detection experimentation; rehabilitation assessment and sports analytics are future directions, not validated features.'
  },
  {
    id: 'srm-ux', title: 'SRM Website Discovery', category: 'UX / UI', status: 'Self-initiated concept',
    summary: 'A student-centred proposal for clearer programme discovery and admissions guidance.',
    description: 'A redesign concept exploring how prospective students could find a programme, understand eligibility and fees, and identify the next admissions step with less friction.',
    stack: ['UX research plan', 'Responsive UI', 'Interactive prototype', 'Accessibility'],
    role: 'Self-initiated UX concept', accent: 'blue', icon: Compass,
    features: ['Programme finder prototype', 'Admissions assistant concept', 'Mobile-first navigation', 'Evidence-led validation plan'],
    note: 'This is an independent concept, not an official SRM project or a completed audit of the current website.'
  },
  {
    id: 'java-app', title: 'Java Swing + MySQL Application', category: 'Software', status: 'Academic project',
    summary: 'A desktop GUI project built with Java Swing and a MySQL-backed workflow.',
    description: 'A college project using Java Swing for a graphical interface and MySQL/phpMyAdmin for database-related work. This portfolio records the technologies and project context without inventing unverified features.',
    stack: ['Java', 'Swing', 'MySQL', 'phpMyAdmin', 'Eclipse'],
    role: 'Academic software project', accent: 'amber', icon: Code2,
    features: ['Desktop GUI development', 'Database-backed workflow', 'Java application structure', 'Academic project experience'],
    note: 'Feature details are intentionally limited to what is known.'
  }
];

const answerContent = [
  ['01', 'Who are the primary users?', 'Prospective students and parents are key audiences, alongside current students, faculty, researchers, alumni, recruiters, and industry partners. Each group arrives with a different task: compare programmes, understand admissions, find student services, explore research, or assess the university’s credibility. I would organise the experience around these user journeys instead of expecting everyone to navigate the same information structure.'],
  ['02', 'What could prospective users find difficult?', 'A prospective student may need to visit multiple pages to understand eligibility, fees, scholarships, deadlines, and application steps. Dense pages, inconsistent labels, or competing calls to action can make that journey harder. I would treat these as hypotheses, then validate them through task-based usability sessions and site-search or analytics data.'],
  ['03', 'What UX patterns should SRM adopt?', 'I would adapt strong programme finders, transparent admissions summaries, visible deadlines, accessible campus information, and student project stories. A student should be able to filter by study level, subject, and campus, then compare the details needed to make a decision. The aim is to adapt useful patterns to SRM rather than copy another university’s visual style.'],
  ['04', 'What weakness would I investigate first?', 'I would test whether prospective students can find eligibility, total fees, scholarship information, deadlines, and the application action without repeatedly switching pages. I would ask five to eight prospective students to complete realistic tasks and measure completion, time, backtracking, errors, and confidence. I would combine those observations with search queries and analytics before prioritising a redesign.'],
  ['05', 'What visual changes would help?', 'I would use a consistent type scale, clear spacing, stronger hierarchy, accessible contrast, and a predictable layout. Authentic campus photography and verified student or research stories can build trust. Pages should be scannable, actions consistently labelled, and the experience usable with keyboard navigation, text scaling, and low-bandwidth mobile connections.'],
  ['06', 'How should the homepage work?', 'Start with a clear headline, programme search, and two primary actions: “Explore programmes” and “Admissions & scholarships.” Follow with useful filters, application dates, fee guidance, student projects, campus life, and credible institutional information. The homepage should quickly answer: What can I study? Can I afford it? What should I do next?'],
  ['07', 'How should a campus story be discovered?', 'I would create a “Student Innovation & Research” hub and link it from the homepage and relevant department pages. Each story should explain the problem, disciplines involved, student contributions, outcomes, and ways to explore related programmes. Before naming a real campus project in a formal submission, I would verify its current name, people, and impact through an official SRM source rather than risk publishing inaccurate details.'],
  ['08', 'What would I leave out and add?', 'I would avoid autoplaying hero videos because they can distract, consume data, and slow the first view. I would propose an account-free “Plan My Next Step” guide that asks optional questions about study level, subject, campus, and fee or scholarship needs, then generates a checklist of official links. I would not claim no university offers something similar; I would aim to make the flow particularly well integrated for SRM and test whether it saves users time.'],
  ['09', 'Which emerging technology would I test?', 'I would pilot a lightweight multilingual admissions assistant grounded in verified SRM documents and webpages. On a low-end phone it should use plain text, suggested questions, minimal animation, and source links, with ordinary search as a fallback. Risks include outdated or invented answers, translation mistakes, privacy concerns, and connectivity. Success measures would include answer accuracy, task completion, response time, helpfulness, unresolved questions, and reported errors.']
];

function Logo({ onClick }) {
  return <a href="#home" onClick={onClick} className="brand"><span className="brand-mark">B<span>.</span></span><span>BEN JOSHUA<small>CS · PRODUCT · UX</small></span></a>;
}

function Tag({ children }) { return <span className="tag">{children}</span>; }

function ProjectVisual({ project, compact = false }) {
  const Icon = project.icon;
  if (project.id === 'srm-ux') return (
    <div className={`project-visual srm-visual ${compact ? 'compact' : ''}`}>
      <div className="visual-top"><span className="mini-logo">s.</span><span>Explore&nbsp;&nbsp; Study&nbsp;&nbsp; Campus</span><span className="visual-pill">SRM concept</span></div>
      <div className="srm-visual-content"><span className="eyebrow">YOUR NEXT CHAPTER</span><h3>Find a path<br/>that fits you.</h3><p>Explore programmes. Understand your options.</p><div className="visual-search"><Search size={14}/> Search programmes <ArrowRight size={14}/></div><div className="visual-chips"><span>Computing</span><span>Engineering</span><span>Design</span></div></div>
      <div className="visual-bottom"><span><Compass size={13}/> Programme finder</span><span><Users size={13}/> Student stories</span><span><Languages size={13}/> Language access</span></div>
    </div>
  );
  if (project.id === 'motionlab') return (
    <div className={`project-visual motion-visual ${compact ? 'compact' : ''}`}>
      <div className="motion-orbit orbit-a"></div><div className="motion-orbit orbit-b"></div>
      <div className="pose-figure"><span className="joint j1"/><span className="joint j2"/><span className="joint j3"/><span className="joint j4"/><span className="joint j5"/><span className="joint j6"/><span className="joint j7"/><span className="limb l1"/><span className="limb l2"/><span className="limb l3"/><span className="limb l4"/><span className="limb l5"/><span className="limb l6"/><span className="limb l7"/><span className="limb l8"/></div>
      <div className="motion-label"><span className="live-dot"></span> POSE LANDMARKS <b>33</b></div><div className="motion-caption">MOVEMENT · VISION · RESEARCH</div>
    </div>
  );
  if (project.id === 'interview-prep') return (
    <div className={`project-visual interview-visual ${compact ? 'compact' : ''}`}>
      <div className="interview-window"><div className="window-dots"><i/><i/><i/></div><div className="window-heading">Your next interview, prepared.</div><div className="window-row"><span className="window-icon"><BookOpen size={15}/></span><span><b>Resume review</b><small>Understand your strengths</small></span><span className="status-dot"/></div><div className="window-row"><span className="window-icon purple"><BrainCircuit size={15}/></span><span><b>Practice session</b><small>Questions tailored to a role</small></span><ArrowUpRight size={14}/></div><div className="window-code"><span>01</span> Solve. Explain. Improve.<div className="code-lines"><i/><i/><i/></div></div></div>
      <div className="floating-chip"><Sparkles size={13}/> AI-assisted concept</div>
    </div>
  );
  return (
    <div className={`project-visual java-visual ${compact ? 'compact' : ''}`}>
      <div className="java-window"><div className="java-title"><span className="java-app-icon">J</span><div><b>Desktop application</b><small>Java Swing · MySQL</small></div></div><div className="java-side"><span className="selected">Dashboard</span><span>Records</span><span>Settings</span></div><div className="java-panels"><div/><div/><div/></div><div className="java-table"><i/><i/><i/><i/></div></div><div className="java-orb">JVM</div>
    </div>
  );
}

function SRMPrototype() {
  const [tab, setTab] = useState('finder');
  const [level, setLevel] = useState('Undergraduate');
  const [subject, setSubject] = useState('Computer Science & IT');
  const [campus, setCampus] = useState('Kattankulathur');
  const [assistantQuestion, setAssistantQuestion] = useState('What should I check before applying?');
  const [answerShown, setAnswerShown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const answer = useMemo(() => {
    if (assistantQuestion.toLowerCase().includes('fee') || assistantQuestion.toLowerCase().includes('scholar')) return 'Check the latest official fee structure and scholarship eligibility for your chosen programme. I would link directly to verified SRM pages rather than estimate a fee.';
    if (assistantQuestion.toLowerCase().includes('deadline') || assistantQuestion.toLowerCase().includes('date')) return 'Check the current admissions schedule on the official SRM admissions page. Dates can change, so this concept would always link to the latest verified notice.';
    return 'Start by checking eligibility, the current fee structure, scholarships, required documents, and application dates for your chosen programme. This concept would link each item to an official SRM source.';
  }, [assistantQuestion]);
  return (
    <div className="prototype-shell">
      <div className="prototype-top"><div className="prototype-brand"><span className="mini-logo">s.</span><b>SRM <small>EXPERIENCE CONCEPT</small></b></div><button className="prototype-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle prototype menu">{menuOpen ? <X size={18}/> : <Menu size={18}/>}</button></div>
      <AnimatePresence>{menuOpen && <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="prototype-menu-panel"><button onClick={() => {setTab('finder');setMenuOpen(false)}}>Programme finder</button><button onClick={() => {setTab('assistant');setMenuOpen(false)}}>Admissions assistant</button><button onClick={() => {setTab('journey');setMenuOpen(false)}}>My next steps</button></motion.div>}</AnimatePresence>
      <div className="prototype-tabs">
        <button className={tab === 'finder' ? 'active' : ''} onClick={() => setTab('finder')}><Search size={13}/> Find a programme</button>
        <button className={tab === 'assistant' ? 'active' : ''} onClick={() => setTab('assistant')}><Sparkles size={13}/> Ask SRM</button>
        <button className={tab === 'journey' ? 'active' : ''} onClick={() => setTab('journey')}><CheckCircle2 size={13}/> Next steps</button>
      </div>
      <AnimatePresence mode="wait">
        {tab === 'finder' && <motion.div key="finder" className="prototype-content" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}}>
          <span className="eyebrow">DISCOVER YOUR OPTIONS</span><h3>Find a programme<br/>that fits your goals.</h3><p className="prototype-muted">Explore the filters below. This demo uses illustrative results, not live admissions data.</p>
          <label>Study level<select value={level} onChange={e=>setLevel(e.target.value)}><option>Undergraduate</option><option>Postgraduate</option><option>Doctoral / Research</option></select></label>
          <label>Area of interest<select value={subject} onChange={e=>setSubject(e.target.value)}><option>Computer Science & IT</option><option>Engineering</option><option>Health Sciences</option><option>Management</option><option>Arts & Humanities</option></select></label>
          <label>Campus<select value={campus} onChange={e=>setCampus(e.target.value)}><option>Kattankulathur</option><option>Ramapuram</option><option>Vadapalani</option><option>Delhi-NCR</option></select></label>
          <div className="prototype-result"><div className="result-icon"><GraduationCap size={19}/></div><div><span className="result-label">SAMPLE DISCOVERY RESULT</span><b>{subject}</b><small>{level} · {campus}</small><p>Check programme availability, eligibility, fees, and dates on official SRM sources.</p></div><ArrowUpRight size={16}/></div>
          <button className="prototype-primary" onClick={() => setTab('journey')}>Build my next-step checklist <ArrowRight size={15}/></button>
        </motion.div>}
        {tab === 'assistant' && <motion.div key="assistant" className="prototype-content assistant-content" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}}>
          <span className="eyebrow">A LIGHTWEIGHT GUIDE</span><h3>Ask a question.<br/>Find a reliable next step.</h3><p className="prototype-muted">This is a scripted interaction demo, not a live AI assistant.</p>
          <div className="assistant-message"><span className="assistant-avatar"><Sparkles size={14}/></span><p>Hi! I can help you identify what to check about admissions, programmes, and scholarships.</p></div>
          <div className="suggested-questions">{['What should I check before applying?','Where can I find fee and scholarship details?','How do I check admission deadlines?'].map(q=><button key={q} className={assistantQuestion===q?'selected':''} onClick={()=>{setAssistantQuestion(q);setAnswerShown(false)}}>{q}<ArrowUpRight size={12}/></button>)}</div>
          <div className="assistant-input"><input value={assistantQuestion} onChange={e=>{setAssistantQuestion(e.target.value);setAnswerShown(false)}} aria-label="Ask a sample admissions question"/><button onClick={()=>setAnswerShown(true)} aria-label="Show sample answer"><ArrowRight size={16}/></button></div>
          {answerShown && <motion.div className="assistant-answer" initial={{opacity:0,y:5}} animate={{opacity:1,y:0}}><ShieldCheck size={15}/><p>{answer}<small>Prototype answer · Verify all details on official SRM pages.</small></p></motion.div>}
        </motion.div>}
        {tab === 'journey' && <motion.div key="journey" className="prototype-content" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}}>
          <span className="eyebrow">YOUR NEXT STEP</span><h3>A simple admissions<br/>checklist.</h3><p className="prototype-muted">A proposed guide to reduce the effort of finding important information.</p>
          {['Shortlist a programme and campus','Confirm eligibility and required documents','Review official fees and scholarships','Check the current application deadline','Open the official application portal'].map((item,i)=><label className="checklist-item" key={item}><input type="checkbox"/><span className="check-num">0{i+1}</span><span>{item}</span></label>)}
          <button className="prototype-primary" onClick={()=>setTab('finder')}><ArrowLeft size={15}/> Back to programme finder</button>
        </motion.div>}
      </AnimatePresence>
      <div className="prototype-footer"><span><span className="live-dot"></span> INTERACTIVE CONCEPT</span><span>Illustrative content · Not official</span></div>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [copied, setCopied] = useState(false);
  const filters = ['All', 'Web', 'AI / CV', 'UX / UI', 'Software'];
  const filtered = projects.filter(p => (activeFilter === 'All' || p.category === activeFilter) && `${p.title} ${p.summary} ${p.category}`.toLowerCase().includes(query.toLowerCase()));
  const openProject = (p) => { setSelectedProject(p); setMobileNav(false); };
  const closeProject = () => setSelectedProject(null);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(()=>setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  };

  return <div className="app">
    <div className="grain" aria-hidden="true"></div>
    <header className="nav">
      <Logo onClick={()=>setMobileNav(false)}/>
      <nav className="desktop-nav"><a href="#work">Work</a><a href="#srm">SRM concept</a><a href="#approach">Approach</a><a href="#about">About</a></nav>
      <a className="nav-contact" href={`mailto:${email}`}>Contact <ArrowUpRight size={14}/></a>
      <button className="mobile-toggle" aria-label="Open navigation" onClick={()=>setMobileNav(!mobileNav)}>{mobileNav?<X/>:<Menu/>}</button>
    </header>
    <AnimatePresence>{mobileNav && <motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{[['Work','#work'],['SRM concept','#srm'],['Approach','#approach'],['About','#about'],['Contact',`mailto:${email}`]].map(([label,href])=><a key={label} href={href} onClick={()=>setMobileNav(false)}>{label}<ArrowUpRight size={15}/></a>)}</motion.nav>}</AnimatePresence>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="availability" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}><span className="live-dot"></span> COMPUTER SCIENCE · PRODUCT THINKING</motion.div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}>Building technology<br/>for a <span>better tomorrow.</span></motion.h1>
          <motion.p className="hero-description" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.16}}>I’m Ben Joshua — a Computer Science student exploring software, AI, computer vision, and more thoughtful digital experiences.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.22}}><a href="#work" className="btn-primary">Explore my work <ArrowRight size={16}/></a><a href="#about" className="btn-quiet">A little about me <ArrowUpRight size={15}/></a></motion.div>
          <div className="hero-bottomline"><span>SRM · INTEGRATED M.TECH CSE</span><span>COIMBATORE, TAMIL NADU</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-glow"></div><div className="hero-grid"></div>
          <motion.div className="hero-orbit orbit1" animate={{rotate:360}} transition={{duration:48,repeat:Infinity,ease:'linear'}}></motion.div><motion.div className="hero-orbit orbit2" animate={{rotate:-360}} transition={{duration:60,repeat:Infinity,ease:'linear'}}></motion.div>
          <motion.div className="hero-core" animate={{y:[0,-9,0],rotate:[0,2,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}><span className="core-symbol">B<span>.</span></span><span className="core-caption">IDEAS → INTERFACES</span></motion.div>
          <motion.div className="float-note note-code" animate={{y:[0,-5,0]}} transition={{duration:4,repeat:Infinity}}><Code2 size={15}/><span>Build with purpose</span></motion.div>
          <motion.div className="float-note note-ai" animate={{y:[0,6,0]}} transition={{duration:5,repeat:Infinity}}><BrainCircuit size={15}/><span>Explore with curiosity</span></motion.div>
          <div className="art-index">01 / ALWAYS LEARNING</div>
        </div>
      </section>

      <section className="proof-strip"><div><span className="proof-symbol"><GraduationCap size={17}/></span><span><b>Integrated M.Tech</b><small>Computer Science & Engineering</small></span></div><div><span className="proof-symbol"><Layers3 size={17}/></span><span><b>Build & experiment</b><small>Web, software, and computer vision</small></span></div><div><span className="proof-symbol"><Lightbulb size={17}/></span><span><b>Curiosity-led</b><small>Learning through projects and iteration</small></span></div></section>

      <section className="work-section section-wrap" id="work">
        <div className="section-top"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Things I’m building<br/><span>and learning from.</span></h2></div><p>A transparent snapshot of academic work, technical explorations, and self-initiated concepts. Open a project to explore its context.</p></div>
        <div className="work-controls"><div className="filters">{filters.map(f=><button key={f} className={activeFilter===f?'active':''} onClick={()=>setActiveFilter(f)}>{f}</button>)}</div><label className="project-search"><Search size={15}/><input placeholder="Search projects" value={query} onChange={e=>setQuery(e.target.value)}/><SlidersHorizontal size={14}/></label></div>
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p,i)=>{const Icon=p.icon;return <motion.article layout key={p.id} className="project-card" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} transition={{duration:.3,delay:i*.04}} onClick={()=>openProject(p)} tabIndex="0" role="button" onKeyDown={e=>e.key==='Enter'&&openProject(p)} aria-label={`Open ${p.title} project`}>
              <ProjectVisual project={p} compact/><div className="project-info"><div className="project-meta"><Tag>{p.category}</Tag><span className="project-status">{p.status}</span></div><div className="project-title-row"><h3>{p.title}</h3><span className="round-arrow"><ArrowUpRight size={16}/></span></div><p>{p.summary}</p><div className="project-stack">{p.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div></div>
            </motion.article>})}
          </AnimatePresence>
        </motion.div>
        {filtered.length===0 && <div className="empty-state"><Search/><b>No projects match that search.</b><button onClick={()=>{setQuery('');setActiveFilter('All')}}>Clear filters</button></div>}
      </section>

      <section className="srm-section" id="srm"><div className="section-wrap srm-layout"><div className="srm-intro"><span className="eyebrow">02 / FEATURED UX CASE STUDY</span><h2>What if finding<br/>your next step felt<br/><span>effortless?</span></h2><p>A self-initiated concept for a clearer, more accessible SRM website experience. Explore the prototype on the right: it includes a programme finder, a scripted admissions-assistant demo, and a next-step checklist.</p><div className="srm-benefits"><div><CheckCircle2 size={16}/><span>Clearer discovery</span></div><div><Smartphone size={16}/><span>Designed for mobile</span></div><div><Accessibility size={16}/><span>Accessibility-minded</span></div></div><div className="srm-disclaimer"><ShieldCheck size={16}/><span>Independent concept only. Not an official SRM product. Example programme results and assistant responses are illustrative, not live admissions data.</span></div></div><div className="prototype-column"><div className="prototype-heading"><span>LIVE INTERACTION</span><span><span className="live-dot"></span> TRY IT</span></div><SRMPrototype/></div></div></section>

      <section className="approach-section section-wrap" id="approach"><div className="section-top"><div><span className="eyebrow">03 / MY APPROACH</span><h2>Useful first.<br/><span>Beautiful with purpose.</span></h2></div><p>I’m learning to connect interface decisions to actual user needs, constraints, and measurable outcomes.</p></div><div className="approach-grid">{[{n:'01',icon:Search,title:'Find the friction',body:'Understand the task people came to complete before changing the interface.'},{n:'02',icon:Layers3,title:'Make the path clear',body:'Use plain language, visible hierarchy, and a small number of meaningful choices.'},{n:'03',icon:Accessibility,title:'Design for real conditions',body:'Think about small screens, slow networks, accessibility, and different levels of confidence.'},{n:'04',icon:Zap,title:'Test the outcome',body:'Validate assumptions with people and evidence before scaling a solution.'}].map(item=>{const Icon=item.icon;return <motion.article className="approach-card" key={item.n} whileHover={{y:-5}}><span className="approach-icon"><Icon size={19}/></span><span className="approach-num">{item.n}</span><h3>{item.title}</h3><p>{item.body}</p></motion.article>})}</div></section>

      <section className="about-section" id="about"><div className="section-wrap about-layout"><div className="about-graphic"><div className="about-monogram">BJ<span>.</span></div><span className="about-graphic-label">STUDENT · BUILDER · EXPLORER</span><div className="about-graphic-orbit"></div></div><div className="about-copy"><span className="eyebrow">04 / BEHIND THE SCREEN</span><h2>Curious about code.<br/><span>Focused on people.</span></h2><p>I’m studying Integrated M.Tech Computer Science and Engineering at SRM. My interests sit where software, AI, computer vision, and real-world problems meet.</p><p>I’ve explored web application development, Java desktop applications, and pose detection with MediaPipe. I’m continuing to build my skills and want my projects to show both what I can implement and how I think about the people using it.</p><div className="about-tags"><Tag>Software development</Tag><Tag>AI / Computer Vision</Tag><Tag>UX thinking</Tag><Tag>Research curiosity</Tag></div><a className="text-arrow" href={`mailto:${email}`}>Let’s connect <ArrowUpRight size={16}/></a></div></div></section>

      <section className="faq-section section-wrap"><div className="section-top"><div><span className="eyebrow">05 / SRM UX BRIEF</span><h2>Nine questions.<br/><span>One user-first mindset.</span></h2></div><p>My initial answers are grounded in a plan to investigate, prototype, and validate—not assumptions presented as facts.</p></div><div className="faq-list">{answerContent.map(([num,title,body])=><details className="faq-item" key={num}><summary><span className="faq-num">{num}</span><b>{title}</b><ChevronDown size={17}/></summary><p>{body}</p></details>)}</div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-layout"><div><span className="eyebrow">06 / LET’S CONNECT</span><h2>Make the next<br/><span>thing meaningful.</span></h2><p>Open to learning, collaboration, and opportunities to build useful digital experiences.</p></div><div className="contact-panel"><span className="contact-eyebrow">SAY HELLO</span><h3>Ben Joshua</h3><p>Computer Science & Engineering</p><a href={`mailto:${email}`} className="email-link"><Mail size={16}/>{email}<ArrowUpRight size={15}/></a><button className="copy-button" onClick={copyEmail}>{copied?<CheckCircle2 size={15}/>:<Code2 size={15}/>} {copied?'Email copied':'Copy email address'}</button><div className="contact-note">No invented client work. No fake metrics. Just honest work, learning, and ideas.</div></div></div></section>
    </main>
    <footer className="footer"><Logo/><span>Designed & built as a personal portfolio · 2026</span><a href="#home">Back to top ↑</a></footer>

    <AnimatePresence>{selectedProject && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>e.target===e.currentTarget&&closeProject()}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} details`} initial={{opacity:0,y:20,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.98}} transition={{duration:.22}}><button className="modal-close" onClick={closeProject} aria-label="Close project"><X size={19}/></button><ProjectVisual project={selectedProject}/><div className="modal-content"><div className="project-meta"><Tag>{selectedProject.category}</Tag><span className="project-status">{selectedProject.status}</span></div><h2>{selectedProject.title}</h2><p className="modal-description">{selectedProject.description}</p><h3>What this includes</h3><ul>{selectedProject.features.map(f=><li key={f}><CheckCircle2 size={15}/>{f}</li>)}</ul><h3>Tools & areas</h3><div className="project-stack modal-stack">{selectedProject.stack.map(t=><span key={t}>{t}</span>)}</div><div className="modal-note"><CircleHelp size={16}/><span>{selectedProject.note}</span></div><button className="btn-primary modal-done" onClick={closeProject}>Back to portfolio <ArrowLeft size={15}/></button></div></motion.div></motion.div>}</AnimatePresence>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);

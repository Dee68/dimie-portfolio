import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MyBookyCaseStudy from './components/MyBookyCaseStudy'
import DBookShopCaseStudy from './components/DbookShopCaseStudy'
import { useDocumentTitle } from './hooks/useDocumentTitle'

function PortfolioHome() {
  useDocumentTitle('Dimie Egberipou | Software Developer')
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="flex min-h-screen items-center justify-center bg-white px-6 pt-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-px w-16 bg-slate-300 dark:bg-slate-700" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 dark:text-white">
            Dimie Egberipou
          </h1>

          <p className="mt-4 text-lg font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
            Software Developer
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Building practical full-stack applications and developing expertise in cybersecurity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              View My Projects
            </a>

            <a
              href="https://github.com/Dee68"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
                <PortfolioHome />
              </main>
            }
          />
          <Route path="/projects/d-bookshop" element={<DBookShopCaseStudy />} />
          <Route path="/projects/mybooky" element={<MyBookyCaseStudy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
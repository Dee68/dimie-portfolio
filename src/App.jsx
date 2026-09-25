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
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
            Dimie Egberipou
          </h1>

          <p className="mt-6 text-xl font-medium text-#45402F text-slate-700 dark:text-slate-300 sm:text-2xl">
            Computing Graduate | Software Developer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Building practical full-stack applications and developing
            expertise in cybersecurity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-[#8a8757] dark:bg-white dark:text-slate-950 dark:hover:bg-[#c3c183] dark:hover:text-slate-950"
            >
              View My Projects
            </a>

            <a
              href="https://github.com/Dee68"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 dark:border-slate-700 px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
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
          <Route path="/d-bookshop" element={<DBookShopCaseStudy />} />
          <Route path="/mybooky" element={<MyBookyCaseStudy />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
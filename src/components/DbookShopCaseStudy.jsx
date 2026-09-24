import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FiArrowLeft } from 'react-icons/fi'

function DBookShopCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              <FiArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <a
                href="https://github.com/Dee68/D_BookShop"
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900 sm:block"
              >
                GitHub
              </a>
            </div>

          </div>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Featured Project
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              D-BookShop
            </h1>

            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 sm:text-2xl">
              Full-Stack E-Commerce Platform
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              A full-stack online bookstore application built with React,
              Node.js, Express and PostgreSQL. The application provides
              customer shopping functionality alongside an administrative
              system for managing products, categories, users, orders and
              inventory.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'React',
                'Node.js',
                'Express',
                'PostgreSQL',
                'JWT',
                'Tailwind CSS',
                'REST API',
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://d-book-shop.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Live Demo
                <span className="ml-2">↗</span>
              </a>

              <a
                href="https://github.com/Dee68/D_BookShop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
              >
                View on GitHub
                <span className="ml-2">↗</span>
              </a>

            </div>
            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-2xl dark:border-slate-800">
                <img
                    src="/projects/d-bookshop/d-bookshop-home.png"
                    alt="D-BookShop storefront showing the homepage, search, category filtering and book catalogue"
                    className="w-full"
                />
            </div>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Building a complete e-commerce workflow
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">

                <p>
                  D-BookShop was developed as a full-stack e-commerce
                  application covering the customer journey from browsing
                  products through shopping cart management, checkout and
                  order tracking.
                </p>

                <p>
                  The application also provides an administrative interface
                  for managing products, categories, users, orders and
                  inventory, with role-based access controlling protected
                  functionality.
                </p>

                <p>
                  The project evolved from an initial SQLite-based
                  implementation to PostgreSQL and was subsequently deployed
                  with the frontend hosted on Vercel and the backend and
                  database hosted through Railway.
                </p>

              </div>

            </div>

            <aside className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="font-semibold">
                Project context
              </h3>

              <dl className="mt-5 space-y-4 text-sm">

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Project type
                  </dt>
                  <dd className="mt-1 font-medium">
                    Full-Stack Web Application
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Frontend
                  </dt>
                  <dd className="mt-1 font-medium">
                    React + Vite
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Backend
                  </dt>
                  <dd className="mt-1 font-medium">
                    Node.js + Express
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Database
                  </dt>
                  <dd className="mt-1 font-medium">
                    PostgreSQL
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Deployment
                  </dt>
                  <dd className="mt-1 font-medium">
                    Vercel + Railway
                  </dd>
                </div>

              </dl>

            </aside>

          </div>

        </div>
      </section>

    </main>
  )
}

export default DBookShopCaseStudy
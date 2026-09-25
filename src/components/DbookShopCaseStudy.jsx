import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import Footer from './Footer'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function DBookShopCaseStudy() {
  useDocumentTitle('D-BookShop Case Study | Dimie Egberipou')
  return (
    <>
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

      {/* Hero */}
      <section id="home" className="border-b border-slate-200 dark:border-slate-800">

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
         <div className="h-0.5 w-full bg-[#c3c183]" />
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

           <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#8a8757] dark:text-slate-300 dark:hover:text-[#c3c183]"
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
              href="https://dbookshop.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Live Demo
              <FiExternalLink className="ml-2" size={16} />
            </a>

            <a
              href="https://github.com/Dee68/D_BookShop"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
            >
              View on GitHub
              <FiExternalLink className="ml-2" size={16} />
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
      {/* Key Features */}
      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Features
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                A complete e-commerce workflow
              </h2>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                D-BookShop covers the main workflows expected from a modern online
                bookstore, from customer registration and product discovery through
                ordering, inventory management and administration.
              </p>
            </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Customer Authentication
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Customer registration and login with JWT-based authentication,
                password hashing and email verification.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Product Discovery
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Customers can browse the catalogue, search for books, filter by
                category and view detailed product information and images.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Shopping & Checkout
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                A complete shopping-cart and checkout workflow allows customers to
                manage quantities, place orders and review their previous orders.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Order Management
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Orders are persisted in PostgreSQL with status management,
                transactional processing and stock restoration when orders are
                cancelled.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Admin Dashboard
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Administrators can manage products, categories, users, orders and
                inventory through protected administrative interfaces.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Reporting & Cloud Services
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Inventory reports can be generated as PDF or TXT files, while
                product images are stored using Cloudinary and email services are
                handled through Resend.
              </p>
            </article>
          </div>
            {/* Supporting screenshot */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
    <img
      src="/projects/d-bookshop/d-bookshop-product.png"
      alt="D-BookShop product details page"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Product details page
    </figcaption>
  </figure>

  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
    <img
      src="/projects/d-bookshop/d-bookshop-cart.png"
      alt="D-BookShop customer cart page"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Shopping cart
    </figcaption>
  </figure>

  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
    <img
      src="/projects/d-bookshop/d-bookshop-checkout.png"
      alt="D-BookShop customer checkout page"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Checkout
    </figcaption>
  </figure>

  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
    <img
      src="/projects/d-bookshop/d-bookshop-customer-order.png"
      alt="D-BookShop customer order page"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Order history
    </figcaption>
  </figure>

  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
    <img
      src="/projects/d-bookshop/d-bookshop-admin.png"
      alt="D-BookShop admin dashboard"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Admin dashboard
    </figcaption>
  </figure>

  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
    <img
      src="/projects/d-bookshop/d-bookshop-stock.png"
      alt="D-BookShop admin inventory management"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Inventory management
    </figcaption>
  </figure>

  <figure className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800 md:col-span-2">
    <img
      src="/projects/d-bookshop/d-bookshop-report.png"
      alt="D-BookShop admin inventory report"
      className="w-full"
      loading="lazy"
    />
    <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      Inventory report generation
    </figcaption>
  </figure>
</div>

        </div>
      </section>
      {/* System architecture */}
      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              System Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A separated full-stack architecture
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              D-BookShop uses a client-server architecture with a React frontend,
              an Express REST API and a PostgreSQL database. The separation between
              the presentation, API and data layers keeps the application modular
              and makes the backend independently deployable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Frontend
              </p>

              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                React + Vite
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Provides the customer storefront and administrative interfaces,
                with React Router, Context API and Tailwind CSS supporting the
                application experience.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Backend
              </p>

              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                Node.js + Express
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Exposes REST API endpoints for authentication, products, categories,
                orders, users, inventory and administrative operations.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Data Layer
              </p>

              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                PostgreSQL
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Stores users, products, categories, orders and related application
                data using relational database structures and transactional
                operations.
              </p>
            </article>

          </div>

          {/* Architecture diagram */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="grid items-center gap-4 md:grid-cols-5">

              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Client
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  React / Vite
                </p>
              </div>

              <div className="hidden items-center justify-center text-slate-400 md:flex">
                <FiArrowRight size={20} />
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  API
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  Node / Express
                </p>
              </div>

              <div className="hidden items-center justify-center text-slate-400 md:flex">
                <FiArrowRight size={20} />
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Database
                </p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  PostgreSQL
                </p>
              </div>

            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                'JWT Authentication',
                'Cloudinary',
                'Resend',
                'REST API',
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* Authentication & security */}
      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Authentication & Security
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Secure access and role-based authorization
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Authentication and authorization were implemented at the API level,
              with protected routes controlling access to customer and
              administrative functionality.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                JWT Authentication
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Users authenticate through the REST API and receive a JSON Web Token
                that is used to authenticate subsequent protected requests.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Password Security
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Passwords are hashed with bcrypt rather than being stored as
                plaintext, providing a safer approach to credential storage.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Role-Based Authorization
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Customer and administrator permissions are separated so that
                administrative operations can only be accessed by authorized users.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Email Verification
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Account verification is handled through email, with verification
                tokens used to confirm newly registered accounts.
              </p>
            </article>

          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Protected API workflow
            </h3>
              <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-9 md:items-center">
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">01</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Login</p>
              </li>
              <li className="hidden items-center justify-center text-slate-400 md:flex" aria-hidden="true">
                <FiArrowRight size={20} />
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">02</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">JWT issued</p>
              </li>
              <li className="hidden items-center justify-center text-slate-400 md:flex" aria-hidden="true">
                <FiArrowRight size={20} />
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">03</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Protected request</p>
              </li>
              <li className="hidden items-center justify-center text-slate-400 md:flex" aria-hidden="true">
                <FiArrowRight size={20} />
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">04</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Authorization check</p>
              </li>
              <li className="hidden items-center justify-center text-slate-400 md:flex" aria-hidden="true">
                <FiArrowRight size={20} />
              </li>
              <li className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">05</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">API response</p>
              </li>
            </ol>
           

            
          </div>

        </div>
      </section>
      {/* API & Business Rules */}
      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              API & Business Rules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A documented REST API with enforced invariants
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              The backend exposes a REST API organised into six resource groups.
              The complete collection is available as a Postman file in the
              repository, covering authentication, product management, category
              management, orders, users and reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                group: 'Authentication',
                endpoints: ['POST /register', 'POST /login', 'JWT-issued sessions'],
              },
              {
                group: 'Products',
                endpoints: ['GET /products', 'GET /products/:id', 'POST /products', 'PUT /products/:id', 'DELETE /products/:id'],
              },
              {
                group: 'Categories',
                endpoints: ['GET /categories', 'GET /categories/:id', 'POST /categories', 'PUT /categories/:id', 'DELETE /categories/:id'],
              },
              {
                group: 'Orders',
                endpoints: ['POST /orders (transactional)', 'GET /orders/:user_id', 'PUT /orders/:id/cancel', 'DELETE /orders/:id'],
              },
              {
                group: 'Users',
                endpoints: ['GET /users', 'GET /users/:id', 'DELETE /users/:id'],
              },
              {
                group: 'Reporting',
                endpoints: ['PDF inventory report', 'TXT inventory report'],
              },
            ].map((resource) => (
              <article
                key={resource.group}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {resource.group}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {resource.endpoints.map((endpoint) => (
                    <li
                      key={endpoint}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs dark:border-slate-700 dark:bg-slate-950"
                    >
                      {endpoint}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Business rules enforced at the API layer
            </h3>

            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                'Stock is decremented when an order is created and restored if the order is cancelled.',
                'Order creation runs inside a database transaction, so a failure at any step rolls the whole operation back.',
                'Product images are stored in Cloudinary and linked to products through a dedicated product_images table, allowing multiple images per product.',
                'Role-based middleware gates every administrative endpoint, so customer tokens cannot reach admin operations.',
              ].map((rule) => (
                <li
                  key={rule}
                  className="flex gap-3 leading-7 text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      {/* Challenges & Solutions */}
      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
          <div className="mx-auto max-w-6xl px-6">

              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Challenges & Solutions
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Problems worth solving carefully
                </h2>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                  Three problems during development required rethinking how the
                  application handles consistency and trust. They are documented
                  here because the reasoning matters more than the code.
                </p>
              </div>

              <div className="mt-12 space-y-8">

                    {/* Entry 1 — Cancelled orders */}
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Cancelled orders were leaving inventory in an inconsistent state
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        When an order was cancelled, the stock restoration and the order
                        status update were two separate database operations. If the second
                        failed — a network blip, a constraint violation — the inventory
                        would be restored but the order would still show as active, or
                        vice versa. The result was a slow drift between what the database
                        said was in stock and what it actually was.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The fix was to wrap both operations inside a single database
                        transaction, so either both succeed or neither does. Rolling back
                        on failure means the system can't end up in the inconsistent
                        intermediate state at all.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The lesson was that "two writes that must agree" is a signal that
                        the two writes belong in the same transaction — not as separate
                        requests that happen to run one after another.
                      </p>
                    </article>

                    {/* Entry 2 — Product images */}
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Updated product images weren't appearing after refresh
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        When an admin updated a product image through the dashboard, the
                        change was saved, but refreshing the product page still showed the
                        old image. The upload was succeeding — the file was in Cloudinary
                        and the database had been written to — but the storefront didn't
                        reflect it.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The cause was in how product images were stored. Each product can
                        have multiple images, so they live in a separate{" "}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                          product_images
                        </code>{" "}
                        table. Updating an image was inserting a new row without removing
                        the old one, and the read query returned images in insertion
                        order. The storefront was faithfully rendering the first image in
                        the list — which was the one the admin had just replaced.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The fix was to rewrite the write path as a proper replace
                        operation: delete the existing image rows and insert the new ones
                        inside a single database transaction, so either the whole
                        replacement succeeds or the original images are restored. On the
                        read side, the query was made explicit about which image is
                        treated as the primary one.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The broader lesson was that "multiple writes that must agree" is a
                        signal that those writes belong in the same transaction. The same
                        pattern later shaped how order cancellation restores stock — a
                        different feature, the same underlying problem.
                      </p>
                    </article>

                    {/* Entry 3 — Admin authorization */}
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Authorization has to be enforced on the server, not the interface
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The admin dashboard is a separate area of the application with its
                        own routes, navigation and controls. The straightforward approach
                        is to hide those controls from users who aren't administrators —
                        and that's necessary, but it isn't sufficient. Any user can open
                        the browser's developer tools, read the API endpoint the dashboard
                        calls, and send the same request directly. The UI is not a
                        security boundary.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        D-BookShop enforces authorization in two places for two different
                        reasons. On the frontend, the admin routes are guarded so that
                        non-administrators never see controls they can't use — a UX
                        concern, not a security one. On the backend, every administrative
                        endpoint sits behind middleware that reads the JWT, checks the
                        role claim, and rejects the request if the user isn't an admin.
                        The backend never trusts the frontend's decision about who the
                        user is; it re-derives that from the token on every request.
                      </p>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The same principle applies to authentication more broadly. A
                        user's identity is established by the token on the server, not by
                        the state of the frontend at the moment the request was made. The
                        frontend can decide what to show; only the server can decide what
                        to allow.
                      </p>
                    </article>

              </div>
          </div>
      </section>
      {/* Status & Limitations */}
      <section className="border-t border-slate-200 py-20 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Status & Limitations
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What this project is — and what it isn't
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              D-BookShop is a portfolio project, not a production store. It
              demonstrates a complete e-commerce workflow from browsing through
              checkout, alongside an administrative interface for managing
              products, orders and inventory. Several pieces are deliberately
              simplified.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                What's implemented
              </h3>

              <ul className="mt-4 space-y-3 leading-7 text-slate-600 dark:text-slate-400">
                {[
                  'Full customer flow: registration, login, browse, search, filter, cart, checkout, order history.',
                  'Admin flow: product and category CRUD, order management, inventory tracking, report generation.',
                  'JWT authentication with hashed passwords and role-based authorization.',
                  'Separated frontend and backend deployed to Vercel and Railway respectively.',
                  'Postman collection covering every API endpoint.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                What's deliberately out of scope
              </h3>

              <ul className="mt-4 space-y-3 leading-7 text-slate-600 dark:text-slate-400">
                {[
                  'No real payment processing — checkout simulates success and no card data is handled.',
                  'No automated email delivery for order confirmations.',
                  'No automated test suite; the API is exercised manually via Postman.',
                  'No rate limiting or account lockout on authentication endpoints.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-8 max-w-3xl text-slate-600 dark:text-slate-400">
            Naming these limitations is deliberate — knowing what a project is not
            is part of knowing what it is.
          </p>
        </div>
      </section>        
    </main>
    <Footer />
    </>
  )
}

export default DBookShopCaseStudy
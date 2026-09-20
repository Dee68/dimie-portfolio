function MyBookyCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <a
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            ← Back to Projects
          </a>

          <div className="mt-10 max-w-4xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Featured Project
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              MyBooky
            </h1>

            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 sm:text-2xl">
              E-Commerce Bookstore
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              A full-stack e-commerce bookstore developed as part of my BSc
              (Hons) in Computing in Contemporary Software Development.
              The project explores web application architecture, database
              integration, authentication, authorisation, shopping cart
              functionality, order management and online payments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'ASP.NET Core MVC',
                'C#',
                'Entity Framework Core',
                'SQL Server',
                'ASP.NET Identity',
                'Stripe',
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
                href="https://github.com/Dee68/MyBooky"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View on GitHub
                <span className="ml-2">↗</span>
              </a>

              <span className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                Previously deployed to Microsoft Azure · Demo offline
              </span>
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
                  MyBooky was developed as an e-commerce bookstore application
                  covering the complete customer journey from browsing and
                  searching for books through to shopping cart management,
                  checkout, payment and order tracking.
                </p>

                <p>
                  The application also includes administrative functionality
                  for managing books, categories, companies, users and orders.
                  Role-based access controls determine which functionality is
                  available to different users.
                </p>

                <p>
                  The project evolved from an initial MVC implementation into
                  an N-tier architecture to improve separation of concerns,
                  organisation and maintainability.
                </p>
              </div>
            </div>

            <aside className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-semibold">Project context</h3>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Project type
                  </dt>
                  <dd className="mt-1 font-medium">
                    Academic / Full-Stack Web Application
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Degree
                  </dt>
                  <dd className="mt-1 font-medium">
                    BSc (Hons) Computing in Contemporary Software Development
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Architecture
                  </dt>
                  <dd className="mt-1 font-medium">
                    ASP.NET Core MVC / N-tier
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Deployment
                  </dt>
                  <dd className="mt-1 font-medium">
                    Previously deployed to Microsoft Azure
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Functionality
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Key features
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Book Catalogue',
                text: 'Browse and search for books using information such as title, author, category and ISBN.',
              },
              {
                title: 'User Accounts',
                text: 'Registration, login and account management using ASP.NET Core Identity.',
              },
              {
                title: 'Role-Based Access',
                text: 'Separate functionality and access levels for Admin, Customer, Company and Employee roles.',
              },
              {
                title: 'Shopping Cart',
                text: 'Add books to a cart, adjust quantities, remove items and review the order before checkout.',
              },
              {
                title: 'Online Payment',
                text: 'Integrated Stripe into the order workflow for payment processing.',
              },
              {
                title: 'Order Management',
                text: 'Customers can view orders while authorised users can manage order processing, shipping and tracking.',
              },
              {
                title: 'Book Management',
                text: 'Administrative CRUD functionality for books, categories and related catalogue data.',
              },
              {
                title: 'Data Validation',
                text: 'Validation rules help prevent invalid data from being submitted and stored.',
              },
              {
                title: 'Responsive Interface',
                text: 'The application was designed to provide a usable interface across different browsers and devices.',
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="font-semibold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Architecture
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From MVC to N-tier architecture
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              The application was structured into separate projects to improve
              organisation and separation of concerns. The solution contains
              the main MVC application together with dedicated model,
              data-access and utility layers.
            </p>
          </div>

          <figure className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
            <img
              src="/projects/mybooky/n-tier-architecture.png"
              alt="MyBooky N-tier architecture diagram"
              className="w-full"
            />

            <figcaption className="border-t border-slate-200 px-5 py-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              N-tier architecture used to separate models, data access,
              utilities and the main MVC application.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Authentication */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Security & Access
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Authentication and authorisation
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                ASP.NET Core Identity was customised to support the application's
                user model and role-based access requirements.
              </p>

              <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-400">
                <li>• Customer registration and login</li>
                <li>• Role-based access control</li>
                <li>• Admin, Customer, Company and Employee roles</li>
                <li>• Custom registration fields and validation</li>
                <li>• Protected administrative functionality</li>
              </ul>
            </div>

            <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
              <img
                src="/projects/mybooky/role-based-views.png"
                alt="MyBooky role-based views"
                className="w-full"
              />

              <figcaption className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                Role-based functionality implemented using ASP.NET Core
                Identity.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Customer Workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From book discovery to order
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            The main customer workflow takes the user from discovering a book
            through to payment and order tracking.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: '01 — Browse & Search',
                image: '/projects/mybooky/home-page.png',
              },
              {
                title: '02 — View Book Details',
                image: '/projects/mybooky/detail-page.png',
              },
              {
                title: '03 — Shopping Cart',
                image: '/projects/mybooky/shopping-cart.png',
              },
              {
                title: '04 — Order Summary',
                image: '/projects/mybooky/order-summary.png',
              },
              {
                title: '05 — Stripe Payment',
                image: '/projects/mybooky/stripe-payment.png',
              },
              {
                title: '06 — Order Confirmation',
                image: '/projects/mybooky/order-success.png',
              },
            ].map((step) => (
              <figure
                key={step.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full"
                  loading="lazy"
                />

                <figcaption className="px-5 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {step.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <figure className="order-2 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:order-1">
              <img
                src="/projects/mybooky/admin-book-list.png"
                alt="MyBooky administrator book management"
                className="w-full"
              />

              <figcaption className="px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                Administrative book management interface.
              </figcaption>
            </figure>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Administration
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Managing the bookstore
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Administrative functionality provides authorised users with
                tools for maintaining the bookstore catalogue and managing
                operational data.
              </p>

              <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-400">
                <li>• Create, update and delete books</li>
                <li>• Create and update categories</li>
                <li>• Manage companies</li>
                <li>• Manage users and roles</li>
                <li>• Manage customer orders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Model */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Data Design
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Domain and database modelling
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              The system models users, books, categories, product images,
              shopping carts and orders. Entity Framework Core was used to
              map the application's models to the SQL Server database.
            </p>
          </div>

          <figure className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
            <img
              src="/projects/mybooky/class-diagram.jpg"
              alt="MyBooky class diagram"
              className="w-full"
            />

            <figcaption className="border-t border-slate-200 px-5 py-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              Class diagram showing the principal application entities and
              their relationships.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Testing */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Testing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Testing and validation
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Testing covered user management, book management, ordering,
              validation, database reliability, authentication and
              authorisation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-semibold">Functional Testing</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                Manual functional testing was used to validate the system
                against the identified requirements.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-semibold">Unit Testing</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                xUnit and Moq were used for unit testing and partial
                integration testing.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-semibold">Requirement Coverage</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                The documented test cases covered approximately 77.3% of the
                identified requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Development Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Challenges and lessons learned
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article>
              <h3 className="text-xl font-semibold">
                Integrating ASP.NET Core Identity
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                One of the major challenges was integrating authentication and
                authorisation with the existing user model. The project
                ultimately required configuring the application database
                context to work with Identity and adapting the user model to
                the Identity model.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold">
                Improving separation of concerns
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                The initial implementation was subsequently restructured into
                an N-tier architecture. This redevelopment was used to improve
                modularity and separation of concerns.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold">
                Working within project constraints
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                Time constraints affected the planned testing strategy.
                Instead of implementing the originally planned Selenium
                automation, the project used xUnit, Moq and manual functional
                testing.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold">
                What I learned
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                The project strengthened my understanding of ASP.NET Core MVC,
                authentication and authorisation, database design, software
                architecture, testing and the importance of adapting a design
                when implementation challenges emerge.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Deployment
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Previously deployed to Microsoft Azure
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              MyBooky was previously deployed to Microsoft Azure as part of
              the project. The original deployment is no longer active, so
              this portfolio presents the application's functionality through
              screenshots, architecture documentation and the source code.
            </p>

            <div className="mt-8">
              <a
                href="https://github.com/Dee68/MyBooky"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center font-medium text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
              >
                View the source code on GitHub
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Interested in the implementation?
            </h2>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Explore the source code and project structure on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Dee68/MyBooky"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            GitHub Repository
            <span className="ml-2">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default MyBookyCaseStudy
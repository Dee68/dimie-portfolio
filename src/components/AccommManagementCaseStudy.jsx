import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import Footer from './Footer'
import { useDocumentTitle } from '../hooks/useDocumentTitle'


function AccommManagementCaseStudy(){
    useDocumentTitle('Accommodation Center Case Study | Dimie Egberipou');
    return (
        <>
         <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

            {/* Hero */}
            <section id="home" className="border-b border-slate-200 dark:border-slate-800">

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
                            href="https://github.com/Dee68/accom_mngt"
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
                            Accommodation Center
                            </h1>

                            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 sm:text-2xl">
                            Property Management Platform
                            </p>

                            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                            A full-stack platform for managing residential buildings: tenants are
                            assigned to apartments, maintenance issues are tracked from report to
                            resolution, and a community forum supports discussion between residents.
                            Built with Django, Next.js, and PostgreSQL, containerised with Docker and
                            nginx, with Celery handling background tasks and transactional email.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                'Django',
                                'Next.js',
                                'TypeScript',
                                'PostgreSQL',
                                'Docker',
                                'Celery',
                                'Redis',
                                'NGINX',
                                'Tailwind CSS',
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
                                href="https://github.com/Dee68/accomm_mngt"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                View on GitHub
                                <FiExternalLink className="ml-2" size={16} />
                            </a>

                            <span className="inline-flex items-center rounded-lg border border-slate-200 px-5 py-3 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                Runs locally · Not currently deployed
                            </span>
                            </div>

                            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-2xl dark:border-slate-800">
                            <img
                                src="/projects/accom_management/accom_center.png"
                                alt="Accommodation Center home feed showing recent posts, top posts, and popular tags"
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
                        A platform for managing residential buildings
                        </h2>

                        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
                        <p>
                            Accommodation Center is a full-stack platform for managing
                            residential buildings. Tenants are assigned to apartments, issues
                            are reported against those apartments and routed to the appropriate
                            tradesperson, and a community forum lets residents discuss work,
                            share recommendations, and coordinate with each other. User
                            reputation is tracked and moderated through a report system, and
                            profiles carry occupation, location, and rating information.
                        </p>

                        <p>
                            The project started from an instructional course on building a
                            real-estate platform with Django and Next.js, which provided the
                            initial architecture. It has since been extended with
                            domain-specific features — issue lifecycle, reputation system,
                            popular tags — a cookie-based authentication redesign, a full
                            transactional email workflow, and background task processing with
                            Celery. The result is a production-shaped application rather than a
                            tutorial follow-along.
                        </p>

                        <p>
                            The stack is deliberately familiar to teams that build real
                            products. Django 5 with Django REST Framework on the backend,
                            Next.js and TypeScript on the frontend, PostgreSQL for storage.
                            Authentication is JWT-based but stored in HttpOnly cookies rather
                            than localStorage. Everything runs in Docker, with nginx as the
                            reverse proxy, Celery and Redis for background work, Flower for
                            task monitoring, and Mailpit for local email capture.
                        </p>

                        <p>
                            The application currently runs in a development environment and is
                            not deployed publicly. This case study documents the architecture,
                            the domain modelling, and the design decisions behind it.
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
                            Full-Stack Web Application
                            </dd>
                        </div>

                        <div>
                            <dt className="text-slate-500 dark:text-slate-400">
                            Frontend
                            </dt>
                            <dd className="mt-1 font-medium">
                            Next.js + TypeScript
                            </dd>
                        </div>

                        <div>
                            <dt className="text-slate-500 dark:text-slate-400">
                            Backend
                            </dt>
                            <dd className="mt-1 font-medium">
                            Django + DRF
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
                            Background tasks
                            </dt>
                            <dd className="mt-1 font-medium">
                            Celery + Redis
                            </dd>
                        </div>

                        <div>
                            <dt className="text-slate-500 dark:text-slate-400">
                            Infrastructure
                            </dt>
                            <dd className="mt-1 font-medium">
                            Docker + nginx
                            </dd>
                        </div>

                        <div>
                            <dt className="text-slate-500 dark:text-slate-400">
                            Status
                            </dt>
                            <dd className="mt-1 font-medium">
                            Runs locally
                            </dd>
                        </div>
                        </dl>
                    </aside>
                    </div>
                </div>
            </section>
            {/* Domain model */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-6">

                <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Domain Model
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Eight Django apps, one coherent product
                </h2>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                    The backend is organised into eight Django applications, each
                    responsible for a coherent slice of the domain. This is the shape of
                    the data model before any discussion of views or endpoints.
                </p>
                </div>

                {/* App grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                    app: 'users',
                    description:
                        'Custom user model with email as the login field, UUID public IDs, and no role field. Permissions derive from the profile, so a user\'s abilities change when their profile changes.',
                    },
                    {
                    app: 'profiles',
                    description:
                        'One profile per user: occupation (one of eight trades), country, city, biography, reputation, and a Cloudinary-hosted avatar. Created automatically via a post_save signal.',
                    },
                    {
                    app: 'apartments',
                    description:
                        'Physical units in buildings. Each apartment has a unit number, building name, floor, and an optional tenant. The tenant FK uses on_delete=SET_NULL so deleting a user preserves the apartment record.',
                    },
                    {
                    app: 'issues',
                    description:
                        'Maintenance tickets filed against an apartment. Status (reported / in progress / resolved), priority, reporter, and assignee. Assignment changes trigger a notification email.',
                    },
                    {
                    app: 'posts',
                    description:
                        'Community forum threads with tags, upvotes, downvotes, bookmarks, and replies. Post views are tracked across models using a generic ContentView relation.',
                    },
                    {
                    app: 'ratings',
                    description:
                        'One user\'s rating of another, one to five, with an optional comment. Two FKs to the user model with different related_names, so average ratings and giving histories are queryable independently.',
                    },
                    {
                    app: 'reports',
                    description:
                        'Moderation reports. A profile is flagged as banned at five reports, and reputation degrades by twenty points per report. A nightly Celery task recalculates scores.',
                    },
                    {
                    app: 'common',
                    description:
                        'Shared abstractions: TimeStampedModel (dual-key base with UUID public IDs), GenericJSONRenderer (response envelope), ContentView (view tracking), and CookieAuthentication.',
                    },
                ].map((item) => (
                    <article
                    key={item.app}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                    >
                    <h3 className="font-mono text-lg font-semibold text-slate-900 dark:text-white">
                        {item.app}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {item.description}
                    </p>
                    </article>
                ))}
                </div>

                {/* Three patterns */}
                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Dual-key model base
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Every model inherits from an abstract{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        TimeStampedModel
                    </code>{' '}
                    that provides a{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        pkid
                    </code>{' '}
                    (BigAutoField, internal) and an{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        id
                    </code>{' '}
                    (UUIDField, public). Sequential IDs never appear in URLs.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Consistent response envelope
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    A custom{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        GenericJSONRenderer
                    </code>{' '}
                    wraps every success response as{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        {'{ status_code, object_label, data }'}
                    </code>
                    . The frontend knows the shape of every response before parsing it.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Business rules in the model layer
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Invariants live in models and serializers, not views. The rule that
                    only tenants or staff can create posts is enforced in{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        Post.save()
                    </code>
                    . The rule holds whether the write comes from a view, the admin, a
                    management command, or a test.
                    </p>
                </article>
                </div>

                {/* Screenshot */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
                <img
                    src="/projects/accom_management/post_detail_count.png"
                    alt="A community forum post with its author, view count, vote counts, tags, and a reply from another user"
                    className="w-full"
                    loading="lazy"
                />
                <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    A community forum post with its replies, votes, view count, and tags — all driven by the domain model described above.
                </p>
                </div>

            </div>
            </section>
            {/* Authentication & Security */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-6">

                <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Authentication & Security
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    JWTs in HttpOnly cookies, not localStorage
                </h2>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                    Accommodation Center uses JWT-based authentication, but with a
                    deliberate departure from the pattern most Django and DRF tutorials
                    teach. Tokens are stored in HttpOnly cookies rather than in{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                    localStorage
                    </code>
                    . The reasoning matters more than the implementation.
                </p>
                </div>

                {/* The tradeoff */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2">

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    The problem with localStorage
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    The standard approach is to return a token in the response body,
                    store it in <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">localStorage</code>, and attach
                    it to subsequent requests via the{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">Authorization</code> header. It works,
                    and it is simple. But{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">localStorage</code> is accessible to
                    any JavaScript on the page — which means a single XSS vulnerability
                    is enough to exfiltrate the token and impersonate the user for as
                    long as it is valid.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Why HttpOnly cookies close the gap
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    HttpOnly cookies are not readable by JavaScript. The browser sends
                    them with matching requests, but no script on the page can read
                    them. An XSS attack can still make requests on the user's behalf
                    while they are on the site, but it cannot steal the token and use
                    it from somewhere else. The attack window shrinks from "as long as
                    the token is valid" to "while the user is on the page."
                    </p>
                </article>
                </div>

                {/* The tradeoff continued — CSRF */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    The tradeoff: CSRF
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Cookies are subject to CSRF, which{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">localStorage</code> is not. The project
                    covers this with two mechanisms: Django's{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">CsrfViewMiddleware</code>, which
                    validates a token on every write request; and{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">COOKIE_SAMESITE = "Lax"</code>, which
                    prevents cross-site POST requests from carrying the cookie at all.
                    Together they cover the gap that cookies introduce.
                </p>
                </div>

                {/* The logged_in flag */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2">

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    The logged_in flag
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    The login view issues three cookies instead of two. The{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">access</code> and{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">refresh</code> cookies are
                    HttpOnly, secure, and short-lived. The third —{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">logged_in</code> — is deliberately
                    not HttpOnly, and contains no sensitive data. It exists so that
                    JavaScript can determine whether the user is authenticated without
                    being able to read the actual tokens.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    One API, every client
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    A custom{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">CookieAuthentication</code> class
                    extends DRF's{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">JWTAuthentication</code> and checks
                    the request header first, then the cookie. Browser clients send
                    cookies; API clients (Postman, mobile apps, automated tests) send
                    bearer tokens. Both work through the same view code, with no second
                    auth path to maintain.
                    </p>
                </article>
                </div>

                {/* Google OAuth */}
                <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Google OAuth
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    Sign-in with Google is implemented using{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">social-auth-app-django</code> and
                    Djoser's social authentication endpoint. The flow reuses the same
                    cookie mechanism — after Google authenticates the user, the provider
                    view issues JWTs and passes them through the same{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">set_auth_cookies</code> helper. A
                    custom pipeline step fetches the user's Google profile picture
                    server-side, uploads it to Cloudinary, and stores it as the profile
                    avatar — the same field that holds manually uploaded avatars. The two
                    paths converge on one data model.
                </p>
                </div>

                {/* What this buys */}
                <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    What the design buys
                </h3>

                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                    {[
                    'Tokens are not readable by JavaScript. XSS cannot exfiltrate credentials.',
                    'Refresh tokens are rotated and single-use. A stolen refresh token is invalidated as soon as it is used.',
                    'The same API serves browser and non-browser clients, with no second auth path.',
                    'Google and password sign-in produce identical session state. The frontend does not distinguish between them.',
                    ].map((item) => (
                    <li
                        key={item}
                        className="flex gap-3 leading-7 text-slate-600 dark:text-slate-400"
                    >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Screenshot */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
                <img
                    src="/projects/accom_management/logged_accom.png"
                    alt="The Accommodation Center login page, with email and password fields and a Sign in with Google option"
                    className="w-full"
                    loading="lazy"
                />
                <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    The login page. Authentication is handled by DRF SimpleJWT under the hood, but tokens never appear in the response body — they arrive as HttpOnly cookies.
                </p>
                </div>

            </div>
            </section>
            {/* API & Business Rules */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
            
            </section>
            {/* Challenges & Solutions */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
                
            </section>
            {/* Status & Limitations */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
                
            </section>  
            {/*background tasks + email workflow*/} 
             <section className="border-t border-slate-200 py-20 dark:border-slate-800">
                
            </section>

        </main>
    <Footer />
        </>
    );
}

export default AccommManagementCaseStudy
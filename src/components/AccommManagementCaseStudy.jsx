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
                            href="https://github.com/Dee68/accomm_mngt"
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
                            Built with Django, Next.js, PostgreSQL, and Celery, deployed as separate
                            web and worker services, with media on Cloudinary and authentication
                            supporting both passwords and Google OAuth.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                'Django',
                                'Next.js',
                                'TypeScript',
                                'PostgreSQL',
                                'DRF',
                                'Celery',
                                'Redis',
                                'Cloudinary',
                                'Railway',
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
                            <a
                                href="https://dimie.dev"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
                            >
                                <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                View Live Site
                                <FiExternalLink className="ml-2" size={16} />
                            </a>

                            </div>

                            <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-2xl dark:border-slate-800">
                            <img
                                src="/projects/accomm_management/homePage.webp"
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
                            The application is live at{" "}
                            <a
                            href="https://dimie.dev"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-white dark:hover:text-slate-300"
                            >
                            dimie.dev
                            </a>
                            . This case study documents the architecture, the domain modelling,
                            and the design decisions that shaped it — including the ones that
                            only surfaced in production.
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
                            Deployed
                            </dt>
                            <dd className="mt-1 font-medium">
                             Railway
                            
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
                        'Custom user model with email as the login field and no role field. A user\'s role is derived from their profile\'s occupation — changing a user from tenant to electrician changes what they can do without touching the user record.',
                    },
                    {
                    app: 'profiles',
                    description:
                        'One profile per user: occupation (one of eight trades), country, city, biography, reputation, and a Cloudinary-hosted avatar. Created automatically via a post_save signal.',
                    },
                    {
                    app: 'apartments',
                    description:
                        'Physical units in buildings. Each apartment has a unit number, building name, floor, and an optional tenant FK to the user model. The FK uses on_delete=SET_NULL, so deleting a user leaves the apartment record intact for reassignment.',
                    },
                    {
                    app: 'issues',
                    description:
                        'Maintenance tickets filed against an apartment. Status (reported / in_progress / resolved), priority, reporter, and assignee. Assigning or resolving an issue enqueues a notification email through Celery — the flow is described in Background Tasks below.',
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
                        'Moderation reports against a user. Reputation is derived from the report count (100 minus a fixed penalty per report), and a profile is banned at five reports. Because reputation is derived rather than incremented, the nightly update_all_reputations task can safely recalculate every score from source data — no drift accumulates.',
                    },
                    {
                    app: 'common',
                    description:
                        'Shared abstractions: TimeStampedModel (dual-key base with UUID public IDs), GenericJSONRenderer (response envelope), ContentView (view tracking), and CookieAuthentication — the DRF auth class discussed in the next section.',
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
                    . Similar rules apply to issue reassignment (only the reporter or a
                    staff user) and ratings (a user cannot rate themselves). Because the
                    rules live at the model layer, they hold whether the write comes
                    from a view, the admin, a management command, or a test.
                    </p>
                </article>
                </div>

                {/* Screenshot */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
                <img
                    src="/projects/accomm_management/postForum.webp"
                    alt="A community forum post with its author, view count, vote counts, tags, and a reply from another user"
                    className="w-full"
                    loading="lazy"
                />
                <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    A community forum post with its replies, votes, view count, and tags — every element here comes from a different model (Post, Reply, ContentView, Tag).
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
                    covers this with two mechanisms: Django&apos;s{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">CsrfViewMiddleware</code>, which
                    validates a token on every write request; and a strict{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">SameSite</code> policy on the
                    authentication cookies —{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">Lax</code> on a single origin,{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">None; Secure</code> when the
                    frontend and API are on different hosts, as they are in production.
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
                        HttpOnly, marked Secure, and short-lived. The third —{' '}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">logged_in</code> — is
                        deliberately not HttpOnly, and contains no sensitive data. It exists
                        so that JavaScript can determine whether the user is authenticated
                        without being able to read the actual tokens.
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
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    A custom pipeline step —{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">associate_by_email</code> — links
                    Google sign-ins to existing password accounts when the email matches,
                    rather than attempting to create a second user. Without it, a user who
                    first registered with a password and later signed in with Google would
                    trigger a unique-constraint violation on the email column. This is
                    discussed in more detail in the Deployment section.
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
                    src="/projects/accomm_management/loggedInUser.webp"
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
            {/* Background Tasks & Email */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
                <div className="mx-auto max-w-6xl px-6">

                    <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Background Tasks & Email
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Work that should not block the request
                    </h2>

                    <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                        Sending emails and recalculating reputations do not need to happen
                        while the user waits. Both run on Celery, with Redis as the broker and
                        result backend. The goal is simple: the request returns as soon as the
                        database is updated, and everything that can happen later, happens
                        later. How the worker is deployed differs between environments —{' '}
                        <em>see the Production Deployment section</em> — but the task code
                        itself does not change.
                    </p>
                    </div>

                    {/* Infrastructure grid */}
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Celery worker
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                        Executes background tasks. Runs in its own container with{' '}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">restart: unless-stopped</code>, so a
                        crash recovers automatically.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Celerybeat
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                            Schedules periodic tasks. The schedule is database-backed rather
                            than in-memory, so it survives restarts without manual
                            intervention. In local development it runs as part of the Docker
                            Compose stack; in production it is started alongside the Celery
                            worker.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Redis
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                        Broker and result backend. Holds the task queue between the web
                        process and the workers, and stores task results for inspection
                        in Flower.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Flower
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                        Task monitoring on a separate port. Shows worker health, task
                        counts, and recent task history with full tracebacks on failure.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Mailpit
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                        Local SMTP capture in development. Every outbound email is
                        collected into a web interface, so the email flow is fully
                        exercised without sending anything to a real inbox.
                        </p>
                    </article>

                    <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        CeleryEmailBackend
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                        Django's email backend is replaced with{' '}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">djcelery_email</code>, so calls to{' '}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">send_mail</code> are transparently
                        routed through Celery.
                        </p>
                    </article>
                    </div>

                    {/* The nightly task */}
                    <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        The nightly reputation task
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The only task scheduled to run automatically is{' '}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                        update_all_reputations
                        </code>
                        . It iterates every profile, recalculates the reputation score from
                        the current report count, and saves the result.
                    </p>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The reason this runs on a schedule rather than on every report is
                        that it decouples the reputation calculation from the report action.
                        Reports are created and deleted through a variety of paths — the
                        API, the Django admin, direct database edits during development —
                        and keeping the score in sync on every path would require hooks in
                        all of them. A nightly recalculation makes the score eventually
                        consistent without any of that plumbing. The tradeoff is a
                        twenty-four-hour lag, which is acceptable for a reputation score
                        that does not gate anything time-sensitive.
                    </p>
                    </div>

                    {/* Email workflow */}
                    <div className="mt-12">
                    <div className="max-w-3xl">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                        The email workflow
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        Two categories of email go out from the application: account
                        activation (from Djoser) and domain events (from custom code).
                        Domain emails include an issue confirmation when a tenant files a
                        report, and a resolution notification when a tradesperson marks
                        it as resolved.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Dedicated email modules
                        </h4>

                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                            Email logic lives in a per-app{' '}
                            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">emails.py</code>, not in views or
                            models. Views call a function, the function assembles the
                            message, and the message is enqueued. The view never knows what
                            an email template looks like.
                        </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            HTML and plaintext, both
                        </h4>

                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                            Every email is sent as{' '}
                            <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">EmailMultiAlternatives</code> with
                            an HTML body and a plaintext alternative. HTML clients see the
                            styled version; text-only clients see readable content; spam
                            filters see a well-formed message.
                        </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Failures are isolated
                        </h4>

                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                            Every send is wrapped in try/except with logged exceptions. If
                            an email fails, the request succeeds. The user sees the toast,
                            the database records the change, and the email problem shows up
                            in the logs rather than as a 500 error on the API call.
                        </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Swappable backend
                        </h4>

                        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                            The SMTP host and port come from environment variables, so
                            switching from Mailpit to a production provider like Resend,
                            Postmark, or SES is a configuration change, not a code change.
                        </p>
                        </article>
                    </div>
                    </div>

                    {/* Screenshot */}
                    <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
                    <img
                        src="/projects/accomm_management/reportEmail1.webp"
                        alt="Resend showing a captured issue confirmation email with the issue title and a message from the Accommodation Centre team"
                        className="w-full"
                        loading="lazy"
                    />
                    <img
                        src="/projects/accomm_management/reportEmail.webp"
                        alt="Resend showing a captured issue confirmation email with the issue title and a message from the Accommodation Centre team"
                        className="w-full"
                        loading="lazy"
                    />
                    <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                        A captured issue confirmation email in Resend. The template is rendered by Django, sent through Celery, and intercepted locally — the same code path that would deliver it to a real inbox in production.
                    </p>
                    </div>

                </div>
            </section>
            {/* Production Deployment */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
                <div className="mx-auto max-w-6xl px-6">

                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Production Deployment
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            From nine Docker services to four Railway services
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                            The development environment is a single Docker Compose file
                            orchestrating nine services behind an nginx reverse proxy. Moving
                            to production meant deciding, for each of those services, whether
                            it should keep running — and if so, in what shape. The result is
                            a smaller, more resilient topology on Railway: four services, one
                            managed database, and no reverse proxy to maintain.
                        </p>
                    </div>

                    {/* Service table */}
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                service: 'api',
                                role: 'Django application server',
                                detail:
                                    'Runs gunicorn behind Railway\'s TLS-terminated edge. Reads configuration from environment variables injected at deploy time.',
                            },
                            {
                                service: 'client',
                                role: 'Next.js frontend',
                                detail:
                                    'The App Router build, deployed as its own service. Talks to the API over HTTPS at api.dimie.dev.',
                            },
                            {
                                service: 'worker',
                                role: 'Celery worker',
                                detail:
                                    'Consumes tasks from the Redis queue. Runs as a separate service rather than a backgrounded process inside api — a crash restarts the worker without touching the web tier.',
                            },
                            {
                                service: 'Redis',
                                role: 'Managed broker and result backend',
                                detail:
                                    'Provided by Railway. Reached over the private network at redis.railway.internal; no public exposure.',
                            },
                            {
                                service: 'Postgres',
                                role: 'Managed database',
                                detail:
                                    'Also Railway-provided. Same connection string shape as local, different hostname.',
                            },
                            {
                                service: '—',
                                role: 'No nginx, no Flower, no Mailpit',
                                detail:
                                    'Railway terminates TLS and routes by hostname. Task monitoring moves to the Railway log viewer; outbound email goes to a transactional provider.',
                            },
                        ].map((item) => (
                            <article
                                key={item.service}
                                className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
                            >
                                <h3 className="font-mono text-lg font-semibold text-slate-900 dark:text-white">
                                    {item.service}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                                    {item.role}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                                    {item.detail}
                                </p>
                            </article>
                        ))}
                    </div>

                    {/* What changed */}
                    <div className="mt-12">
                        <div className="max-w-3xl">
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                What actually changed
                            </h3>
                            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                Three differences mattered more than the others. Each one
                                surfaced a bug that the local environment had hidden.
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">

                            {/* Cross-site cookies */}
                            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Two origins, one session
                                </h4>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    In development, the frontend and API are behind the same
                                    nginx proxy at{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        localhost:8080
                                    </code>
                                    . In production, the frontend is at{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        dimie.dev
                                    </code>{' '}
                                    and the API at{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        api.dimie.dev
                                    </code>
                                    . Browsers treat these as cross-site origins, which changes
                                    how cookies, CSRF, and CORS behave.
                                </p>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The settings that make this work are not obvious until they
                                    are wrong:
                                </p>

                                <ul className="mt-4 space-y-2 leading-7 text-slate-600 dark:text-slate-400">
                                    {[
                                        'SESSION_COOKIE_SAMESITE = "None" and SESSION_COOKIE_SECURE = True, so the OAuth state cookie survives the round-trip to Google and back.',
                                        'CORS_ALLOW_CREDENTIALS = True, so the browser sends cookies on cross-origin requests.',
                                        'CSRF_TRUSTED_ORIGINS includes both dimie.dev and api.dimie.dev.',
                                        'COOKIE_SAMESITE = "None" for the JWT cookies the login view sets — a separate setting from the Django session cookie, which is easy to miss.',
                                    ].map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    When the session cookie is sent with{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        SameSite=Lax
                                    </code>{' '}
                                    — the sensible default on a single origin — the OAuth flow
                                    fails with{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        Invalid state has been provided
                                    </code>
                                    . The state was stored on the first request, but the
                                    callback arrives without the cookie that carries it.
                                </p>
                            </article>

                            {/* Worker isolation */}
                            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Worker process isolation
                                </h4>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The first version of the deployment ran Celery as a backgrounded
                                    process inside the api container. One startup script handled both
                                    the web server and the worker:
                                </p>

                                <div className="mt-4">
                                    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Before — single service
                                    </p>
                                    <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950">
                                        <code>{`# railway_start.sh
                            python3 manage.py migrate --noinput
                            python3 manage.py collectstatic --noinput
                            celery -A config worker -l info &   # ← backgrounded
                            exec gunicorn config.wsgi`}</code>
                                    </pre>
                                </div>

                                <p className="mt-6 leading-7 text-slate-600 dark:text-slate-400">
                                    It worked, in the sense that tasks eventually ran. But the worker
                                    and the web server shared a fate: if either crashed, Railway
                                    restarted the whole container. Railway&apos;s health check only
                                    inspected gunicorn, so a worker that died silently would go
                                    unnoticed.
                                </p>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The symptom was not a crash. It was a <em>queue length of 27</em>.
                                    Avatar uploads were returning{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        202 Accepted
                                    </code>{' '}
                                    — the view had successfully enqueued the task — but no worker was
                                    consuming them. Every upload since the last deploy was sitting in
                                    Redis, waiting.
                                </p>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The fix was to split the worker into its own Railway service with
                                    its own start script. The api service runs only gunicorn; the
                                    worker service runs only Celery:
                                </p>

                                <div className="mt-4 grid gap-4 md:grid-cols-2">
                                    <div>
                                        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            After — api service
                                        </p>
                                        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950">
                                            <code>{`# railway_start.sh
                            python3 manage.py migrate --noinput
                            python3 manage.py collectstatic --noinput
                            exec gunicorn config.wsgi`}</code>
                                        </pre>
                                    </div>

                                    <div>
                                        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                            After — worker service
                                        </p>
                                        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950">
                                            <code>{`# workers.sh
                            celery -A config worker \\
                                -l info \\
                                --concurrency=2`}</code>
                                        </pre>
                                    </div>
                                </div>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    Two files, two Railway services, two independent lifecycles. The
                                    worker service reads the same Redis URL, the same Postgres
                                    connection, and the same Cloudinary credentials as the api
                                    service — but a crash in one no longer takes down the other, and
                                    a redeploy of the web tier no longer interrupts in-flight tasks.
                                </p>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The isolation has a second benefit: log clarity. When Celery and
                                    gunicorn shared a container, their output was interleaved. Now
                                    each service&apos;s log stream contains only its own events, which
                                    makes a failed task immediately obvious rather than one line
                                    among many.
                                </p>
                            </article>

                            {/* Google OAuth pipeline */}
                            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    Google OAuth against existing users
                                </h4>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    Sign-in with Google worked in development because the
                                    accounts used there were new. In production it failed for
                                    the first real user:
                                </p>

                                <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950">
                                    <code>{`django.db.utils.IntegrityError: duplicate key value
            violates unique constraint "users_user_email_key"
            DETAIL: Key (email)=(ddimie283@gmail.com) already exists.`}</code>
                                </pre>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The user had already registered with a password. When they
                                    signed in with Google using the same email, social_core&apos;s
                                    default pipeline tried to{' '}
                                    <em>create a new user</em> — which the database rejected on
                                    the unique email constraint.
                                </p>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    The fix was a single pipeline step, added before{' '}
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        create_user
                                    </code>
                                    :
                                </p>

                                <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 dark:bg-slate-950">
                                    <code>{`SOCIAL_AUTH_PIPELINE = [
                # ...
                'social_core.pipeline.social_auth.social_user',
                'social_core.pipeline.social_auth.associate_by_email',  # ← added
                'social_core.pipeline.user.get_username',               # ← also added
                'social_core.pipeline.user.create_user',
                # ...
            ]`}</code>
                                </pre>

                                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        associate_by_email
                                    </code>{' '}
                                    looks up an existing user by email before deciding whether
                                    to create one. <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                        get_username
                                    </code>{' '}
                                    generates a unique username for genuinely new accounts.
                                    With both in place, existing users get linked and new
                                    users get created — the same endpoint handles both cases.
                                </p>
                            </article>

                        </div>
                    </div>

                    {/* Operational decisions */}
                    <div className="mt-12 grid gap-6 lg:grid-cols-2">

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Configuration as environment variables
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                Nothing that differs between local and production is
                                hardcoded. Database credentials, Redis URL, Cloudinary keys,
                                Google OAuth client ID and secret, allowed hosts, CSRF
                                origins, and the SMTP provider all come from environment
                                variables. The same image runs in both environments with
                                different values injected.
                            </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Redis over the private network
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                Railway&apos;s Redis is reachable at{' '}
                                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                    redis.railway.internal
                                </code>{' '}
                                — a hostname that only resolves from inside the same project.
                                There is no public port, and the connection string includes
                                both username and password. The broker is not exposed to
                                the internet.
                            </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Cloudinary for media
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                Avatars go to Cloudinary, not to local disk. On a
                                container-based platform, local disk is ephemeral — a
                                redeploy wipes it. Storing user media on a managed service
                                keeps the container stateless and makes horizontal scaling
                                trivial if it is ever needed.
                            </p>
                        </article>

                        <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                Transactional email via Resend
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                                In development, Mailpit captures outbound email. In
                                production,{' '}
                                <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                                    django-anymail
                                </code>{' '}
                                routes it to Resend. The Django code is unchanged — only the
                                email backend setting differs. This is the same pattern as
                                Cloudinary and Redis: an external dependency that changes
                                between environments, wired through configuration rather
                                than code.
                            </p>
                        </article>

                    </div>

                </div>
            </section>
            {/* API & Documentation */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-6">

                <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    API & Documentation
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    A REST API with a self-documenting surface
                </h2>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                    The backend exposes a REST API organised by resource. Authentication
                    endpoints come from Djoser and DRF SimpleJWT; the rest are custom
                    viewsets and API views built on Django REST Framework. Every endpoint
                    is documented through DRF Spectacular and available as Swagger and
                    ReDoc.
                </p>
                </div>

                {/* Endpoint grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                    group: 'Auth',
                    endpoints: [
                        'POST /auth/login/',
                        'POST /auth/refresh/',
                        'POST /auth/logout/',
                        'POST /auth/users/',
                        'POST /auth/users/activation/',
                        'POST /auth/o/{provider}/',
                    ],
                    },
                    {
                    group: 'Apartments',
                    endpoints: [
                        'POST /apartments/add/',
                        'GET /apartments/my-apartment/',
                    ],
                    },
                    {
                    group: 'Issues',
                    endpoints: [
                        'GET /issues/',
                        'GET /issues/me/',
                        'GET /issues/assigned/',
                        'POST /issues/create/{apartment_id}/',
                        'PATCH /issues/update/{id}/',
                        'DELETE /issues/delete/{id}/',
                    ],
                    },
                    {
                    group: 'Posts',
                    endpoints: [
                        'GET /posts/',
                        'POST /posts/create/',
                        'GET /posts/{slug}/',
                        'PATCH /posts/{slug}/update/',
                        'POST /posts/{post_id}/reply/',
                        'PATCH /posts/{post_id}/upvote/',
                    ],
                    },
                    {
                    group: 'Profiles',
                    endpoints: [
                        'GET /profiles/all/',
                        'GET /profiles/user/my-profile/',
                        'PATCH /profiles/user/update/',
                        'PATCH /profiles/user/avatar/',
                    ],
                    },
                    {
                    group: 'Ratings & Reports',
                    endpoints: [
                        'POST /ratings/create/',
                        'POST /reports/create/',
                        'GET /reports/me/',
                    ],
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

                {/* Design principles */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2">

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Actions are verbs, resources are nouns
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Upvoting a post is{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">PATCH /posts/&#123;id&#125;/upvote/</code>,
                    not a generic field update. Bookmarking, unbookmarking, and
                    replying follow the same pattern. The URL list describes what a
                    user can do to a resource without reading the serializer.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Per-user fields in the serializer
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Fields like{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">is_bookmarked</code> and{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">is_upvoted</code> are computed
                    against the requesting user. The serializer needs request context
                    to know who is asking — a post's bookmark state only makes sense
                    for the person viewing it.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Filtering on list endpoints
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Posts can be filtered by tag, author, or reply count, with
                    ordering options for oldest, most recent, and most replied-to.
                    Profiles can be filtered by occupation, gender, country, and a
                    search term. Filtering happens at the database level via{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">django-filter</code>.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Throttling out of the box
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    Anonymous requests are limited to 200 per day; authenticated
                    requests to 500. Configured globally in{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">REST_FRAMEWORK</code>, so every
                    endpoint inherits the policy without per-view configuration.The
                    counters are stored in Django&apos;s cache, which is backed by Redis
                    in production so that the limits hold across worker processes.
                    </p>

                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Consistent pagination
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    List endpoints share a{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">PageNumberPagination</code> class
                    with a default page size of nine and a configurable{' '}
                    <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">page_size</code> query parameter.
                    The frontend sees the same pagination shape on every list
                    response.
                    </p>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Documentation from the schema
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                    DRF Spectacular generates an OpenAPI 3 schema from the views and
                    serializers. Swagger UI and ReDoc are both available — one for
                    exploring endpoints interactively, the other for reading as
                    reference. The schema stays current because it is generated, not
                    written.
                    </p>
                </article>
                </div>

                {/* Swagger screenshot */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
                   
                <img
                    src="/projects/accomm_management/swaggerDocs.webp"
                    alt="The Swagger UI documentation for the Accommodation Center API, showing endpoint groups for apartments, auth, issues, posts, profiles, ratings, and reports"
                    className="w-full"
                    loading="lazy"
                />
                <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                    Swagger UI, generated from the API schema. Every endpoint is explorable, every request and response shape is documented, and nothing was written by hand.
                </p>
                  {/* add swagger link here */}
                    <a
                                href="https://api.dimie.dev/api/v1/docs/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                Swagger Documentation
                                <FiExternalLink className="ml-2" size={16} />
                            </a>
                </div>

            </div>
            </section>
            {/* Status & Next Steps */}
            <section className="border-t border-slate-200 py-20 dark:border-slate-800">
            <div className="mx-auto max-w-6xl px-6">

                <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Status & Next Steps
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    What this project is — and what it is not
                </h2>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                    Accommodation Center is a development-stage application, not a
                    deployed product. It runs locally through Docker and is intended as
                    a demonstration of full-stack architecture and domain modelling,
                    not as a live service. Being direct about that is part of knowing
                    what the project is.
                </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        What is implemented
                    </h3>

                    <ul className="mt-4 space-y-3 leading-7 text-slate-600 dark:text-slate-400">
                        {[
                            'Full authentication flow: registration, email activation, login, refresh, logout, and Google OAuth — with JWTs stored in HttpOnly cookies rather than localStorage.',
                            'Domain features: apartment management, issue lifecycle, community forum with posts, replies, votes, and bookmarks.',
                            'Moderation features: user ratings, reports, and a reputation system with a scheduled recalculation task.',
                            'Background task infrastructure: Celery and Celerybeat with Redis as the broker, both running in local Docker and as a separate Railway worker service in production.',
                            'Email workflow: HTML and plaintext templates, delivered through Celery in production via django-anymail and Resend.',
                            'Media handling: profile avatars uploaded to Cloudinary, keeping the application container stateless.',
                            'API documentation generated from the codebase with Swagger and ReDoc.',
                            'Test suite: 333 pytest tests covering models, views, serializers, permissions, forms, admin configuration, signals, background tasks, email delivery, and URL routing.',
                            'Local development environment: nine Docker services behind an nginx reverse proxy.',
                            'Production deployment: four Railway services (api, client, worker, and managed Postgres and Redis) behind TLS-terminated hostnames at dimie.dev and api.dimie.dev.',
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
                        What is deliberately out of scope
                    </h3>

                    <ul className="mt-4 space-y-3 leading-7 text-slate-600 dark:text-slate-400">
                        {[
                            'No CI gate. Railway redeploys on push to main, but the 333-test suite is not yet wired into a pre-deploy check. A failing test would not block a release.',
                            'No observability beyond the platform. Railway\'s log viewer is the only source of runtime information. Sentry (or equivalent) for error aggregation and structured logging would be the next addition.',
                            'No custom domain for the API. api.dimie.dev is a Railway-provided subdomain. A production setup would likely route the API behind the same apex domain and reverse-proxy both from one entry point.',
                            'No load or concurrency testing. The current deployment handles the traffic it receives; no work has been done to characterise what it would do under real load.',
                        ].map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </article>
                </div>

                <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        What would come next
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        The single highest-value next step is a CI gate. The 333-test
                        suite runs locally, and it is fast, but nothing currently stops a
                        failing test from reaching production. A GitHub Actions workflow
                        that runs{' '}
                        <code className="rounded bg-slate-200 px-1.5 py-0.5 text-sm dark:bg-slate-800">
                            pytest
                        </code>{' '}
                        on every push, and blocks the Railway deploy on a red build, closes
                        that gap with a few lines of YAML.
                    </p>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        After that, the natural progression is observability. Railway&apos;s
                        log viewer is sufficient for development but not for production
                        diagnosis — a user-reported error means grepping through logs by
                        timestamp. Sentry (or an equivalent) would aggregate exceptions,
                        capture the request context and user identity, and surface
                        regressions proactively rather than waiting for someone to report
                        them. Structured logging would go alongside it, so that querying a
                        request by ID or by user is a search rather than a scroll.
                    </p>

                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                        Beyond those two, the roadmap branches depending on what the
                        application is for. If it moves toward real use, the priorities
                        would be load testing, database indexes measured against actual
                        query patterns, and rate limiting tuned to observed traffic. If it
                        stays a portfolio project, the more interesting direction is
                        deepening the domain: recurring maintenance schedules, tenant
                        move-in and move-out workflows, and technician availability
                        tracking. The current architecture supports either path — the
                        domain model was designed with extension in mind rather than
                        fitted to the feature set.
                    </p>
                </div>

                <p className="mt-8 max-w-3xl text-slate-600 dark:text-slate-400">
                Naming these limitations is deliberate. Knowing what a project is
                not is part of knowing what it is.
                </p>

            </div>
            </section>
            
              
          

        </main>
    <Footer />
        </>
    );
}

export default AccommManagementCaseStudy
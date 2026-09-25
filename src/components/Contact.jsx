import { useState } from 'react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = 'f09dbabe-6c30-4258-a92c-3a610ffd9403'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // Clear the field's error as the user types
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) {
      next.message = 'Please enter a message.'
    } else if (form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'DWE Portfolio',
          // redirect: 'https://my-site.com/thanks', 
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-lg border bg-white px-4 py-3 text-slate-900 placeholder:text-[slate-400] transition focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-slate-200'

  const inputBorder = (field) =>
    errors[field]
      ? 'border-red-400 dark:border-red-500'
      : 'border-slate-300 dark:border-slate-700'

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let's connect.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[slate-600] dark:text-slate-400">
            I'm currently looking for software development roles — full-time,
            graduate or contract — where I can work on full-stack applications
            and continue developing my knowledge of secure software
            development. I'm based in Ireland and open to remote, hybrid or
            on-site work.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            The fastest way to reach me is by email. I usually respond within
            a day.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`${inputBase} ${inputBorder('name')}`}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-[slate-300]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`${inputBase} ${inputBorder('email')}`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputBase} ${inputBorder('message')} resize-y`}
                placeholder="Tell me a little about what you have in mind..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-600 dark:text-red-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p
                  role="status"
                  className="text-sm font-medium text-green-700 dark:text-green-400"
                >
                  Thanks — your message has been sent.
                </p>
              )}

              {status === 'error' && (
                <p
                  role="alert"
                  className="text-sm font-medium text-red-600 dark:text-red-400"
                >
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>

          {/* Direct links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
               Find me elsewhere
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              More of my work and background is available here.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="https://github.com/Dee68"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dimie-w-283-e/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
import { Link } from 'react-router-dom'

function NavItem({
  to,
  label,
  onClick,
  variant = 'desktop',
  isActive = false,
}) {
  const base = 'text-sm transition rounded-lg'

  // Desktop: reserve border space on every item so nothing shifts
  const desktopBase =
    'border-2 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-900'

  const mobileBase =
    'border-b border-slate-200 py-3 dark:border-slate-800'

  // Inactive desktop items get a transparent border to reserve space
  const inactiveDesktop =
    'border-transparent text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'

  const inactiveMobile =
    'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'

  // Active: border + bold text, but text colour stays default
  const active =
     'border-2 border-slate-900 font-semibold text-slate-900 dark:border-white dark:text-white'

  const classes = [
    base,
    variant === 'mobile' ? mobileBase : desktopBase,
    isActive
      ? active
      : variant === 'mobile'
        ? inactiveMobile
        : inactiveDesktop,
  ].join(' ')

  return (
    <Link
      to={to}
      onClick={onClick}
      className={classes}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  )
}

export default NavItem
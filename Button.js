import Link from 'next/link';

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-sm transition-colors duration-base ease-out disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600';

const variants = {
  primary:
    'bg-ink-800 text-white hover:bg-red-600 active:bg-red-700',
  secondary:
    'bg-transparent text-ink-800 border-[1.5px] border-ink-800 hover:bg-ink-800 hover:text-white',
  ghost:
    'bg-transparent text-ink-700 hover:bg-ink-50',
  danger:
    'bg-red-600 text-white hover:bg-red-700',
  whatsapp:
    'bg-whatsapp text-white hover:bg-whatsapp-hover',
  white:
    'bg-white text-ink-800 hover:bg-ink-50 border-[1.5px] border-white',
};

const sizes = {
  sm: 'h-8 px-3 text-body-sm',
  md: 'h-10 px-4 text-body',
  lg: 'h-12 px-6 text-body-lg',
  xl: 'h-14 px-8 text-body-lg font-semibold',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  fullWidth,
  children,
  className = '',
  ...rest
}) {
  const classes = [
    base,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

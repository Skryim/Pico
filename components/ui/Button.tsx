import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost";

type BaseProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-display font-semibold text-[15px] transition-transform duration-150 ease-out hover:-translate-y-0.5";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-white shadow-[0_8px_20px_-8px_rgba(46,143,209,0.55)] hover:bg-blue-dark",
  ghost:
    "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream",
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link className={classes} {...(props as ComponentPropsWithoutRef<typeof Link>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

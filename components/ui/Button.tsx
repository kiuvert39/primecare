import { type ReactNode } from "react";

type Variant = "primary" | "outline" | "white";
type Size = "sm" | "md" | "lg";

interface Props {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-white/30 text-white hover:bg-white/10",
  white:   "bg-white text-primary hover:bg-primary-light",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

const base = "inline-flex items-center justify-center rounded-sm font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...rest
}: Props) {
  const styles = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}

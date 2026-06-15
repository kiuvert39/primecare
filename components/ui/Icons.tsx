// Shared icon set — stroke-based, uses currentColor.
// Set text color on a parent to control icon color.
// Swap these for lucide-react or heroicons when the icon library is decided.

interface IconProps {
  className?: string;
}

export function ShieldIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V7l-8-4z" />
    </svg>
  );
}

export function ClockIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}

export function HeartIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21 4.318 12.682a4.5 4.5 0 010-6.364z" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  );
}

export const ICON_MAP: Record<string, ({ className }: IconProps) => React.JSX.Element> = {
  shield: ShieldIcon,
  clock:  ClockIcon,
  heart:  HeartIcon,
  globe:  GlobeIcon,
};

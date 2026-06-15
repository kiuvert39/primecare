// Single source of truth for the brand colour palette.
// Edit here only — layout.tsx injects these as CSS custom properties,
// globals.css registers them as Tailwind utilities.

export const colors = {
  // ── Primary — deep indigo, CTA colour (#282A5F) ────────────────────────
  primary: {
    DEFAULT: "#282A5F", // brand-900
    light:   "#7A80D1", // brand-400  — tints, icon backgrounds
    dark:    "#1e1f45", // deeper brand — pressed states
  },

  // ── Secondary — dark neutral for hero overlays & dark surfaces ──────────
  secondary: {
    DEFAULT: "#323043", // neutral-700
    light:   "#444056", // neutral-600
    dark:    "#131224", // very deep — darkest hero overlay
  },

  // ── Full brand scale ────────────────────────────────────────────────────
  brand: {
    50:  "#F4F5FF",
    100: "#E8EAFF",
    200: "#C8CDFF",
    300: "#A3A6CA",
    400: "#7A80D1",
    500: "#5C61A7",
    600: "#4A4FBC",
    700: "#3A3DAD",
    800: "#2A279D",
    900: "#282A5F",
  },

  // ── Accent — warm terracotta for secondary highlights ───────────────────
  accent: {
    50:  "#F8F6F5",
    100: "#EFE9E6",
    200: "#E0D2CA",
    300: "#CDAF9C",
    400: "#B68E78",
    500: "#A77560",
  },

  // ── Neutral — cool purple-grey ──────────────────────────────────────────
  neutral: {
    50:  "#F8F8FA",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#A096A4",
    500: "#595068",
    600: "#444056",
    700: "#323043",
    800: "#222033",
    900: "#131224",
    950: "#0a091a",
  },

  background: { light: "#FFFFFF",  dark: "#0a091a"  },
  foreground:  { light: "#323043",  dark: "#F8F8FA"  },

  danger:  "#EF4444",
  warning: "#F59E0B",
  success: "#22C55E",
} as const;

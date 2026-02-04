interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bonsai tree with subtle tech/circuit aesthetic */}

      {/* Pot */}
      <rect x="32" y="85" width="36" height="10" rx="2" fill="currentColor" opacity="0.9" />
      <rect x="28" y="78" width="44" height="9" rx="2" fill="currentColor" />

      {/* Main trunk - organic curve */}
      <path
        d="M50 78
           C50 72 48 68 47 62
           C46 56 44 50 46 44
           C48 38 52 34 54 28
           C56 22 54 18 52 14"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left branch */}
      <path
        d="M47 58 C40 56 34 58 26 54"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right branch */}
      <path
        d="M48 44 C56 42 64 44 72 40"
        stroke="currentColor"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Upper left branch */}
      <path
        d="M52 32 C44 30 36 32 28 28"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Top branch */}
      <path
        d="M52 14 C48 12 42 14 36 12"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Foliage clouds - layered organic shapes */}
      {/* Top foliage */}
      <ellipse cx="44" cy="12" rx="22" ry="10" fill="currentColor" opacity="0.12" />
      <ellipse cx="44" cy="12" rx="16" ry="7" fill="currentColor" opacity="0.2" />

      {/* Upper left foliage */}
      <ellipse cx="28" cy="26" rx="18" ry="10" fill="currentColor" opacity="0.12" />
      <ellipse cx="28" cy="26" rx="12" ry="6" fill="currentColor" opacity="0.2" />

      {/* Right foliage */}
      <ellipse cx="72" cy="38" rx="16" ry="10" fill="currentColor" opacity="0.12" />
      <ellipse cx="72" cy="38" rx="10" ry="6" fill="currentColor" opacity="0.2" />

      {/* Left lower foliage */}
      <ellipse cx="26" cy="52" rx="18" ry="10" fill="currentColor" opacity="0.12" />
      <ellipse cx="26" cy="52" rx="12" ry="6" fill="currentColor" opacity="0.2" />

      {/* Small decorative dots - subtle tech hint */}
      <circle cx="36" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="52" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="26" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="36" cy="26" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="64" cy="38" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="80" cy="38" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="18" cy="52" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="34" cy="52" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

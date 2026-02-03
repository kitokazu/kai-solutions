interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 28 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pot - bottom tier */}
      <path
        d="M25 112 L30 120 L70 120 L75 112 Z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pot - top tier */}
      <path
        d="M20 104 L80 104 L80 112 L20 112 Z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main trunk - curved path from pot up */}
      <path
        d="M50 104
           L50 85
           Q50 75 45 70
           L40 65
           Q32 58 35 50
           Q38 42 50 38
           Q55 36 55 30
           L55 22"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Upper right branch */}
      <path
        d="M55 30 Q60 28 65 28"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Top foliage lines - right side */}
      <path d="M55 22 L90 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M65 28 L85 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M92 22 L97 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* Top foliage lines - left side */}
      <path d="M55 22 Q48 22 42 22 L10 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 28 L20 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M5 22 L8 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* Middle branch going left */}
      <path
        d="M42 45 Q35 45 30 45"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Middle foliage lines - left */}
      <path d="M30 45 L5 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M25 51 L12 51" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* Middle-right branch */}
      <path
        d="M50 38 Q58 38 65 40"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Middle foliage lines - right */}
      <path d="M65 40 L95 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 46 L88 46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* Lower left branch */}
      <path
        d="M40 65 Q32 68 25 68"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Lower foliage lines - left */}
      <path d="M25 68 L8 68" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 74 L28 74" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

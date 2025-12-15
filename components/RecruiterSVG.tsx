export default function RecruiterOutreachSVG() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff9a3c" />
          <stop offset="50%" stopColor="#ff4d4d" />
          <stop offset="100%" stopColor="#ffd166" />
        </linearGradient>

        <linearGradient id="cardGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <path
        d="M60 70C40 20 120 0 200 30C280 60 360 40 380 90C400 140 350 200 280 220C210 240 120 260 80 210C40 160 80 120 60 70Z"
        fill="url(#bgGradient)"
        opacity="0.9"
      />

      <rect
        x="90"
        y="70"
        width="240"
        height="160"
        rx="20"
        fill="url(#cardGradient)"
        stroke="#ffffff"
        strokeOpacity="0.6"
      />

      <rect x="115" y="95" width="150" height="12" rx="6" fill="#ff6b35" />
      <rect x="115" y="120" width="180" height="10" rx="5" fill="#e5e7eb" />
      <rect x="115" y="140" width="160" height="10" rx="5" fill="#e5e7eb" />
      <rect x="115" y="160" width="130" height="10" rx="5" fill="#e5e7eb" />

      {[110, 150, 190].map((x) => (
        <g key={x} transform={`translate(${x} 190)`}>
          <circle cx="0" cy="0" r="10" fill="#22c55e" />
          <path d="M-4 0l3 3 6-6" stroke="#fff" strokeWidth="2" fill="none" />
        </g>
      ))}

      <circle cx="300" cy="70" r="22" fill="#ff6b35" />
      <path
        d="M292 70h16M300 62l8 8-8 8"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
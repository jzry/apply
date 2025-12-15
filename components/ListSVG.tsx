export default function CompanySVG() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff9a3c" />
          <stop offset="50%" stop-color="#ff4d4d" />
          <stop offset="100%" stop-color="#ffd166" />
        </linearGradient>

        <linearGradient id="sheetGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.97" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
        </linearGradient>
      </defs>

      <path
        d="M40 110C20 60 110 20 210 30C310 40 380 100 380 160C380 220 310 270 210 270C110 270 40 230 30 170C20 130 60 140 40 110Z"
        fill="url(#bgGradient3)"
        opacity="0.9"
      />

      <rect
        x="60"
        y="60"
        width="300"
        height="200"
        rx="18"
        fill="url(#sheetGradient)"
        stroke="#ffffff"
        stroke-opacity="0.6"
      />

      <rect x="60" y="60" width="300" height="34" rx="18" fill="#f3f4f6" />
      <rect x="85" y="72" width="80" height="10" rx="5" fill="#9ca3af" />
      <rect x="185" y="72" width="80" height="10" rx="5" fill="#9ca3af" />

      <g fill="#9ca3af" font-size="10" font-family="monospace">
        <text x="70" y="115">1</text>
        <text x="70" y="145">2</text>
        <text x="70" y="175">3</text>
        <text x="70" y="205">4</text>
      </g>

      <g stroke="#e5e7eb" stroke-width="1">
        <line x1="85" y1="100" x2="350" y2="100" />
        <line x1="85" y1="130" x2="350" y2="130" />
        <line x1="85" y1="160" x2="350" y2="160" />
        <line x1="85" y1="190" x2="350" y2="190" />
        <line x1="85" y1="220" x2="350" y2="220" />
      </g>

      <circle cx="110" cy="115" r="10" fill="#3b82f6" />
      <rect x="130" y="108" width="60" height="14" rx="7" fill="#e5e7eb" />

      <rect x="100" y="138" width="20" height="20" rx="4" fill="#10b981" />
      <rect x="130" y="143" width="80" height="14" rx="7" fill="#e5e7eb" />

      <path d="M110 170l10 18h-20l10-18z" fill="#f59e0b" />
      <rect x="130" y="173" width="70" height="14" rx="7" fill="#e5e7eb" />

      <rect
        x="85"
        y="190"
        width="265"
        height="30"
        rx="10"
        fill="#ecfeff"
      />

      <circle cx="110" cy="205" r="10" fill="#22c55e" />
      <path
        d="M104 205l3 3 6-6"
        stroke="#fff"
        stroke-width="2"
        fill="none"
      />

      <rect x="130" y="198" width="90" height="14" rx="7" fill="#e5e7eb" />
    </svg>

  );
}
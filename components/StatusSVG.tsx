export default function VoiceSVG() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradient4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff9a3c" />
          <stop offset="50%" stop-color="#ff4d4d" />
          <stop offset="100%" stop-color="#ffd166" />
        </linearGradient>

        <linearGradient id="cardGradient4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.97" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
        </linearGradient>
      </defs>

      <path
        d="M50 100C30 50 130 20 220 30C310 40 380 100 380 160C380 220 310 270 220 280C130 290 60 250 40 190C20 140 70 130 50 100Z"
        fill="url(#bgGradient4)"
        opacity="0.9"
      />

      <rect
        x="50"
        y="50"
        width="320"
        height="220"
        rx="20"
        fill="url(#cardGradient4)"
        stroke="#ffffff"
        stroke-opacity="0.6"
      />

      <rect x="70" y="70" width="140" height="14" rx="7" fill="#ff6b35" />
      <circle cx="330" cy="77" r="6" fill="#22c55e" />
      <text
        x="290"
        y="82"
        font-size="10"
        fill="#22c55e"
        font-family="system-ui"
      >
        Live
      </text>

      <rect x="70" y="100" width="80" height="10" rx="5" fill="#9ca3af" />
      <rect x="170" y="100" width="70" height="10" rx="5" fill="#9ca3af" />
      <rect x="260" y="100" width="60" height="10" rx="5" fill="#9ca3af" />

      <rect x="70" y="120" width="120" height="10" rx="5" fill="#e5e7eb" />
      <rect x="210" y="116" width="60" height="18" rx="9" fill="#dcfce7" />
      <text x="223" y="129" font-size="10" fill="#16a34a">Applied</text>
      <circle cx="300" cy="125" r="6" fill="#22c55e" />

      <rect x="70" y="145" width="140" height="10" rx="5" fill="#e5e7eb" />
      <rect x="210" y="141" width="70" height="18" rx="9" fill="#dcfce7" />
      <text x="221" y="154" font-size="10" fill="#16a34a">Messaged</text>
      <circle cx="300" cy="150" r="6" fill="#22c55e" />

      <rect x="70" y="170" width="130" height="10" rx="5" fill="#e5e7eb" />
      <rect x="210" y="166" width="70" height="18" rx="9" fill="#fee2e2" />
      <text x="224" y="179" font-size="10" fill="#dc2626">No Reply</text>
      <circle cx="300" cy="175" r="6" fill="#ef4444" />

      <rect x="70" y="195" width="150" height="10" rx="5" fill="#e5e7eb" />
      <rect x="210" y="191" width="80" height="18" rx="9" fill="#dcfce7" />
      <text x="221" y="204" font-size="10" fill="#16a34a">Interview</text>
      <circle cx="300" cy="200" r="6" fill="#22c55e" />

      <circle cx="330" cy="200" r="14" fill="#ff6b35" />
      <path
        d="M322 197h16M322 203h10"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
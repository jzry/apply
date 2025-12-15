export default function VoiceSVG() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full max-w-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGradientResume" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff9a3c" />
          <stop offset="50%" stop-color="#ff4d4d" />
          <stop offset="100%" stop-color="#ffd166" />
        </linearGradient>
    
        <linearGradient id="resumeCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.97" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0.9" />
        </linearGradient>
      </defs>

      <path
        d="M35 120C25 70 95 20 180 25C265 30 350 70 380 125C410 180 360 245 280 265C200 285 110 275 65 230C20 185 45 165 35 120Z"
        fill="url(#bgGradientResume)"
        opacity="0.95"
      />

      <rect
        x="150"
        y="45"
        width="120"
        height="230"
        rx="16"
        fill="url(#resumeCard)"
        stroke="#ffffff"
        stroke-opacity="0.6"
      />

      <rect x="165" y="62" width="90" height="14" rx="7" fill="#ff6b35" />

      <rect x="165" y="92" width="90" height="10" rx="5" fill="#e5e7eb" />
      <rect x="165" y="110" width="85" height="10" rx="5" fill="#dcfce7" />
      <rect x="165" y="128" width="88" height="10" rx="5" fill="#e5e7eb" />
    
      <rect x="165" y="156" width="90" height="10" rx="5" fill="#dcfce7" />
      <rect x="165" y="174" width="82" height="10" rx="5" fill="#e5e7eb" />
      <rect x="165" y="192" width="86" height="10" rx="5" fill="#e5e7eb" />

      <circle cx="90" cy="155" r="20" fill="#c7d2fe" />
      <rect x="65" y="178" width="50" height="46" rx="18" fill="#e0e7ff" />

      <circle cx="330" cy="155" r="20" fill="#fde68a" />
      <rect x="305" y="178" width="50" height="46" rx="18" fill="#fef3c7" />

      <rect
        x="50"
        y="100"
        width="90"
        height="40"
        rx="12"
        fill="#ffffff"
        fill-opacity="0.95"
      />
      <rect x="65" y="114" width="60" height="8" rx="4" fill="#c7d2fe" />
      <rect x="65" y="126" width="45" height="6" rx="3" fill="#c7d2fe" />
    
      <rect
        x="280"
        y="100"
        width="100"
        height="40"
        rx="12"
        fill="#ffffff"
        fill-opacity="0.95"
      />
      <rect x="295" y="114" width="70" height="8" rx="4" fill="#dcfce7" />
      <rect x="295" y="126" width="50" height="6" rx="3" fill="#dcfce7" />

      <circle cx="255" cy="68" r="12" fill="#22c55e" />
      <path
        d="M250 68l3 3 6-6"
        stroke="#ffffff"
        stroke-width="2"
        fill="none"
      />
    </svg>
  );
}
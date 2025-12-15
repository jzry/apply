export default function VoiceSVG() {
  return (
    <svg
          viewBox="0 0 420 320"
          className="w-full max-w-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bgGradient2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ff9a3c" />
              <stop offset="50%" stop-color="#ff4d4d" />
              <stop offset="100%" stop-color="#ffd166" />
            </linearGradient>

            <linearGradient id="cardGradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0.85" />
            </linearGradient>
          </defs>

          <path
            d="M50 90C30 40 120 0 210 20C300 40 380 80 380 140C380 200 320 250 230 260C140 270 60 240 40 190C20 140 70 130 50 90Z"
            fill="url(#bgGradient2)"
            opacity="0.9"
          />

          <rect
            x="60"
            y="80"
            width="140"
            height="150"
            rx="18"
            fill="url(#cardGradient2)"
          />

          <rect x="75" y="100" width="90" height="10" rx="5" fill="#e5e7eb" />
          <rect x="75" y="120" width="100" height="10" rx="5" fill="#e5e7eb" />
          <rect x="75" y="140" width="80" height="10" rx="5" fill="#e5e7eb" />

          <circle cx="130" cy="185" r="14" fill="#ef4444" />
          <path
            d="M124 179l12 12M136 179l-12 12"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          />

          <rect
            x="220"
            y="60"
            width="160"
            height="170"
            rx="20"
            fill="url(#cardGradient2)"
            stroke="#ffffff"
            stroke-opacity="0.6"
          />

          <rect x="240" y="85" width="110" height="12" rx="6" fill="#ff6b35" />
          <rect x="240" y="110" width="120" height="10" rx="5" fill="#e5e7eb" />
          <rect x="240" y="130" width="100" height="10" rx="5" fill="#e5e7eb" />
          <rect x="240" y="150" width="90" height="10" rx="5" fill="#e5e7eb" />

          <circle cx="340" cy="185" r="16" fill="#22c55e" />
          <path
            d="M332 185h10M338 179l8 6-8 6"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
     </svg>
  );
}
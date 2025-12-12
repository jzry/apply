const GradientWave = () => (
  <svg
    className="absolute top-0 left-0 w-full h-full z-0"
    viewBox="0 0 800 700"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd34d" />
        <stop offset="30%" stopColor="#fb923c" />
        <stop offset="70%" stopColor="#ff471a" />
        <stop offset="100%" stopColor="#ffcc00" />
      </linearGradient>
    </defs>

    <path
      d="
        M0,70 
        C300,250 600,-50 900,200 
        V500 
        C600,500 200,600 0,500 
        Z
      "
      fill="url(#warmGradient)"
    />
  </svg>
);

export default GradientWave;

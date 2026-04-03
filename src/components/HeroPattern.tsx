export default function HeroPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* === GEOMETRIC BLOCKS (Mondrian-style grid) === */}
      {/* Row 1 */}
      <rect x="0" y="0" width="360" height="350" fill="#FFB300" />
      <rect x="360" y="0" width="200" height="200" fill="#E91E8C" />
      <rect x="560" y="0" width="320" height="350" fill="#7CB342" />
      <rect x="880" y="0" width="280" height="200" fill="#E91E8C" />
      <rect x="1160" y="0" width="280" height="350" fill="#FF6D00" />
      <rect x="360" y="200" width="200" height="150" fill="#00BCD4" />
      <rect x="880" y="200" width="280" height="150" fill="#FFB300" />

      {/* Row 2 */}
      <rect x="0" y="350" width="200" height="300" fill="#E91E8C" />
      <rect x="200" y="350" width="280" height="300" fill="#8BC34A" />
      <rect x="480" y="350" width="240" height="200" fill="#FFB300" />
      <rect x="720" y="350" width="300" height="300" fill="#00BCD4" />
      <rect x="1020" y="350" width="200" height="200" fill="#E91E8C" />
      <rect x="1220" y="350" width="220" height="300" fill="#7CB342" />
      <rect x="480" y="550" width="240" height="100" fill="#E91E8C" />
      <rect x="1020" y="550" width="200" height="100" fill="#8BC34A" />

      {/* Row 3 */}
      <rect x="0" y="650" width="300" height="250" fill="#FFB300" />
      <rect x="300" y="650" width="240" height="250" fill="#00BCD4" />
      <rect x="540" y="650" width="260" height="250" fill="#E91E8C" />
      <rect x="800" y="650" width="320" height="250" fill="#7CB342" />
      <rect x="1120" y="650" width="320" height="250" fill="#FFB300" />

      {/* === FRUITS (flat geometric style, overlapping blocks) === */}

      {/* MANGO — top left area */}
      <g transform="translate(80, 60)">
        {/* Body */}
        <ellipse cx="120" cy="130" rx="110" ry="120" fill="#FF9800" />
        <ellipse cx="115" cy="125" rx="90" ry="100" fill="#FFB74D" opacity="0.5" />
        {/* Highlight */}
        <ellipse cx="90" cy="90" rx="40" ry="50" fill="#FFD54F" opacity="0.4" />
        {/* Stem */}
        <ellipse cx="130" cy="18" rx="8" ry="12" fill="#5D4037" />
        {/* Leaf */}
        <path d="M135 25 Q180 -20 200 10 Q170 30 135 25Z" fill="#2E7D32" />
        <path d="M140 22 Q175 -10 190 12" stroke="#1B5E20" strokeWidth="1.5" fill="none" />
      </g>

      {/* PINEAPPLE — center, largest fruit */}
      <g transform="translate(560, 80)">
        {/* Leaves */}
        <path d="M100 0 Q80 -60 120 -80 Q110 -30 100 0Z" fill="#4CAF50" />
        <path d="M100 0 Q140 -70 160 -50 Q130 -20 100 0Z" fill="#66BB6A" />
        <path d="M100 0 Q50 -50 70 -70 Q80 -30 100 0Z" fill="#388E3C" />
        <path d="M100 0 Q160 -40 170 -20 Q140 -10 100 0Z" fill="#81C784" />
        <path d="M100 0 Q40 -30 50 -55 Q70 -20 100 0Z" fill="#43A047" />
        {/* Body */}
        <ellipse cx="100" cy="130" rx="80" ry="120" fill="#FFC107" />
        {/* Cross-hatch pattern */}
        <g stroke="#F9A825" strokeWidth="2" opacity="0.6">
          <line x1="40" y1="50" x2="160" y2="50" />
          <line x1="30" y1="90" x2="170" y2="90" />
          <line x1="25" y1="130" x2="175" y2="130" />
          <line x1="30" y1="170" x2="170" y2="170" />
          <line x1="40" y1="210" x2="160" y2="210" />
          <line x1="60" y1="20" x2="60" y2="240" />
          <line x1="100" y1="10" x2="100" y2="250" />
          <line x1="140" y1="20" x2="140" y2="240" />
        </g>
        {/* Highlight */}
        <ellipse cx="75" cy="100" rx="25" ry="50" fill="#FFD54F" opacity="0.3" />
      </g>

      {/* WATERMELON SLICE — top right */}
      <g transform="translate(1050, 40)">
        {/* Rind */}
        <path d="M0 160 Q100 -20 200 160Z" fill="#4CAF50" />
        {/* White rind */}
        <path d="M10 150 Q100 0 190 150Z" fill="#C8E6C9" />
        {/* Red flesh */}
        <path d="M20 140 Q100 15 180 140Z" fill="#E53935" />
        {/* Seeds */}
        <ellipse cx="70" cy="100" rx="5" ry="8" fill="#1B5E20" transform="rotate(-15 70 100)" />
        <ellipse cx="110" cy="90" rx="5" ry="8" fill="#1B5E20" transform="rotate(10 110 90)" />
        <ellipse cx="140" cy="110" rx="5" ry="8" fill="#1B5E20" transform="rotate(5 140 110)" />
        <ellipse cx="90" cy="120" rx="4" ry="7" fill="#1B5E20" transform="rotate(-8 90 120)" />
        <ellipse cx="130" cy="80" rx="4" ry="6" fill="#1B5E20" transform="rotate(12 130 80)" />
      </g>

      {/* PASSION FRUIT — right center-low */}
      <g transform="translate(1100, 420)">
        {/* Outer */}
        <circle cx="80" cy="80" r="75" fill="#F9A825" />
        {/* Inner cut */}
        <circle cx="80" cy="80" r="58" fill="#FFF8E1" />
        {/* Seeds */}
        <g fill="#F57F17">
          <circle cx="60" cy="55" r="5" />
          <circle cx="80" cy="50" r="5" />
          <circle cx="98" cy="58" r="5" />
          <circle cx="50" cy="75" r="5" />
          <circle cx="72" cy="70" r="5" />
          <circle cx="92" cy="72" r="5" />
          <circle cx="108" cy="78" r="5" />
          <circle cx="55" cy="95" r="5" />
          <circle cx="78" cy="90" r="5" />
          <circle cx="100" cy="92" r="5" />
          <circle cx="65" cy="108" r="4" />
          <circle cx="88" cy="105" r="4" />
          <circle cx="75" cy="82" r="4" />
        </g>
      </g>

      {/* ORANGE HALF — bottom center */}
      <g transform="translate(400, 620)">
        {/* Outer */}
        <circle cx="90" cy="90" r="85" fill="#FF9800" />
        {/* Inner */}
        <circle cx="90" cy="90" r="70" fill="#FFB74D" />
        {/* Segments */}
        <g stroke="#FF9800" strokeWidth="3" opacity="0.7">
          <line x1="90" y1="25" x2="90" y2="155" />
          <line x1="25" y1="90" x2="155" y2="90" />
          <line x1="44" y1="44" x2="136" y2="136" />
          <line x1="136" y1="44" x2="44" y2="136" />
        </g>
        {/* Center */}
        <circle cx="90" cy="90" r="12" fill="#FF9800" />
      </g>

      {/* SMALL LEMON/CITRUS — bottom left */}
      <g transform="translate(30, 680)">
        <ellipse cx="70" cy="60" rx="65" ry="55" fill="#CDDC39" />
        <ellipse cx="60" cy="50" rx="35" ry="30" fill="#D4E157" opacity="0.5" />
        {/* Leaf */}
        <path d="M120 30 Q155 0 160 30 Q140 40 120 30Z" fill="#2E7D32" />
        <path d="M125 30 Q150 10 155 30" stroke="#1B5E20" strokeWidth="1.5" fill="none" />
      </g>

      {/* SMALL WATERMELON SLICE — left middle (partial, peeking in) */}
      <g transform="translate(-40, 400)">
        <path d="M0 120 Q60 0 120 120Z" fill="#4CAF50" />
        <path d="M8 112 Q60 10 112 112Z" fill="#E53935" />
        <ellipse cx="40" cy="80" rx="4" ry="6" fill="#1B5E20" />
        <ellipse cx="70" cy="70" rx="4" ry="6" fill="#1B5E20" />
        <ellipse cx="55" cy="95" rx="3" ry="5" fill="#1B5E20" />
      </g>
    </svg>
  );
}

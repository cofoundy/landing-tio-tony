export default function HeroPattern() {
  // Mural palette
  const M = "#E91E8C";
  const P = "#9C27B0";
  const G = "#4CAF50";
  const Y = "#FFD600";
  const O = "#FF6D00";
  const B = "#2196F3";

  // r = quarter circle radius matching block edges
  const R = 160;

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* === CLEAN GRID — 6 columns × 3 rows === */}

      {/* Row 1 (0–300) */}
      <rect x="0"    y="0" width="480" height="300" fill={Y} />
      <rect x="480"  y="0" width="240" height="300" fill={M} />
      <rect x="720"  y="0" width="360" height="300" fill={G} />
      <rect x="1080" y="0" width="360" height="300" fill={O} />

      {/* Row 2 (300–600) */}
      <rect x="0"    y="300" width="360" height="300" fill={G} />
      <rect x="360"  y="300" width="300" height="300" fill={P} />
      <rect x="660"  y="300" width="300" height="300" fill={Y} />
      <rect x="960"  y="300" width="240" height="300" fill={B} />
      <rect x="1200" y="300" width="240" height="300" fill={M} />

      {/* Row 3 (600–900) */}
      <rect x="0"    y="600" width="300" height="300" fill={M} />
      <rect x="300"  y="600" width="360" height="300" fill={P} />
      <rect x="660"  y="600" width="300" height="300" fill={G} />
      <rect x="960"  y="600" width="480" height="300" fill={Y} />

      {/* === QUARTER CIRCLES — building block style, attached to block edges === */}

      {/* Block: yellow(row1) has a cyan quarter-circle biting into its bottom-right corner */}
      {/* This reads as: "the blue block(row2) extends a curve into the yellow above" */}
      <path d={`M480 300 L480 ${300 - R} A${R} ${R} 0 0 0 ${480 - R} 300 Z`} fill={B} />

      {/* Block: green(row2) has a yellow quarter-circle in its top-right corner */}
      {/* "The yellow block(row1) extends a curve down into the green below" */}
      <path d={`M360 300 L${360 + R} 300 A${R} ${R} 0 0 0 360 ${300 + R} Z`} fill={Y} />

      {/* Block: purple(row3) has an orange quarter-circle in its top-left corner */}
      <path d={`M300 600 L300 ${600 + R} A${R} ${R} 0 0 0 ${300 + R} 600 Z`} fill={O} />

      {/* === FRUITS === */}

      {/* MANGO — top left on yellow block */}
      <g transform="translate(50, 30) scale(1.15)">
        <ellipse cx="110" cy="115" rx="108" ry="112" fill="#FF9800" />
        <ellipse cx="90" cy="92" rx="58" ry="68" fill="#FFCA28" opacity="0.5" />
        <path d="M132 8 Q178 -28 200 5 Q172 20 132 8Z" fill="#2E7D32" />
        <path d="M136 7 Q172 -14 194 7" stroke="#1B5E20" strokeWidth="2" fill="none" />
        <path d="M125 14 Q98 -12 84 12 Q104 22 125 14Z" fill="#388E3C" />
      </g>

      {/* PINEAPPLE — center, on green/magenta blocks */}
      <g transform="translate(620, 20) scale(1.2)">
        <path d="M80 30 Q55 -38 88 -62 Q92 -16 80 30Z" fill="#2E7D32" />
        <path d="M90 28 Q128 -48 150 -26 Q124 -4 90 28Z" fill="#388E3C" />
        <path d="M72 28 Q30 -28 52 -50 Q64 -12 72 28Z" fill="#43A047" />
        <path d="M96 22 Q140 -22 152 -2 Q128 8 96 22Z" fill="#66BB6A" />
        <path d="M68 24 Q24 -8 38 -36 Q56 -4 68 24Z" fill="#4CAF50" />
        <ellipse cx="84" cy="150" rx="70" ry="115" fill="#FFC107" />
        <g stroke="#F9A825" strokeWidth="1.8" opacity="0.5">
          {[48, 82, 116, 150, 184, 218].map((y) => (
            <line key={`h${y}`} x1="18" y1={y} x2="150" y2={y} />
          ))}
          {[44, 68, 92, 116].map((x) => (
            <line key={`v${x}`} x1={x} y1="38" x2={x} y2="256" />
          ))}
        </g>
      </g>

      {/* WATERMELON — top right, on orange block */}
      <g transform="translate(1060, 20) scale(1.1)">
        <path d="M0 170 Q100 -20 200 170Z" fill="#2E7D32" />
        <path d="M10 162 Q100 -2 190 162Z" fill="#A5D6A7" />
        <path d="M20 154 Q100 12 180 154Z" fill={M} />
        {[
          [60, 95, -15], [100, 82, 5], [140, 100, 12],
          [80, 120, -8], [125, 115, 8], [100, 138, 0],
        ].map(([cx, cy, rot], i) => (
          <ellipse key={`ws${i}`} cx={cx} cy={cy} rx="4" ry="6" fill="#880E4F"
            transform={`rotate(${rot} ${cx} ${cy})`} />
        ))}
      </g>

      {/* PASSION FRUIT — right center, on blue/magenta blocks */}
      <g transform="translate(1140, 360)">
        <circle cx="70" cy="70" r="68" fill="#F9A825" />
        <circle cx="70" cy="70" r="58" fill="#FFAB00" />
        <circle cx="70" cy="70" r="48" fill="#FFF8E1" />
        {[
          [48, 44], [68, 40], [88, 46], [98, 58],
          [40, 62], [60, 56], [80, 58], [94, 68],
          [44, 82], [64, 76], [84, 78], [96, 88],
          [52, 96], [72, 92], [88, 96],
        ].map(([cx, cy], i) => (
          <circle key={`ps${i}`} cx={cx} cy={cy} r={i % 3 === 0 ? 5 : 4} fill="#E65100" />
        ))}
      </g>

      {/* ORANGE HALF — bottom, on purple block */}
      <g transform="translate(440, 740)">
        <path d="M0 70 A70 70 0 0 1 140 70 L0 70Z" fill="#FF9800" />
        <path d="M8 70 A60 60 0 0 1 132 70 L8 70Z" fill="#FFB74D" />
        {[0, 30, 60, 90, 120, 150, 180].map((a) => {
          const r = (a * Math.PI) / 180;
          return <line key={`o${a}`} x1="70" y1="70" x2={70 + Math.cos(r) * 55} y2={70 - Math.sin(r) * 55} stroke="#FF9800" strokeWidth="2.5" />;
        })}
        <circle cx="70" cy="70" r="8" fill="#E65100" />
      </g>

      {/* BANANA — peeking top right edge */}
      <g transform="translate(1360, 10)">
        <ellipse cx="45" cy="100" rx="42" ry="90" fill={Y} />
        <ellipse cx="36" cy="82" rx="22" ry="50" fill="#FFF176" opacity="0.4" />
      </g>
    </svg>
  );
}

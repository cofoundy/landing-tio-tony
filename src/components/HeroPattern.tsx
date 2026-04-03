export default function HeroPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="viewport">
          <rect x="0" y="0" width="1440" height="900" />
        </clipPath>
      </defs>

      <g clipPath="url(#viewport)">
        {/* === BACKGROUND BLOCKS — irregular grid with semicircles === */}

        {/* Row 1 (y: 0–320) */}
        <rect x="0" y="0" width="380" height="320" fill="#FFB300" />
        <rect x="380" y="0" width="220" height="180" fill="#E91E8C" />
        <rect x="380" y="180" width="220" height="140" fill="#00BCD4" />
        <rect x="600" y="0" width="340" height="320" fill="#7CB342" />
        <rect x="940" y="0" width="240" height="180" fill="#E91E8C" />
        <rect x="940" y="180" width="240" height="140" fill="#FF6D00" />
        <rect x="1180" y="0" width="260" height="320" fill="#FFB300" />

        {/* Semicircle overlays on row 1 */}
        <path d="M380 320 A110 110 0 0 1 380 100" fill="#FF6D00" opacity="0.7" />
        <path d="M1180 0 A130 130 0 0 1 1180 260" fill="#E91E8C" opacity="0.5" />
        <circle cx="600" cy="180" r="90" fill="#FFB300" opacity="0.4" />

        {/* Row 2 (y: 320–600) */}
        <rect x="0" y="320" width="200" height="280" fill="#E91E8C" />
        <rect x="200" y="320" width="300" height="280" fill="#8BC34A" />
        <rect x="500" y="320" width="260" height="160" fill="#FFB300" />
        <rect x="500" y="480" width="260" height="120" fill="#E91E8C" />
        <rect x="760" y="320" width="320" height="280" fill="#00BCD4" />
        <rect x="1080" y="320" width="180" height="280" fill="#7CB342" />
        <rect x="1260" y="320" width="180" height="160" fill="#E91E8C" />
        <rect x="1260" y="480" width="180" height="120" fill="#8BC34A" />

        {/* Semicircle overlays on row 2 */}
        <path d="M200 600 A140 140 0 0 0 200 320" fill="#FFB300" opacity="0.5" />
        <path d="M760 600 A100 100 0 0 1 960 600" fill="#7CB342" opacity="0.4" />
        <circle cx="1080" cy="480" r="80" fill="#FFB300" opacity="0.3" />

        {/* Row 3 (y: 600–900) */}
        <rect x="0" y="600" width="320" height="300" fill="#00BCD4" />
        <rect x="320" y="600" width="260" height="300" fill="#E91E8C" />
        <rect x="580" y="600" width="280" height="180" fill="#7CB342" />
        <rect x="580" y="780" width="280" height="120" fill="#FFB300" />
        <rect x="860" y="600" width="300" height="300" fill="#FF6D00" />
        <rect x="1160" y="600" width="280" height="300" fill="#8BC34A" />

        {/* Semicircle overlays on row 3 */}
        <path d="M320 600 A150 150 0 0 1 320 900" fill="#FFB300" opacity="0.5" />
        <path d="M860 900 A120 120 0 0 0 860 660" fill="#E91E8C" opacity="0.4" />
        <circle cx="1160" cy="750" r="100" fill="#00BCD4" opacity="0.35" />

        {/* === FRUITS === */}

        {/* MANGO — top left, large, overlapping blocks */}
        <g transform="translate(60, 30) scale(1.1)">
          <ellipse cx="120" cy="130" rx="115" ry="125" fill="#FF9800" />
          <ellipse cx="100" cy="110" rx="70" ry="80" fill="#FFCA28" opacity="0.45" />
          <ellipse cx="80" cy="85" rx="30" ry="40" fill="#FFE082" opacity="0.4" />
          {/* Stem + leaf */}
          <path d="M140 12 C145 5 150 8 148 15 C146 20 142 18 140 12Z" fill="#5D4037" />
          <path d="M145 15 Q190 -30 215 5 Q185 25 145 15Z" fill="#2E7D32" />
          <path d="M148 14 Q185 -15 205 8" stroke="#1B5E20" strokeWidth="2" fill="none" />
          <path d="M138 18 Q110 -15 95 10 Q115 25 138 18Z" fill="#388E3C" />
        </g>

        {/* PINEAPPLE — center, tallest fruit */}
        <g transform="translate(540, 20) scale(1.15)">
          {/* Crown of leaves — layered */}
          <path d="M95 30 Q70 -40 100 -65 Q105 -20 95 30Z" fill="#2E7D32" />
          <path d="M105 30 Q140 -50 160 -30 Q135 -5 105 30Z" fill="#43A047" />
          <path d="M90 30 Q45 -30 65 -55 Q80 -15 90 30Z" fill="#388E3C" />
          <path d="M110 25 Q155 -25 165 -5 Q140 5 110 25Z" fill="#66BB6A" />
          <path d="M85 25 Q35 -10 50 -40 Q70 -5 85 25Z" fill="#4CAF50" />
          <path d="M100 20 Q120 -35 140 -45 Q125 -10 100 20Z" fill="#81C784" />
          {/* Body — rounder, more realistic */}
          <ellipse cx="100" cy="160" rx="75" ry="125" fill="#FFC107" />
          <ellipse cx="100" cy="155" rx="65" ry="110" fill="#FFD54F" opacity="0.3" />
          {/* Diamond cross-hatch pattern */}
          <g stroke="#F9A825" strokeWidth="1.8" opacity="0.5">
            {[45, 85, 125, 165, 205, 245].map((y) => (
              <line key={`h${y}`} x1="30" y1={y} x2="170" y2={y} />
            ))}
            {[55, 80, 105, 130, 155].map((x) => (
              <line key={`v${x}`} x1={x} y1="40" x2={x} y2="275" />
            ))}
          </g>
          <ellipse cx="78" cy="120" rx="20" ry="45" fill="#FFE082" opacity="0.25" />
        </g>

        {/* WATERMELON SLICE — top right, triangular */}
        <g transform="translate(1020, 15) scale(1.1)">
          {/* Green rind */}
          <path d="M0 180 Q110 -30 220 180Z" fill="#388E3C" />
          <path d="M8 172 Q110 -12 212 172Z" fill="#66BB6A" />
          {/* White rind */}
          <path d="M16 164 Q110 5 204 164Z" fill="#E8F5E9" />
          {/* Red flesh */}
          <path d="M24 156 Q110 18 196 156Z" fill="#E53935" />
          <path d="M35 148 Q110 30 185 148Z" fill="#EF5350" opacity="0.4" />
          {/* Seeds — tear-drop shaped */}
          {[
            [70, 100, -20], [110, 85, 8], [150, 105, 15],
            [90, 125, -10], [130, 120, 5], [80, 75, -5],
            [140, 80, 12], [110, 140, 0],
          ].map(([cx, cy, rot], i) => (
            <ellipse
              key={`ws${i}`}
              cx={cx} cy={cy} rx="4.5" ry="7.5"
              fill="#1B5E20"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
        </g>

        {/* PASSION FRUIT — right side, cut in half */}
        <g transform="translate(1100, 400) scale(1.05)">
          <circle cx="85" cy="85" r="82" fill="#F9A825" />
          <circle cx="85" cy="85" r="75" fill="#FFAB00" opacity="0.5" />
          <circle cx="85" cy="85" r="62" fill="#FFF8E1" />
          {/* Pulp ring */}
          <circle cx="85" cy="85" r="62" fill="none" stroke="#FFD54F" strokeWidth="8" opacity="0.4" />
          {/* Seeds — scattered organically */}
          {[
            [58, 55], [78, 48], [98, 55], [110, 68],
            [48, 75], [70, 68], [90, 70], [115, 82],
            [52, 95], [75, 88], [95, 90], [108, 100],
            [60, 112], [82, 108], [100, 112],
            [72, 78], [88, 82], [65, 98],
          ].map(([cx, cy], i) => (
            <circle key={`ps${i}`} cx={cx} cy={cy} r={i % 3 === 0 ? 5.5 : 4.5} fill="#E65100" opacity="0.85" />
          ))}
        </g>

        {/* ORANGE HALF — bottom center-left */}
        <g transform="translate(370, 610) scale(1.1)">
          <circle cx="95" cy="95" r="92" fill="#FF9800" />
          <circle cx="95" cy="95" r="82" fill="#FFB74D" />
          <circle cx="95" cy="95" r="75" fill="#FFCC80" opacity="0.5" />
          {/* Segments — radial lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`os${angle}`}
                x1="95" y1="95"
                x2={95 + Math.cos(rad) * 72}
                y2={95 + Math.sin(rad) * 72}
                stroke="#FF9800" strokeWidth="3" opacity="0.6"
              />
            );
          })}
          <circle cx="95" cy="95" r="14" fill="#FF9800" />
          <circle cx="95" cy="95" r="8" fill="#E65100" opacity="0.3" />
        </g>

        {/* LEMON — bottom left, partially visible */}
        <g transform="translate(10, 660) scale(1.05)">
          <ellipse cx="80" cy="70" rx="78" ry="65" fill="#CDDC39" />
          <ellipse cx="65" cy="55" rx="40" ry="35" fill="#D4E157" opacity="0.5" />
          <ellipse cx="55" cy="45" rx="18" ry="15" fill="#E6EE9C" opacity="0.35" />
          {/* Leaf */}
          <path d="M145 35 Q180 0 185 35 Q165 50 145 35Z" fill="#2E7D32" />
          <path d="M150 36 Q175 10 180 35" stroke="#1B5E20" strokeWidth="1.8" fill="none" />
        </g>

        {/* SMALL WATERMELON — left edge, peeking */}
        <g transform="translate(-50, 370)">
          <path d="M0 140 A70 70 0 0 1 140 140Z" fill="#388E3C" />
          <path d="M10 135 A60 60 0 0 1 130 135Z" fill="#E53935" />
          <ellipse cx="45" cy="105" rx="4" ry="6" fill="#1B5E20" />
          <ellipse cx="75" cy="95" rx="4" ry="6" fill="#1B5E20" />
          <ellipse cx="100" cy="110" rx="3.5" ry="5.5" fill="#1B5E20" />
          <ellipse cx="60" cy="120" rx="3" ry="5" fill="#1B5E20" />
        </g>

        {/* SMALL MANGO — bottom right, partial */}
        <g transform="translate(1300, 720)">
          <ellipse cx="80" cy="80" rx="90" ry="85" fill="#FF9800" />
          <ellipse cx="65" cy="65" rx="50" ry="45" fill="#FFCA28" opacity="0.4" />
          <path d="M85 0 Q110 -25 120 5 Q105 15 85 0Z" fill="#2E7D32" />
        </g>

        {/* Extra semicircle decorations overlapping fruits — like the mural */}
        <path d="M0 0 A180 180 0 0 1 0 360" fill="#00BCD4" opacity="0.15" />
        <path d="M1440 450 A160 160 0 0 0 1440 770" fill="#FFB300" opacity="0.15" />
        <path d="M720 900 A200 200 0 0 1 1120 900" fill="#E91E8C" opacity="0.12" />
      </g>
    </svg>
  );
}

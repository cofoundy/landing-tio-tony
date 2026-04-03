export default function HeroPattern() {
  // Colors extracted from the actual mural
  const C = {
    magenta: "#E91E8C",
    purple: "#9C27B0",
    green: "#4CAF50",
    lime: "#7CB342",
    yellow: "#FFD600",
    orange: "#FF6D00",
    blue: "#2196F3",
    darkGreen: "#2E7D32",
  };

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="vp"><rect x="0" y="0" width="1440" height="900" /></clipPath>
      </defs>

      <g clipPath="url(#vp)">
        {/* ======= ROW 1 (y: 0–300) ======= */}
        <rect x="0" y="0" width="260" height="300" fill={C.yellow} />
        <rect x="260" y="0" width="220" height="180" fill={C.purple} />
        <rect x="260" y="180" width="220" height="120" fill={C.green} />
        <rect x="480" y="0" width="300" height="300" fill={C.green} />
        <rect x="780" y="0" width="300" height="180" fill={C.orange} />
        <rect x="780" y="180" width="140" height="120" fill={C.yellow} />
        <rect x="920" y="180" width="160" height="120" fill={C.blue} />
        <rect x="1080" y="0" width="200" height="300" fill={C.magenta} />
        <rect x="1280" y="0" width="160" height="180" fill={C.yellow} />
        <rect x="1280" y="180" width="160" height="120" fill={C.blue} />

        {/* Quarter circle: yellow on blue, bottom-left corner of block */}
        <path d="M480 300 A120 120 0 0 1 480 180 L480 300Z" fill={C.yellow} />
        {/* Quarter circle: top-right corner */}
        <path d="M1080 0 A130 130 0 0 1 1080 130 L1080 0Z" fill={C.purple} />

        {/* ======= ROW 2 (y: 300–600) ======= */}
        <rect x="0" y="300" width="180" height="300" fill={C.magenta} />
        <rect x="180" y="300" width="200" height="180" fill={C.green} />
        <rect x="180" y="480" width="200" height="120" fill={C.yellow} />
        <rect x="380" y="300" width="180" height="300" fill={C.purple} />
        <rect x="560" y="300" width="280" height="160" fill={C.orange} />
        <rect x="560" y="460" width="140" height="140" fill={C.yellow} />
        <rect x="700" y="460" width="140" height="140" fill={C.blue} />
        <rect x="840" y="300" width="240" height="300" fill={C.magenta} />
        <rect x="1080" y="300" width="200" height="300" fill={C.green} />
        <rect x="1280" y="300" width="160" height="160" fill={C.purple} />
        <rect x="1280" y="460" width="160" height="140" fill={C.blue} />

        {/* Quarter circle: green on purple, top-right corner */}
        <path d="M560 300 L560 420 A120 120 0 0 1 560 300Z" fill={C.green} />
        {/* Quarter circle: yellow on magenta, bottom-left */}
        <path d="M840 600 A100 100 0 0 0 840 500 L840 600Z" fill={C.yellow} />

        {/* Diagonal cut: bottom-right block */}
        <polygon points="1280,460 1440,460 1440,600 1280,600" fill={C.blue} />
        <polygon points="1280,460 1440,600 1280,600" fill={C.green} />

        {/* ======= ROW 3 (y: 600–900) ======= */}
        <rect x="0" y="600" width="250" height="300" fill={C.green} />
        <rect x="250" y="600" width="220" height="180" fill={C.yellow} />
        <rect x="250" y="780" width="220" height="120" fill={C.blue} />
        <rect x="470" y="600" width="260" height="300" fill={C.magenta} />
        <rect x="730" y="600" width="200" height="160" fill={C.green} />
        <rect x="730" y="760" width="200" height="140" fill={C.yellow} />
        <rect x="930" y="600" width="260" height="300" fill={C.purple} />
        <rect x="1190" y="600" width="250" height="180" fill={C.orange} />
        <rect x="1190" y="780" width="250" height="120" fill={C.green} />

        {/* Quarter circle: magenta on green, top-left corner */}
        <path d="M0 600 A140 140 0 0 0 140 600 L0 600Z" fill={C.magenta} />
        {/* Quarter circle: orange on purple, bottom-right */}
        <path d="M1190 900 A120 120 0 0 1 1190 780 L1190 900Z" fill={C.orange} />

        {/* Diagonal cut: bottom area */}
        <polygon points="730,760 930,760 930,900 730,900" fill={C.yellow} />
        <polygon points="730,760 930,900 730,900" fill={C.green} />

        {/* ======= FRUITS ======= */}

        {/* MANGO — top left, overlapping yellow+purple blocks */}
        <g transform="translate(40, 25) scale(1.15)">
          <ellipse cx="115" cy="125" rx="112" ry="120" fill="#FF9800" />
          <ellipse cx="95" cy="100" rx="65" ry="75" fill="#FFCA28" opacity="0.5" />
          <ellipse cx="80" cy="80" rx="28" ry="38" fill="#FFE082" opacity="0.45" />
          <path d="M135 10 C140 3 146 6 144 14 C142 19 137 16 135 10Z" fill="#5D4037" />
          <path d="M140 14 Q185 -28 210 5 Q180 22 140 14Z" fill={C.darkGreen} />
          <path d="M143 12 Q180 -12 200 8" stroke="#1B5E20" strokeWidth="2" fill="none" />
          <path d="M133 17 Q105 -12 90 12 Q110 24 133 17Z" fill="#388E3C" />
        </g>

        {/* PINEAPPLE — center, largest */}
        <g transform="translate(530, 60) scale(1.2)">
          {/* Leaves */}
          <path d="M95 30 Q68 -45 102 -70 Q107 -22 95 30Z" fill={C.darkGreen} />
          <path d="M105 28 Q142 -52 162 -32 Q136 -6 105 28Z" fill="#388E3C" />
          <path d="M88 28 Q42 -32 64 -58 Q78 -16 88 28Z" fill="#43A047" />
          <path d="M112 22 Q158 -28 168 -8 Q142 4 112 22Z" fill="#66BB6A" />
          <path d="M82 24 Q32 -12 48 -42 Q68 -8 82 24Z" fill="#4CAF50" />
          <path d="M100 18 Q122 -38 142 -48 Q128 -12 100 18Z" fill="#81C784" />
          {/* Body */}
          <ellipse cx="100" cy="155" rx="78" ry="120" fill="#FFC107" />
          {/* Cross-hatch diamond pattern */}
          <g stroke="#F9A825" strokeWidth="2" opacity="0.55">
            {[45, 85, 125, 165, 205, 240].map((y) => (
              <line key={`h${y}`} x1="28" y1={y} x2="172" y2={y} />
            ))}
            {[50, 75, 100, 125, 150].map((x) => (
              <line key={`v${x}`} x1={x} y1="38" x2={x} y2="268" />
            ))}
          </g>
          {/* Dots at intersections */}
          {[
            [75, 85], [100, 85], [125, 85],
            [75, 125], [100, 125], [125, 125],
            [75, 165], [100, 165], [125, 165],
            [75, 205], [100, 205], [125, 205],
          ].map(([cx, cy], i) => (
            <circle key={`pd${i}`} cx={cx} cy={cy} r="3" fill="#F57F17" opacity="0.6" />
          ))}
        </g>

        {/* WATERMELON — top right, big triangle slice, PINK flesh (not red, like mural) */}
        <g transform="translate(980, 10) scale(1.15)">
          {/* Green rind */}
          <path d="M0 190 Q120 -30 240 190Z" fill={C.darkGreen} />
          {/* Light rind edge */}
          <path d="M12 180 Q120 -10 228 180Z" fill="#A5D6A7" />
          {/* Pink flesh (matching the mural — it's pink, not red) */}
          <path d="M22 172 Q120 8 218 172Z" fill="#E91E8C" />
          <path d="M34 162 Q120 22 206 162Z" fill="#EC407A" opacity="0.4" />
          {/* Seeds */}
          {[
            [70, 110, -18], [120, 95, 5], [160, 115, 12],
            [90, 135, -8], [140, 130, 10], [110, 150, 0],
            [80, 80, -10], [150, 85, 8],
          ].map(([cx, cy, rot], i) => (
            <ellipse
              key={`ws${i}`}
              cx={cx} cy={cy} rx="4" ry="7"
              fill="#880E4F"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
        </g>

        {/* PASSION FRUIT — right center */}
        <g transform="translate(1080, 380) scale(1.05)">
          <circle cx="85" cy="85" r="80" fill="#F9A825" />
          <circle cx="85" cy="85" r="70" fill="#FFAB00" />
          <circle cx="85" cy="85" r="60" fill="#FFF8E1" />
          {/* Seeds */}
          {[
            [58, 52], [78, 46], [98, 52], [112, 66],
            [46, 72], [68, 66], [88, 68], [108, 78],
            [50, 92], [72, 86], [92, 88], [110, 96],
            [58, 110], [80, 105], [100, 108],
            [70, 76], [86, 80], [64, 96],
          ].map(([cx, cy], i) => (
            <circle key={`ps${i}`} cx={cx} cy={cy} r={i % 3 === 0 ? 5.5 : 4.5} fill="#E65100" />
          ))}
        </g>

        {/* ORANGE HALF — bottom, semicircle on magenta block */}
        <g transform="translate(540, 710)">
          {/* Half orange — flat bottom */}
          <path d="M0 95 A95 95 0 0 1 190 95 L0 95Z" fill="#FF9800" />
          <path d="M10 95 A82 82 0 0 1 180 95 L10 95Z" fill="#FFB74D" />
          {/* Segments */}
          {[0, 30, 60, 90, 120, 150, 180].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={`os${angle}`}
                x1="95" y1="95"
                x2={95 + Math.cos(rad) * 75}
                y2={95 - Math.sin(rad) * 75}
                stroke="#FF9800" strokeWidth="3"
              />
            );
          })}
          <circle cx="95" cy="95" r="12" fill="#FF9800" />
        </g>

        {/* CITRUS/LEMON — bottom left, partial */}
        <g transform="translate(-10, 650) scale(1.05)">
          <ellipse cx="80" cy="75" rx="80" ry="68" fill="#CDDC39" />
          <ellipse cx="65" cy="58" rx="42" ry="36" fill="#D4E157" opacity="0.5" />
          <path d="M148 38 Q182 5 186 40 Q168 52 148 38Z" fill={C.darkGreen} />
          <path d="M152 39 Q178 14 182 40" stroke="#1B5E20" strokeWidth="2" fill="none" />
        </g>

        {/* SMALL MANGO — peeking bottom right */}
        <g transform="translate(1300, 700)">
          <ellipse cx="85" cy="85" rx="95" ry="90" fill="#FF9800" />
          <ellipse cx="68" cy="68" rx="50" ry="48" fill="#FFCA28" opacity="0.45" />
          <path d="M90 2 Q118 -22 126 8 Q110 18 90 2Z" fill={C.darkGreen} />
        </g>

        {/* BANANA/LEMON shape — top right edge, peeking like in mural */}
        <g transform="translate(1340, 0)">
          <ellipse cx="60" cy="120" rx="55" ry="110" fill={C.yellow} />
          <ellipse cx="48" cy="100" rx="30" ry="65" fill="#FFF176" opacity="0.4" />
        </g>
      </g>
    </svg>
  );
}

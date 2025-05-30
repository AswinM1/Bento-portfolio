// components/NoiseOverlay.jsx
export default function NoiseOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="1.36" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="linear" slope="0.46" />
          <feFuncG type="linear" slope="0.46" />
          <feFuncB type="linear" slope="0.46" />
          <feFuncA type="linear" slope="0.56" />
        </feComponentTransfer>
        <feComponentTransfer>
          <feFuncR type="linear" slope="1.47" intercept="-0.23" />
          <feFuncG type="linear" slope="1.47" intercept="-0.23" />
          <feFuncB type="linear" slope="1.47" intercept="-0.23" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}

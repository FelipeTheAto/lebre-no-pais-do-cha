interface FluidDividerProps {
  fromColor: string;
  toColor: string;
  variant?: 'wave' | 'blob' | 'drip';
  flip?: boolean;
}

const FluidDivider = ({ fromColor, toColor, variant = 'wave', flip = false }: FluidDividerProps) => {
  const paths: Record<string, string> = {
    wave: "M0,80 C150,120 350,0 500,60 C650,120 850,20 1000,80 L1000,200 L0,200 Z",
    blob: "M0,100 C100,40 200,140 350,80 C500,20 600,120 750,70 C900,20 950,100 1000,80 L1000,200 L0,200 Z",
    drip: "M0,60 C80,60 120,120 200,100 C280,80 320,40 400,80 C480,120 560,60 640,90 C720,120 800,50 880,80 C960,110 980,70 1000,80 L1000,200 L0,200 Z",
  };

  return (
    <div
      className="fluid-divider relative z-10 pointer-events-none"
      style={{ transform: flip ? 'scaleY(-1)' : undefined, marginTop: '-1px', marginBottom: '-1px' }}
    >
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: 'clamp(60px, 8vw, 120px)', display: 'block' }}
      >
        <defs>
          <linearGradient id={`grad-${variant}-${fromColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <rect width="1000" height="200" fill={fromColor} />
        <path d={paths[variant]} fill={toColor} />
      </svg>
    </div>
  );
};

export default FluidDivider;

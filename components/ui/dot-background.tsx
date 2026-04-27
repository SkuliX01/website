interface DotPatternProps {
  dotColor?: string;
  dotSize?: number;
  gapSize?: number;
  backgroundOpacity?: number;
  className?: string;
}

export function DotPattern({
  dotColor = "#d4cfc9",
  dotSize = 1.4,
  gapSize = 24,
  backgroundOpacity = 0.1,
  className = "",
}: DotPatternProps) {
  return (
    <div
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gapSize}px ${gapSize}px`,
        opacity: backgroundOpacity,
      }}
    />
  );
}

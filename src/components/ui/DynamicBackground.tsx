export default function DynamicBackground() {
  return (
    <div className="absolute inset-0 page-radial">
      <div className="absolute inset-0 subtle-dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
    </div>
  );
}

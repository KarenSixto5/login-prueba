export default function WaveBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <div className="wave-blob wave-blob-a" />
      <div className="wave-blob wave-blob-b" />
    </div>
  );
}

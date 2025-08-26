export default function PageShell({ bgUrl, children }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#8f0000]">
      {/* transparent overlay image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      {/* content wrapper */}
      <div className="relative max-w-6xl mx-auto px-5 py-8 md:py-12">
        {children}
      </div>
    </section>
  );
}
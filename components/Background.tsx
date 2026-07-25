"use client";

export default function Background() {
  return (
    <>
      {/* Glow */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-52 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-blue-500/5 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] bg-blue-400/5 blur-[150px]" />
      </div>

      {/* Grid */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff22 1px, transparent 1px),
            linear-gradient(90deg,#ffffff22 1px,transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}
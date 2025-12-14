// src/components/PageBackground.jsx
export default function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Base */}
      <div className="absolute inset-0 bg-white dark:bg-slate-900 transition-colors" />

      {/* Soft radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(34,211,238,0.10),transparent_60%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07]
        bg-[linear-gradient(to_right,rgba(15,23,42,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.35)_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]
        bg-[size:64px_64px]"
      />
    </div>
  );
}

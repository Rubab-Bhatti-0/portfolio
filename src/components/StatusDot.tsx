export default function StatusDot({ color = "cyan" }: { color?: "cyan" | "amber" }) {
  const dot = color === "cyan" ? "bg-[var(--color-cyan)]" : "bg-[var(--color-amber)]";
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${dot}`} />
    </span>
  );
}

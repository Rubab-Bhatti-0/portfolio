export default function StatusDot({ color = "primary" }: { color?: "primary" | "secondary" | "error" | "cyan" | "amber" }) {
  let dot = "bg-primary";
  if (color === "secondary" || color === "amber") {
    dot = "bg-secondary";
  } else if (color === "error") {
    dot = "bg-error";
  } else if (color === "cyan") {
    dot = "bg-primary";
  }

  return (
    <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dot} opacity-60`} />
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot}`} />
    </span>
  );
}

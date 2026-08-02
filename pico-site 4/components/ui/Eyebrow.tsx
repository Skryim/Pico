export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`mb-3.5 block font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-blue-dark ${className}`}
    >
      {children}
    </span>
  );
}

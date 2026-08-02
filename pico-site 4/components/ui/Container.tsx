export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-content px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

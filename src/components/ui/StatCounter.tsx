type StatCounterProps = {
  value: string;
  label: string;
};

export function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl font-semibold text-foreground md:text-4xl">{value}</span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}

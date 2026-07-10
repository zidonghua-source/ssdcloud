import { Input } from "../ui/input";

export function DriveToolbar({ title, onSearchChange, actions }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
      <Input placeholder="Search in current folder (phase 2)" onChange={(e) => onSearchChange?.(e.target.value)} />
    </div>
  );
}

import { Button } from "../ui/button";

export function DriveBreadcrumb({ items, onOpenRoot, onOpenItem }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <Button size="sm" variant="ghost" onClick={onOpenRoot}>
        My Drive
      </Button>
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <span className="text-muted-foreground">/</span>
          <Button size="sm" variant="ghost" onClick={() => onOpenItem?.(item)}>
            {item.name}
          </Button>
        </div>
      ))}
    </div>
  );
}

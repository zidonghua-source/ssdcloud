import { Button } from "../ui/button";

function itemIcon(type) {
  return type === "folder" ? "📁" : "📄";
}

export function DriveItemGrid({ items, onOpenItem, onDeleteItem }) {
  if (!items.length) {
    return <p className="text-sm text-muted-foreground">Folder is empty.</p>;
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-lg border p-3">
          <div className="flex items-start justify-between gap-2">
            <button className="flex flex-1 items-center gap-2 text-left" onClick={() => onOpenItem?.(item)}>
              <span>{itemIcon(item.type)}</span>
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.type}</div>
              </div>
            </button>
            <Button size="sm" variant="outline" onClick={() => onDeleteItem?.(item)}>
              Delete
            </Button>
          </div>
          {item.type === "file" && item.file && (
            <div className="mt-2 text-xs text-muted-foreground">
              {item.file.sizeBytes} bytes - {item.file.mimeType}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

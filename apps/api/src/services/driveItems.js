export function normalizeOptionalParentId(value) {
  if (value == null) {
    return null;
  }
  const normalized = String(value).trim();
  if (!normalized || normalized === "null" || normalized === "root") {
    return null;
  }
  return normalized;
}

export function sortDriveItems(items) {
  return [...items].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "folder" ? -1 : 1;
    }
    return String(a.name || "").localeCompare(String(b.name || ""));
  });
}

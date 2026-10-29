// Explicit calendar dates keep the release history consistent across time zones.
export const releases = [
  { version: "0.7.7", date: "2026-10-30", key: "v077" },
  { version: "0.7.4", date: "2026-10-24", key: "v074" },
  { version: "0.7.3", date: "2026-10-20", key: "v073" },
  { version: "0.7.2", date: "2026-10-18", key: "v072" },
  { version: "0.5.2", date: "2026-08-24", key: "v052" },
  { version: "0.5.1", date: "2026-08-19", key: "v051" },
  { version: "0.5.0", date: "2026-08-19", key: "v050" },
] as const;

export const LATEST_VERSION = releases[0].version;

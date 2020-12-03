export function isInJest() {
  return process.env.JEST_WORKER_ID != null;
}

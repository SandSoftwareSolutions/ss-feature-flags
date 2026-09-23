function hash(input) {
  let value = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    value ^= input.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

export function inRollout(key, subject, percentage) {
  if (typeof key !== "string" || !key) throw new TypeError("key must be a non-empty string");
  if (typeof subject !== "string" || !subject) throw new TypeError("subject must be a non-empty string");
  if (!Number.isFinite(percentage) || percentage < 0 || percentage > 100) throw new RangeError("percentage must be between 0 and 100");
  return hash(`${key}:${subject}`) % 10000 < Math.round(percentage * 100);
}

export function evaluate(flag, context = {}) {
  if (!flag || typeof flag !== "object") throw new TypeError("flag must be an object");
  if (flag.enabled === false) return false;
  if (Array.isArray(flag.allow) && !flag.allow.includes(context.id)) return false;
  if (Array.isArray(flag.deny) && flag.deny.includes(context.id)) return false;
  if (flag.rollout == null) return flag.enabled ?? false;
  return inRollout(flag.key, String(context.id ?? "anonymous"), flag.rollout);
}

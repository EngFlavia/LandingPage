function repairText(value: string) {
  if (!/[ÃÂ]/.test(value)) {
    return value;
  }

  const bytes = Uint8Array.from(Array.from(value).map((char) => char.charCodeAt(0)));

  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    return value;
  }
}

function normalizeValue<T>(value: T): T {
  if (typeof value === 'string') {
    return repairText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeValue(item)) as T;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value).map(([key, entryValue]) => [key, normalizeValue(entryValue)]);
    return Object.fromEntries(entries) as T;
  }

  return value;
}

export function getPortfolioData<T>(data: T): T {
  return normalizeValue(data);
}

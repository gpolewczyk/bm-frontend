export const sessionGet = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const sessionSet = (key: string, value: string): string | null => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return null;
  }
};

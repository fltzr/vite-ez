export const save = <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value));
export const load = <T>(key: string): T | undefined => {
  const value = localStorage.getItem(key);

  try {
    return value && JSON.parse(value);
  } catch (e) {
    console.warn(
      `❗ The ${key} value that is stored in localstorage is incorrect. Try to remove the value ${key} from localstorage and reload the page.`
    );
  }
};

export const remove = (key: string) => localStorage.removeItem(key);

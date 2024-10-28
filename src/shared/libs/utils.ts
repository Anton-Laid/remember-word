export const setLocalStorageToken = (nameState: string, date: string) => {
  localStorage.setItem(nameState, date);
};

export const getLocalStorage = (nameState: string): string => {
  return localStorage.getItem(nameState) || "";
};

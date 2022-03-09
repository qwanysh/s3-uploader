class LocalStorageService {
  get(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }

  set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}

export default new LocalStorageService();

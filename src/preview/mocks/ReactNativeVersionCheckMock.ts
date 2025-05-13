export default {
  getCurrentVersion: () => "0.0.1",
  getStoreUrl: () => "",
  getCountry: () => "US",
  getPackageName: () => "com.example.app",
  needUpdate: () => Promise.resolve({ isNeeded: false }),
};

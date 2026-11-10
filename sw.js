self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 只要这个文件存在并注册成功，Chrome 就会认可它是 App
});
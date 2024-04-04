// Register service worker
window?.addEventListener('load', async () => {
  console.log('Hi! Join my github, telegram and visite my website:');
  console.log('Website: https://shomaqsudov.uz');
  console.log('Github: https://github.com/Jasurbek2208');
  console.log('Telegram: https://t.me/JasurbekFrontend');
  console.log('Good luck!');

  if ('serviceWorker' in navigator) {
    try {
      await navigator?.serviceWorker?.register('sw.js')
    } catch (e) {
      console.log('Service worker register fail')
    }
  }
})
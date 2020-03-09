if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-wroker.js').then(function(registration) {
        console.log('注册成功:', registration.scope);
      }).catch(function(err) {
        console.log('注册失败:', err);
      });
    })
}
console.log('pwa 打包测试')
\
(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('swing-theme');

  if (saved === 'light' || saved === 'dark') {
    root.dataset.theme = saved;
  }

  const updateIcon = () => {
    if (!button) return;
    button.querySelector('span').textContent = root.dataset.theme === 'light' ? '☾' : '☼';
  };

  updateIcon();

  button?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('swing-theme', root.dataset.theme);
    updateIcon();
  });
})();

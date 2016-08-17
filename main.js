const hello = world => {
  const root = document.querySelector('.root');
  root.innerHTML = `Hello ${world}!`;
};

document.addEventListener(
  'DOMContentLoaded',
  hello('👋')
);

document.addEventListener('DOMContentLoaded', () => {
  const detailPhotoByClass = {
    'card-lavender': ['assets/vanilla-photo.jpg', 'Cloud Nine vanilla bean ice cream photo'],
    'card-berry': ['assets/berry-photo.jpg', 'Berry Blush strawberry hibiscus ice cream photo'],
    'card-green': ['assets/pistachio-photo.jpg', 'Golden Hour pistachio honey ice cream photo'],
    'card-caramel': ['assets/caramel-photo.jpg', 'Afterglow salted caramel ice cream photo']
  };
  const detailArt = document.querySelector('.detail-art');
  if (detailArt) {
    const photo = Object.entries(detailPhotoByClass).find(([className]) => detailArt.classList.contains(className));
    const image = detailArt.querySelector('img');
    if (photo && image) {
      image.src = photo[1][0];
      image.alt = photo[1][1];
    }
  }

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  const toast = document.querySelector('.toast');
  document.querySelectorAll('[data-order]').forEach(button => button.addEventListener('click', event => {
    if (!toast) return;
    toast.textContent = 'Perfect choice. We’ll have a scoop waiting for you ✦';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3400);
  }));
});

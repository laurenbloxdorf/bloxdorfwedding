// ---- Set your wedding date/time here (local time) ----
const WEDDING_DATE = new Date('2027-08-12T14:00:00');

function updateCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const now = new Date();
  const diffMs = WEDDING_DATE - now;
  if (diffMs <= 0) {
    el.textContent = "It's the big day!";
    return;
  }
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  el.textContent = `${days} day${days === 1 ? '' : 's'} to go`;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // refresh hourly is plenty

// ---- Mobile nav toggle ----
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

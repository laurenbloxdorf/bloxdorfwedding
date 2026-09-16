// ---- Set your wedding date/time here (local time) ----
const WEDDING_DATE = new Date('2027-06-12T16:00:00');

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

// ---- Splash screen + Spotify player ----
// Replace TRACK_ID below with your own if the song ever changes:
// grab it from the Spotify share link — open.spotify.com/track/TRACK_ID
const SPOTIFY_TRACK_ID = '6ATrsVaZT7XjkCynxM8cTS';

const splash = document.getElementById('splash');
const enterBtn = document.getElementById('enterBtn');
const musicPlayer = document.getElementById('musicPlayer');

if (splash && enterBtn && musicPlayer) {
  // Skip the splash on repeat visits within the same browser session
  if (sessionStorage.getItem('wedding-entered') === 'true') {
    splash.classList.add('hidden');
    setTimeout(() => { splash.style.display = 'none'; }, 0);
  }

  enterBtn.addEventListener('click', () => {
    sessionStorage.setItem('wedding-entered', 'true');
    splash.classList.add('hidden');
    setTimeout(() => { splash.style.display = 'none'; }, 700);

    // Load the Spotify player only now, inside the click handler,
    // so the browser treats the resulting playback as user-initiated.
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator&autoplay=1`;
    iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';
    musicPlayer.appendChild(iframe);
    musicPlayer.classList.add('visible');
  });
}

// ---- Mobile nav toggle ----
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

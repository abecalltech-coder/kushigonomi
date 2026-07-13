@import url('https://fonts.googleapis.com/css2?family=Yuji+Syuku&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap');

:root {
  --bg: #1b1512;
  --bg-deep: #100c0a;
  --wood: #2e2119;
  --wood-light: #4a3527;
  --red: #c8372b;
  --red-light: #e2543f;
  --red-deep: #8f2318;
  --gold: #e3ac52;
  --gold-soft: #f2d9a1;
  --cream: #f4e9d8;
  --cream-dim: #cdbfae;
  --shadow: rgba(0, 0, 0, 0.55);
  --font-brush: 'Yuji Syuku', serif;
  --font-body: 'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg);
  background-image:
    radial-gradient(ellipse at 20% 0%, rgba(200, 55, 43, 0.10), transparent 55%),
    radial-gradient(ellipse at 80% 10%, rgba(227, 172, 82, 0.07), transparent 45%),
    repeating-linear-gradient(0deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 3px);
  color: var(--cream);
  font-family: var(--font-body);
  line-height: 1.85;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

.wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

/* ---------- Noren loading curtain ---------- */
.noren-curtain {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  pointer-events: none;
}
.noren-curtain span {
  flex: 1;
  background: linear-gradient(180deg, var(--red-deep), var(--red));
  transform-origin: top;
  animation: norenOpen 1s cubic-bezier(.7,0,.3,1) forwards;
  animation-delay: .15s;
}
.noren-curtain span:nth-child(2) { animation-delay: .25s; }
.noren-curtain span:nth-child(3) { animation-delay: .35s; }
.noren-curtain span:nth-child(4) { animation-delay: .45s; }
@keyframes norenOpen {
  0% { transform: scaleY(1); }
  100% { transform: scaleY(0); }
}

/* ---------- Header ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 500;
  background: rgba(16, 12, 10, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(227, 172, 82, 0.25);
  transition: box-shadow .3s ease;
}
.site-header.scrolled { box-shadow: 0 8px 24px var(--shadow); }
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  max-width: 1080px;
  margin: 0 auto;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-brush);
  font-size: 1.6rem;
  color: var(--gold-soft);
  letter-spacing: .05em;
}
.logo .lantern-mini { width: 26px; height: 34px; animation: swing 3.2s ease-in-out infinite; transform-origin: top center; }
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav a {
  font-size: .95rem;
  letter-spacing: .08em;
  color: var(--cream-dim);
  position: relative;
  padding: 4px 0;
  transition: color .25s ease;
}
.nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -4px;
  width: 0; height: 2px;
  background: var(--red-light);
  transition: width .3s ease;
}
.nav a:hover, .nav a.active { color: var(--gold-soft); }
.nav a:hover::after, .nav a.active::after { width: 100%; }
.nav .btn-call {
  background: var(--red);
  color: var(--cream);
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid rgba(227,172,82,.5);
}
.nav .btn-call:hover { background: var(--red-light); }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.hamburger span { width: 24px; height: 2px; background: var(--gold-soft); transition: all .3s ease; }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 999px;
  font-size: .95rem;
  letter-spacing: .08em;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}
.btn-primary {
  background: linear-gradient(135deg, var(--red), var(--red-deep));
  color: var(--cream);
  box-shadow: 0 6px 18px rgba(200,55,43,.35);
}
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 26px rgba(200,55,43,.5); }
.btn-outline {
  background: transparent;
  color: var(--gold-soft);
  border-color: var(--gold);
}
.btn-outline:hover { background: rgba(227,172,82,.12); transform: translateY(-3px); }

/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: 120px 24px 80px;
}
.hero::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(circle at 50% 30%, rgba(200,55,43,.22), transparent 60%),
    linear-gradient(180deg, var(--bg-deep), var(--bg) 60%);
  z-index: 0;
}
.hero-lanterns {
  position: absolute;
  top: 0; left: 0; right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 6%;
  z-index: 1;
  pointer-events: none;
}
.hero-lanterns .lantern { width: 70px; animation: swing 4s ease-in-out infinite; transform-origin: top center; opacity: .85; }
.hero-lanterns .lantern:nth-child(2) { animation-delay: .6s; width: 50px; opacity: .6; margin-top: 40px; }
.hero-lanterns .lantern:nth-child(3) { animation-delay: 1.2s; width: 90px; opacity: .9; }
.hero-lanterns .lantern:nth-child(4) { animation-delay: .3s; width: 55px; opacity: .55; margin-top: 60px; }
.hero-lanterns .lantern:nth-child(5) { animation-delay: 1.6s; width: 75px; opacity: .8; }

.hero-content { position: relative; z-index: 2; }
.hero-eyebrow {
  display: inline-block;
  color: var(--gold);
  letter-spacing: .3em;
  font-size: .8rem;
  margin-bottom: 22px;
  border: 1px solid rgba(227,172,82,.4);
  padding: 6px 18px;
  border-radius: 999px;
}
.hero-title {
  font-family: var(--font-brush);
  font-size: clamp(3rem, 9vw, 6.5rem);
  line-height: 1.1;
  color: var(--cream);
  text-shadow: 0 0 30px rgba(227,172,82,.35), 0 4px 20px rgba(0,0,0,.6);
  animation: flicker 6s ease-in-out infinite;
}
.hero-title span { color: var(--red-light); }
.hero-sub {
  margin-top: 22px;
  font-size: 1.05rem;
  color: var(--cream-dim);
  letter-spacing: .08em;
}
.hero-actions {
  margin-top: 42px;
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: var(--gold-soft);
  font-size: .75rem;
  letter-spacing: .2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero-scroll .line { width: 1px; height: 40px; background: linear-gradient(var(--gold), transparent); animation: scrollLine 2s ease-in-out infinite; }

@keyframes swing {
  0%, 100% { transform: rotate(-4deg); }
  50% { transform: rotate(4deg); }
}
@keyframes flicker {
  0%, 100% { opacity: 1; }
  45% { opacity: 1; }
  47% { opacity: .82; }
  49% { opacity: 1; }
  72% { opacity: 1; }
  74% { opacity: .88; }
  76% { opacity: 1; }
}
@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ---------- Sections ---------- */
section { padding: 100px 0; position: relative; }
.section-title-wrap { text-align: center; margin-bottom: 56px; }
.section-eyebrow {
  color: var(--red-light);
  letter-spacing: .3em;
  font-size: .78rem;
  text-transform: uppercase;
}
.section-title {
  font-family: var(--font-brush);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  color: var(--gold-soft);
  margin-top: 10px;
}
.section-desc {
  max-width: 640px;
  margin: 18px auto 0;
  color: var(--cream-dim);
  font-size: 1rem;
}

.divider {
  width: 60px; height: 3px;
  background: var(--red);
  margin: 22px auto;
  border-radius: 3px;
  position: relative;
}
.divider::before, .divider::after {
  content: '';
  position: absolute;
  top: 50%; width: 6px; height: 6px;
  background: var(--gold);
  border-radius: 50%;
  transform: translateY(-50%);
}
.divider::before { left: -14px; }
.divider::after { right: -14px; }

/* reveal on scroll */
.reveal { opacity: 0; transform: translateY(36px); transition: opacity .8s ease, transform .8s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1.is-visible { transition-delay: .1s; }
.reveal-delay-2.is-visible { transition-delay: .2s; }
.reveal-delay-3.is-visible { transition-delay: .3s; }

/* ---------- Cards / grid ---------- */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }

.feature-card {
  background: linear-gradient(160deg, rgba(74,53,39,.35), rgba(16,12,10,.5));
  border: 1px solid rgba(227,172,82,.18);
  border-radius: 18px;
  padding: 36px 28px;
  text-align: center;
  transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0,0,0,.45), 0 0 0 1px rgba(227,172,82,.3);
  border-color: rgba(227,172,82,.5);
}
.feature-icon {
  width: 56px; height: 56px;
  margin: 0 auto 18px;
  color: var(--red-light);
}
.feature-card h3 {
  font-family: var(--font-brush);
  font-size: 1.4rem;
  color: var(--gold-soft);
  margin-bottom: 12px;
}
.feature-card p { color: var(--cream-dim); font-size: .93rem; }

/* menu items */
.menu-category { margin-bottom: 64px; }
.menu-category h3 {
  font-family: var(--font-brush);
  font-size: 1.7rem;
  color: var(--red-light);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.menu-category h3 .steam { width: 20px; height: 26px; }
.menu-category .cat-desc { color: var(--cream-dim); font-size: .88rem; margin-bottom: 22px; }
.menu-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px 40px; }
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 14px 4px;
  border-bottom: 1px dashed rgba(227,172,82,.25);
  transition: background .25s ease, padding-left .25s ease;
}
.menu-item:hover { background: rgba(200,55,43,.08); padding-left: 10px; }
.menu-item .name { font-weight: 500; color: var(--cream); }
.menu-item .name small { display: block; color: var(--cream-dim); font-size: .78rem; margin-top: 2px; font-weight: 400; }
.menu-item .price { color: var(--gold-soft); font-family: var(--font-brush); font-size: 1.05rem; white-space: nowrap; }

.tag-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 28px; }
.tag {
  border: 1px solid rgba(227,172,82,.35);
  color: var(--cream-dim);
  padding: 6px 16px;
  border-radius: 999px;
  font-size: .82rem;
  transition: all .25s ease;
}
.tag:hover { border-color: var(--red-light); color: var(--gold-soft); transform: translateY(-2px); }

/* info table */
.info-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(16,12,10,.4);
  border: 1px solid rgba(227,172,82,.18);
  border-radius: 16px;
  overflow: hidden;
}
.info-table tr { border-bottom: 1px solid rgba(227,172,82,.12); }
.info-table tr:last-child { border-bottom: none; }
.info-table th, .info-table td {
  text-align: left;
  padding: 18px 24px;
  font-size: .95rem;
}
.info-table th {
  width: 160px;
  color: var(--gold-soft);
  font-weight: 500;
  letter-spacing: .05em;
  background: rgba(227,172,82,.06);
}
.info-table td { color: var(--cream-dim); }
.info-table a { color: var(--red-light); }
.info-table a:hover { text-decoration: underline; }

.map-frame {
  width: 100%;
  height: 380px;
  border: 1px solid rgba(227,172,82,.25);
  border-radius: 18px;
  overflow: hidden;
  filter: grayscale(.3) sepia(.15);
}
.map-frame iframe { width: 100%; height: 100%; border: 0; }

/* callout / cta band */
.cta-band {
  background: linear-gradient(135deg, var(--red-deep), var(--red));
  border-radius: 24px;
  padding: 56px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-band::before {
  content: '';
  position: absolute; inset: 0;
  background: repeating-linear-gradient(45deg, rgba(255,255,255,.03) 0 2px, transparent 2px 14px);
}
.cta-band h2 {
  font-family: var(--font-brush);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--cream);
  position: relative;
}
.cta-band p { color: rgba(244,233,216,.85); margin-top: 12px; position: relative; }
.cta-band .hero-actions { margin-top: 30px; }
.cta-band .btn-outline { border-color: rgba(244,233,216,.6); color: var(--cream); }
.cta-band .btn-primary { background: var(--bg-deep); box-shadow: 0 8px 22px rgba(0,0,0,.4); }

/* review quote strip */
.quote-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.quote-card {
  background: rgba(46,33,25,.4);
  border-left: 3px solid var(--red);
  padding: 26px 24px;
  border-radius: 4px 14px 14px 4px;
}
.quote-card p { font-size: .92rem; color: var(--cream-dim); font-style: italic; }
.quote-card .stars { color: var(--gold); margin-bottom: 10px; letter-spacing: 2px; }

/* footer */
.site-footer {
  background: var(--bg-deep);
  border-top: 1px solid rgba(227,172,82,.2);
  padding: 56px 0 28px;
  text-align: center;
}
.footer-logo {
  font-family: var(--font-brush);
  font-size: 1.8rem;
  color: var(--gold-soft);
}
.footer-nav { display: flex; justify-content: center; gap: 26px; flex-wrap: wrap; margin: 26px 0; }
.footer-nav a { color: var(--cream-dim); font-size: .9rem; }
.footer-nav a:hover { color: var(--red-light); }
.footer-lanterns { display: flex; justify-content: center; gap: 40px; margin-bottom: 26px; opacity: .5; }
.footer-lanterns .lantern-mini { width: 22px; height: 30px; animation: swing 3.6s ease-in-out infinite; transform-origin: top center; }
.site-footer small { color: rgba(205,191,174,.5); font-size: .78rem; letter-spacing: .05em; }

/* steam animation */
.steam-wrap { position: relative; display: inline-block; }
.steam-puff {
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 6px; height: 6px;
  background: rgba(244,233,216,.5);
  border-radius: 50%;
  filter: blur(3px);
  animation: steamRise 3s ease-in infinite;
}
@keyframes steamRise {
  0% { transform: translate(-50%, 0) scale(.6); opacity: 0; }
  20% { opacity: .7; }
  100% { transform: translate(-70%, -46px) scale(1.6); opacity: 0; }
}

/* open status badge */
.open-status {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 999px;
  font-size: .85rem;
  letter-spacing: .08em;
  border: 1px solid rgba(227,172,82,.35);
  color: var(--cream-dim);
}
.open-status.is-open { color: #7ee08a; border-color: rgba(126,224,138,.5); animation: flicker 3s ease-in-out infinite; }
.open-status.is-closed { color: var(--cream-dim); }

.contact-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 40px; align-items: start; }
.contact-card {
  background: linear-gradient(160deg, rgba(74,53,39,.35), rgba(16,12,10,.5));
  border: 1px solid rgba(227,172,82,.2);
  border-radius: 20px;
  padding: 40px;
}
.contact-card h3 { font-family: var(--font-brush); color: var(--gold-soft); font-size: 1.5rem; margin-bottom: 16px; }
.big-phone {
  font-family: var(--font-brush);
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: var(--red-light);
  display: block;
  margin: 14px 0;
  transition: color .25s ease, transform .25s ease;
}
.big-phone:hover { color: var(--gold-soft); transform: scale(1.03); display: inline-block; }
.note-box {
  border-left: 3px solid var(--gold);
  background: rgba(227,172,82,.08);
  padding: 16px 20px;
  border-radius: 4px 12px 12px 4px;
  font-size: .88rem;
  color: var(--cream-dim);
  margin-top: 18px;
}

@media (max-width: 860px) {
  .contact-grid { grid-template-columns: 1fr; }
}

/* page hero (sub pages) */
.page-hero {
  padding: 150px 0 70px;
  text-align: center;
  position: relative;
  background:
    radial-gradient(circle at 50% 0%, rgba(200,55,43,.18), transparent 60%),
    var(--bg-deep);
  border-bottom: 1px solid rgba(227,172,82,.15);
}
.page-hero .section-eyebrow { display:block; margin-bottom: 8px; }
.page-hero h1 {
  font-family: var(--font-brush);
  font-size: clamp(2.4rem, 6vw, 4rem);
  color: var(--cream);
}
.breadcrumb { margin-top: 18px; font-size: .82rem; color: var(--cream-dim); letter-spacing: .05em; }
.breadcrumb a { color: var(--gold); }

/* responsive */
@media (max-width: 860px) {
  .grid-3, .quote-strip { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
  .menu-list { grid-template-columns: 1fr; }
  .nav { position: fixed; top: 66px; left: 0; right: 0; background: var(--bg-deep); flex-direction: column; align-items: flex-start; padding: 24px; gap: 18px; border-bottom: 1px solid rgba(227,172,82,.2); transform: translateY(-140%); opacity: 0; transition: all .35s ease; }
  .nav.open { transform: translateY(0); opacity: 1; }
  .hamburger { display: flex; }
  .info-table th { width: 110px; padding: 14px; font-size: .85rem; }
  .info-table td { padding: 14px; font-size: .85rem; }
  .hero-lanterns .lantern { width: 44px; }
}

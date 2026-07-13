// 串ごのみ サイト共通スクリプト

document.addEventListener('DOMContentLoaded', () => {
  // --- のれん開きカーテンを一定時間後に除去 ---
  const curtain = document.querySelector('.noren-curtain');
  if (curtain) {
    setTimeout(() => curtain.remove(), 1300);
  }

  // --- ヘッダー：スクロールで影をつける ---
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- ハンバーガーメニュー ---
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // --- スクロールで要素をフェードイン ---
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }
  // セーフティネット：何らかの理由でIntersectionObserverが発火しない場合でも
  // 一定時間後には必ず表示させる（要素が消えたままにならないようにする）
  setTimeout(() => {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }, 2500);

  // --- 湯気のアニメーション用パーツを自動生成 ---
  document.querySelectorAll('.steam-wrap').forEach((wrap) => {
    for (let i = 0; i < 3; i += 1) {
      const puff = document.createElement('span');
      puff.className = 'steam-puff';
      puff.style.animationDelay = `${i * 1}s`;
      puff.style.left = `${45 + i * 5}%`;
      wrap.appendChild(puff);
    }
  });

  // --- 営業中バッジ（17:00〜23:30を営業時間として判定） ---
  const statusEl = document.querySelector('.open-status');
  if (statusEl) {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const openMin = 17 * 60;
    const closeMin = 23 * 60 + 30;
    const isOpen = minutes >= openMin && minutes < closeMin;
    statusEl.textContent = isOpen ? '●只今営業中' : '○本日の営業時間外';
    statusEl.classList.add(isOpen ? 'is-open' : 'is-closed');
  }

  // --- 現在地のナビリンクをハイライト ---
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

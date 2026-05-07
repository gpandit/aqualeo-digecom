// ══════════ AQUALEO SHARED RUNTIME ══════════
// Translations for shared chrome (nav + footer)
window.AQ_I18N_SHARED = {
  en: {
    nav_services:"Services", nav_solutions:"Solutions", nav_cases:"Case Studies",
    nav_about:"About", nav_contact:"Contact", nav_cta:"Get in Touch",
    theme_dark:"Dark", theme_light:"Light", theme_earth:"Earthy",
    foot_tag:"IT Consulting & Digital Commerce — empowering businesses across London, Dubai & Bangalore.",
    foot_services:"Services", foot_company:"Company", foot_contact:"Contact",
    foot_about:"About Us", foot_blog:"Blog", foot_careers:"Careers",
    foot_copy:"© 2026 Aqualeo Digecom. All rights reserved.",
    cta_text:"Ready to accelerate your digital transformation?", cta_btn:"Let's Connect →"
  },
  ar: {
    nav_services:"الخدمات", nav_solutions:"الحلول", nav_cases:"دراسات الحالة",
    nav_about:"من نحن", nav_contact:"تواصل معنا", nav_cta:"تواصل معنا",
    theme_dark:"داكن", theme_light:"فاتح", theme_earth:"ترابي",
    foot_tag:"استشارات تقنية وتجارة رقمية — نمكّن الشركات في لندن ودبي وبنغالور.",
    foot_services:"الخدمات", foot_company:"الشركة", foot_contact:"تواصل",
    foot_about:"من نحن", foot_blog:"المدونة", foot_careers:"الوظائف",
    foot_copy:"© 2026 أكواليو ديجيكوم. جميع الحقوق محفوظة.",
    cta_text:"هل أنت جاهز لتسريع تحولك الرقمي؟", cta_btn:"← تواصل معنا"
  },
  fr: {
    nav_services:"Services", nav_solutions:"Solutions", nav_cases:"Études de cas",
    nav_about:"À propos", nav_contact:"Contact", nav_cta:"Nous contacter",
    theme_dark:"Sombre", theme_light:"Clair", theme_earth:"Terre",
    foot_tag:"Conseil IT & Commerce Numérique — au service des entreprises à Londres, Dubaï & Bangalore.",
    foot_services:"Services", foot_company:"Entreprise", foot_contact:"Contact",
    foot_about:"À propos", foot_blog:"Blog", foot_careers:"Carrières",
    foot_copy:"© 2026 Aqualeo Digecom. Tous droits réservés.",
    cta_text:"Prêt à accélérer votre transformation numérique ?", cta_btn:"Discutons →"
  },
  es: {
    nav_services:"Servicios", nav_solutions:"Soluciones", nav_cases:"Casos de éxito",
    nav_about:"Nosotros", nav_contact:"Contacto", nav_cta:"Contáctanos",
    theme_dark:"Oscuro", theme_light:"Claro", theme_earth:"Tierra",
    foot_tag:"Consultoría TI y Comercio Digital — empoderando empresas en Londres, Dubái y Bangalore.",
    foot_services:"Servicios", foot_company:"Empresa", foot_contact:"Contacto",
    foot_about:"Sobre nosotros", foot_blog:"Blog", foot_careers:"Carreras",
    foot_copy:"© 2026 Aqualeo Digecom. Todos los derechos reservados.",
    cta_text:"¿Listo para acelerar tu transformación digital?", cta_btn:"Conectemos →"
  }
};

// Inject NAV + FOOTER into page
window.AQ_renderChrome = function(activePage){
  const navHtml = `
<nav class="aqnav">
  <a href="index.html" class="nav-logo" aria-label="Aqualeo Digecom"></a>
  <div class="nav-links">
    <a href="services.html" data-i18n="nav_services" ${activePage==='services'?'class="active"':''}>Services</a>
    <a href="solutions.html" data-i18n="nav_solutions" ${activePage==='solutions'?'class="active"':''}>Solutions</a>
    <a href="case-studies.html" data-i18n="nav_cases" ${activePage==='cases'?'class="active"':''}>Case Studies</a>
    <a href="about.html" data-i18n="nav_about" ${activePage==='about'?'class="active"':''}>About</a>
    <a href="contact.html" data-i18n="nav_contact" ${activePage==='contact'?'class="active"':''}>Contact</a>
  </div>
  <div class="nav-right">
    <div class="nav-dd" id="dd-theme">
      <button class="nav-dd-btn" aria-label="Theme">
        <span id="dd-theme-icon" class="a11y-swatch" style="width:14px;height:14px;background:#04090F"></span>
        <span class="caret">▾</span>
      </button>
      <div class="nav-dd-menu">
        <button class="nav-dd-item" data-theme="dark"><span class="a11y-swatch" style="background:#04090F"></span><span data-i18n="theme_dark">Dark</span></button>
        <button class="nav-dd-item" data-theme="light"><span class="a11y-swatch" style="background:#FFFFFF;border-color:#CBD5E1"></span><span data-i18n="theme_light">Light</span></button>
        <button class="nav-dd-item" data-theme="earth"><span class="a11y-swatch" style="background:#C2410C"></span><span data-i18n="theme_earth">Earthy</span></button>
      </div>
    </div>
    <div class="nav-dd" id="dd-fs">
      <button class="nav-dd-btn" aria-label="Font Size">
        <span style="font-family:'Space Grotesk',sans-serif;font-weight:700;">A<sup style="font-size:.7em">A</sup></span>
        <span class="caret">▾</span>
      </button>
      <div class="nav-dd-menu">
        <button class="nav-dd-item" data-fs="1"><span style="font-size:11px;font-weight:700;">A</span><span>Small</span></button>
        <button class="nav-dd-item" data-fs="2"><span style="font-size:13px;font-weight:700;">A</span><span>Medium</span></button>
        <button class="nav-dd-item" data-fs="3"><span style="font-size:15px;font-weight:700;">A</span><span>Large</span></button>
        <button class="nav-dd-item" data-fs="4"><span style="font-size:17px;font-weight:700;">A</span><span>Extra Large</span></button>
      </div>
    </div>
    <div class="nav-dd" id="dd-lang">
      <button class="nav-dd-btn" aria-label="Language">
        <span id="dd-lang-label">EN</span>
        <span class="caret">▾</span>
      </button>
      <div class="nav-dd-menu">
        <button class="nav-dd-item" data-lang="en">🇬🇧 English</button>
        <button class="nav-dd-item" data-lang="ar">🇸🇦 العربية</button>
        <button class="nav-dd-item" data-lang="fr">🇫🇷 Français</button>
        <button class="nav-dd-item" data-lang="es">🇪🇸 Español</button>
      </div>
    </div>
    <a href="contact.html" class="nav-btn" data-i18n="nav_cta" style="text-decoration:none;display:inline-flex;align-items:center;">Get in Touch</a>
  </div>
</nav>`;

  const footerHtml = `
<section class="cta-band">
  <div class="cta-band-text" data-i18n="cta_text">Ready to accelerate your digital transformation?</div>
  <a href="contact.html" class="btn-primary" data-i18n="cta_btn" style="text-decoration:none;display:inline-flex;align-items:center;">Let's Connect →</a>
</section>
<footer class="aqfooter">
  <div>
    <div class="foot-logo"></div>
    <p class="foot-tag" data-i18n="foot_tag">IT Consulting & Digital Commerce — empowering businesses across London, Dubai & Bangalore.</p>
  </div>
  <div>
    <div class="foot-col-title" data-i18n="foot_services">Services</div>
    <ul class="foot-links">
      <li><a href="services.html#it" data-i18n="nav_services">IT Consulting</a></li>
      <li><a href="services.html#commerce">Digital Commerce</a></li>
      <li><a href="services.html#staff">Staff Augmentation</a></li>
    </ul>
  </div>
  <div>
    <div class="foot-col-title" data-i18n="foot_company">Company</div>
    <ul class="foot-links">
      <li><a href="about.html" data-i18n="foot_about">About Us</a></li>
      <li><a href="case-studies.html" data-i18n="nav_cases">Case Studies</a></li>
      <li><a href="#" data-i18n="foot_blog">Blog</a></li>
      <li><a href="#" data-i18n="foot_careers">Careers</a></li>
    </ul>
  </div>
  <div>
    <div class="foot-col-title" data-i18n="foot_contact">Contact</div>
    <ul class="foot-links">
      <li><a href="mailto:hello@aqualeo.com">hello@aqualeo.com</a></li>
      <li><a href="contact.html">London · Dubai · Bangalore</a></li>
    </ul>
  </div>
</footer>
<div class="foot-bottom">
  <div class="foot-copy" data-i18n="foot_copy">© 2026 Aqualeo Digecom. All rights reserved.</div>
  <div class="foot-copy">Aqualeo Digecom Ltd · UK · UAE · India</div>
</div>`;

  const navSlot = document.getElementById('aq-nav-slot');
  const footSlot = document.getElementById('aq-footer-slot');
  if(navSlot) navSlot.outerHTML = navHtml;
  if(footSlot) footSlot.outerHTML = footerHtml;
};

// Apply theme/fs/lang and wire dropdowns
window.AQ_initChrome = function(pageDict){
  const FULL_DICT = {};
  ['en','ar','fr','es'].forEach(l=>{
    FULL_DICT[l] = Object.assign({}, window.AQ_I18N_SHARED[l] || {}, (pageDict && pageDict[l]) || {});
  });

  const state = {
    theme: localStorage.getItem('aq-theme') || 'dark',
    fs: parseInt(localStorage.getItem('aq-fs') || '2', 10),
    lang: localStorage.getItem('aq-lang') || 'en'
  };
  const body = document.body;

  function updateThemeIcon(t){
    const icon = document.getElementById('dd-theme-icon');
    if(!icon) return;
    if(t==='dark'){ icon.style.background='#04090F'; icon.style.borderColor='rgba(0,0,0,.1)'; }
    if(t==='light'){ icon.style.background='#FFFFFF'; icon.style.borderColor='#CBD5E1'; }
    if(t==='earth'){ icon.style.background='#C2410C'; icon.style.borderColor='rgba(0,0,0,.1)'; }
  }

  function applyTheme(t){
    state.theme = t;
    body.classList.remove('theme-dark','theme-light','theme-earth');
    body.classList.add('theme-'+t);
    localStorage.setItem('aq-theme', t);
    document.querySelectorAll('[data-theme]').forEach(b=>{
      b.classList.toggle('active', b.dataset.theme===t);
    });
    updateThemeIcon(t);
  }

  function applyFs(n){
    state.fs = n;
    body.classList.remove('fs-1','fs-2','fs-3','fs-4');
    body.classList.add('fs-'+n);
    localStorage.setItem('aq-fs', String(n));
    document.querySelectorAll('[data-fs]').forEach(b=>{
      b.classList.toggle('active', String(b.dataset.fs)===String(n));
    });
  }

  function applyLang(l){
    state.lang = l;
    const dict = FULL_DICT[l] || FULL_DICT.en;
    document.documentElement.lang = l;
    const isRtl = l === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    body.dir = isRtl ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
    const ll = document.getElementById('dd-lang-label');
    if(ll) ll.textContent = l.toUpperCase();
    localStorage.setItem('aq-lang', l);
    document.querySelectorAll('[data-lang]').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang===l);
    });
  }

  // Dropdown wiring
  const dds = document.querySelectorAll('.nav-dd');
  dds.forEach(dd=>{
    const btn = dd.querySelector('.nav-dd-btn');
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const wasOpen = dd.classList.contains('open');
      dds.forEach(d=>d.classList.remove('open'));
      if(!wasOpen) dd.classList.add('open');
    });
  });
  document.addEventListener('click', ()=>dds.forEach(d=>d.classList.remove('open')));

  document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>applyTheme(b.dataset.theme)));
  document.querySelectorAll('[data-fs]').forEach(b=>b.addEventListener('click',()=>applyFs(parseInt(b.dataset.fs,10))));
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));

  applyTheme(state.theme);
  applyFs(state.fs);
  applyLang(state.lang);

  // Fade-up observer
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  },{threshold:0.08});
  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));
};

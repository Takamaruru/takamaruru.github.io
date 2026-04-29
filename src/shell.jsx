// Shared shell — nav, intro overlay, footer, contact
const { useState, useEffect, useRef, useMemo } = React;

function Nav({ view, setView, lang, setLang, scrollToSection }) {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <span className="nav__logo-mark"></span>
        <span>TK — {lang === "ja" ? "広平野 鷹" : "Taka Koheiya"}</span>
      </div>
      <div className="nav__center">
        <button onClick={() => scrollToSection("work")}>{lang === "ja" ? "作品" : "Work"}</button>
        <button onClick={() => scrollToSection("now")}>Now</button>
        <button onClick={() => scrollToSection("contact")}>{lang === "ja" ? "連絡" : "Contact"}</button>
      </div>
      <div className="nav__right">
        <div className="view-switch" role="tablist" aria-label="View">
          <button data-active={view === "monolith"} onClick={() => setView("monolith")}>01</button>
          <button data-active={view === "editorial"} onClick={() => setView("editorial")}>02</button>
          <button data-active={view === "lab"} onClick={() => setView("lab")}>03</button>
        </div>
        <button onClick={() => setLang(lang === "ja" ? "en" : "ja")}>
          {lang === "ja" ? "EN" : "JP"}
        </button>
      </div>
    </nav>
  );
}

function IntroOverlay({ lang }) {
  const words = lang === "ja" ? ["広平野", "鷹の", "ポートフォリオ"] : ["Taka", "Koheiya", "Portfolio"];
  return (
    <div className="intro">
      <div className="intro__text">
        {words.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  );
}

function NowStrip({ lang }) {
  return (
    <section className="now" id="now" data-screen-label="Now">
      <div className="now__inner">
        <div className="now__label">
          <span>{lang === "ja" ? "いま / Now" : "Currently / 現在"}</span>
        </div>
        <div className="now__items">
          {DATA.now.map((n, i) => (
            <div className="now__item" key={i}>
              <div className="now__item-when">{n.when}</div>
              <div
                className="now__item-what"
                dangerouslySetInnerHTML={{ __html: lang === "ja" ? n.ja : n.en }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ lang }) {
  return (
    <section className="contact" id="contact" data-screen-label="Contact">
      <div className="contact__label">
        {lang === "ja" ? "仕事 · 雑談 · コラボ" : "Work · Chat · Collab"}
      </div>
      <a className="contact__mail" href={`mailto:${DATA.email}`}>
        {DATA.email}
      </a>
      <div className="contact__links">
        {DATA.links.map((l, i) => (
          <a key={i} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer({ lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} {lang === "ja" ? "広平野 鷹 / Taka Koheiya" : "Taka Koheiya"}</span>
      <span>Tokyo, JP · {lang === "ja" ? "手作り" : "Hand-coded"}</span>
      <span>v1.0 — {lang === "ja" ? "制作中" : "Evolving"}</span>
    </footer>
  );
}

Object.assign(window, { Nav, IntroOverlay, NowStrip, Contact, Footer });

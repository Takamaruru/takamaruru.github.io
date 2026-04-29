// Root app — wires everything together
const { useState: _uS, useEffect: _uE } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "orange",
  "font": "fraunces",
  "density": 2,
  "lang": "ja",
  "view": "monolith"
}/*EDITMODE-END*/;

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem("tk-portfolio") || "{}");
    return { ...DEFAULTS, ...s };
  } catch { return { ...DEFAULTS }; }
}

function App() {
  const [state, setState] = React.useState(loadState);
  const [showIntro, setShowIntro] = React.useState(true);

  const set = (patch) => {
    setState(s => {
      const next = { ...s, ...patch };
      localStorage.setItem("tk-portfolio", JSON.stringify(next));
      return next;
    });
  };

  // Apply theme, accent, fonts
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", state.theme);
    const acc = ACCENTS.find(a => a.name === state.accent);
    if (acc) {
      root.style.setProperty("--accent", acc.value);
      // choose ink color on accent
      const dark = ["ink"].includes(state.accent);
      root.style.setProperty("--accent-ink", dark ? "#fff" : "#fff");
    }
    const fontCfg = FONTS.find(f => f.id === state.font);
    if (fontCfg) {
      root.style.setProperty("--font-display", `"${fontCfg.display}", "Noto Sans JP", serif`);
      root.style.setProperty("--font-editorial", `"${fontCfg.editorial}", "Noto Sans JP", sans-serif`);
    }
  }, [state.theme, state.accent, state.font]);

  // Intro overlay one-shot
  React.useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2800);
    return () => clearTimeout(t);
  }, []);

  // Reset scroll when view changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [state.view]);

  // Edit-mode protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") document.body.classList.add("edit-mode");
      if (e.data.type === "__deactivate_edit_mode") document.body.classList.remove("edit-mode");
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };

  return (
    <>
      {showIntro && <IntroOverlay lang={state.lang} />}
      <Nav
        view={state.view}
        setView={(v) => set({ view: v })}
        lang={state.lang}
        setLang={(l) => set({ lang: l })}
        scrollToSection={scrollToSection}
      />
      {state.view === "monolith" && <MonolithView lang={state.lang} />}
      {state.view === "editorial" && <EditorialView lang={state.lang} />}
      {state.view === "lab" && <LabView lang={state.lang} density={state.density} />}

      <NowStrip lang={state.lang} />
      <Contact lang={state.lang} />
      <Footer lang={state.lang} />

      <Tweaks state={state} set={set} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

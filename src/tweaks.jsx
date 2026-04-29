// Tweaks panel — theme, accent, font, grid density
const ACCENTS = [
  { name: "orange", value: "#ff4500" },
  { name: "red",    value: "#e11d48" },
  { name: "lime",   value: "#a3e635" },
  { name: "cobalt", value: "#2563eb" },
  { name: "violet", value: "#7c3aed" },
  { name: "ink",    value: "#0a0a0a" },
];

const FONTS = [
  { id: "fraunces", label: "Serif", display: "Fraunces", sans: "Space Grotesk", editorial: "Archivo" },
  { id: "instrument", label: "Editorial", display: "Instrument Serif", sans: "Space Grotesk", editorial: "Fraunces" },
  { id: "archivo", label: "Display", display: "Archivo", sans: "Archivo", editorial: "Archivo" },
];

function Tweaks({ state, set }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="tweaks" data-collapsed={collapsed}>
      <div className="tweaks__head" onClick={() => setCollapsed(!collapsed)}>
        <span className="tweaks__head-dot"></span>
        <span>Tweaks</span>
        <span>{collapsed ? "+" : "−"}</span>
      </div>
      <div className="tweaks__body">
        <div className="tweak-row">
          <div className="tweak-row__label"><span>Theme</span><b>{state.theme}</b></div>
          <div className="tweak-seg">
            {["light", "dark"].map(t => (
              <button key={t} data-active={state.theme === t} onClick={() => set({ theme: t })}>{t}</button>
            ))}
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row__label"><span>Accent</span><b>{state.accent}</b></div>
          <div className="tweak-swatches">
            {ACCENTS.map(a => (
              <button
                key={a.name}
                className="tweak-swatch"
                style={{ background: a.value }}
                data-active={state.accent === a.name}
                onClick={() => set({ accent: a.name })}
              />
            ))}
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row__label"><span>Font</span><b>{state.font}</b></div>
          <div className="tweak-seg">
            {FONTS.map(f => (
              <button key={f.id} data-active={state.font === f.id} onClick={() => set({ font: f.id })}>{f.label}</button>
            ))}
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row__label"><span>Grid density</span><b>{state.density}</b></div>
          <div className="tweak-seg">
            {[1, 2, 3].map(d => (
              <button key={d} data-active={state.density === d} onClick={() => set({ density: d })}>
                {d === 1 ? "loose" : d === 2 ? "normal" : "dense"}
              </button>
            ))}
          </div>
        </div>

        <div className="tweak-row">
          <div className="tweak-row__label"><span>Language</span><b>{state.lang}</b></div>
          <div className="tweak-seg">
            {["ja", "en"].map(l => (
              <button key={l} data-active={state.lang === l} onClick={() => set({ lang: l })}>{l === "ja" ? "日本語" : "English"}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.Tweaks = Tweaks;
window.ACCENTS = ACCENTS;
window.FONTS = FONTS;

// View 03 — Lab (grid wall)
function LabCellViz({ project, index }) {
  const hue = project.hue;
  if (project.id === "iruka") {
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill={`hsl(${hue}, 40%, 15%)`} opacity="0.25" />
        {[0,1,2,3,4].map(i => (
          <line key={`h${i}`} x1="0" y1={20 + i * 40} x2="200" y2={20 + i * 40}
            stroke={`hsla(${hue}, 50%, 60%, 0.25)`} />
        ))}
        {[0,1,2,3,4].map(i => (
          <line key={`v${i}`} x1={20 + i * 40} y1="0" x2={20 + i * 40} y2="200"
            stroke={`hsla(${hue}, 50%, 60%, 0.25)`} />
        ))}
        <circle cx="100" cy="100" r="50" fill={`hsla(${hue}, 75%, 55%, 0.18)`}
          stroke={`hsl(${hue}, 80%, 55%)`} strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="100" cy="100" r="4" fill={`hsl(${hue}, 80%, 55%)`} />
        <circle cx="82" cy="88" r="5" fill={`hsl(${hue}, 80%, 60%)`} />
        <circle cx="118" cy="112" r="5" fill={`hsl(${hue}, 80%, 60%)`} />
      </svg>
    );
  }
  if (project.id === "capcell") {
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill={`hsl(${hue}, 40%, 10%)`} opacity="0.4" />
        {/* tree lines */}
        <line x1="30" y1="40" x2="30" y2="170" stroke={`hsla(${hue}, 60%, 50%, 0.5)`} strokeWidth="1" />
        <line x1="50" y1="80" x2="50" y2="140" stroke={`hsla(${hue}, 60%, 50%, 0.4)`} strokeWidth="1" />
        {[
          { x: 30, y: 40, w: 100, lead: true },
          { x: 50, y: 70, w: 80 },
          { x: 70, y: 95, w: 60 },
          { x: 70, y: 115, w: 70 },
          { x: 50, y: 140, w: 85 },
          { x: 30, y: 170, w: 95, lead: true },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={n.y - 7} width="10" height="10" rx="2"
              fill={n.lead ? `hsl(${hue}, 75%, 60%)` : "transparent"}
              stroke={`hsl(${hue}, 60%, 55%)`} strokeWidth="1.2" />
            <rect x={n.x + 16} y={n.y - 4} width={n.w} height="4" rx="2"
              fill={n.lead ? `hsl(${hue}, 75%, 70%)` : `hsla(${hue}, 40%, 65%, 0.5)`} />
          </g>
        ))}
      </svg>
    );
  }
  if (project.id === "_capcell_old") {
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`rg-${index}`} cx="70%" cy="30%">
            <stop offset="0" stopColor={`hsl(${hue}, 85%, 60%)`} stopOpacity="0.5" />
            <stop offset="1" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#rg-${index})`} />
        {[0,1,2,3,4,5].map(i => (
          <rect key={i} x={30} y={40 + i * 22} width="140" height="16" rx="8"
            fill={`hsla(${hue}, 70%, 55%, ${0.2 + i * 0.1})`} />
        ))}
      </svg>
    );
  }
  if (project.id === "reverie") {
    const placed = new Set(["0-0","1-0","2-0","3-0","0-1","1-1","0-2","1-2","0-3","1-3","2-3"]);
    const cell = 36;
    const ox = 28, oy = 28;
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill={`hsl(${hue}, 50%, 12%)`} opacity="0.35" />
        <defs>
          <linearGradient id={`rev-lab-${index}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={`hsl(${hue}, 70%, 70%)`} />
            <stop offset="1" stopColor={`hsl(${(hue + 40) % 360}, 60%, 55%)`} />
          </linearGradient>
        </defs>
        <rect x={ox} y={oy} width={4 * cell} height={4 * cell}
          fill={`url(#rev-lab-${index})`} opacity="0.7" />
        {Array.from({ length: 5 }).map((_, r) => (
          <line key={`h${r}`} x1={ox} y1={oy + r * cell} x2={ox + 4 * cell} y2={oy + r * cell}
            stroke="rgba(255,255,255,0.5)" strokeDasharray="2 2" />
        ))}
        {Array.from({ length: 5 }).map((_, c) => (
          <line key={`v${c}`} x1={ox + c * cell} y1={oy} x2={ox + c * cell} y2={oy + 4 * cell}
            stroke="rgba(255,255,255,0.5)" strokeDasharray="2 2" />
        ))}
        {[...placed].map(key => {
          const [c, r] = key.split("-").map(Number);
          return (
            <rect key={key} x={ox + c * cell + 1} y={oy + r * cell + 1}
              width={cell - 2} height={cell - 2}
              fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8" />
          );
        })}
        {/* loose piece */}
        <g transform="translate(160 165) rotate(-15)">
          <rect x="-14" y="-14" width="28" height="28" rx="2"
            fill={`hsl(${hue}, 75%, 72%)`} stroke="#fff" strokeWidth="1.5" />
        </g>
      </svg>
    );
  }
  if (project.id === "logogo") {
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill={`hsl(${hue}, 40%, 10%)`} opacity="0.5" />
        {/* canvas grid */}
        {[1,2,3].map(i => (
          <line key={`gx${i}`} x1={50 * i} y1="0" x2={50 * i} y2="200"
            stroke="rgba(255,255,255,0.05)" />
        ))}
        {[1,2,3].map(i => (
          <line key={`gy${i}`} x1="0" y1={50 * i} x2="200" y2={50 * i}
            stroke="rgba(255,255,255,0.05)" />
        ))}
        {/* logo composition */}
        <circle cx="100" cy="100" r="58" fill="none"
          stroke={`hsl(${hue}, 80%, 55%)`} strokeWidth="9" />
        <rect x="72" y="72" width="56" height="56" rx="8"
          fill={`hsl(${(hue + 30) % 360}, 70%, 60%)`} transform="rotate(12 100 100)" />
        <text x="100" y="108" textAnchor="middle" fontFamily="sans-serif"
          fontWeight="800" fontSize="32" fill="#0e0c0a">LG</text>
        {/* selection corners */}
        {[[36,36],[164,36],[36,164],[164,164]].map(([x,y], i) => (
          <rect key={i} x={x - 2} y={y - 2} width="4" height="4"
            fill={`hsl(${hue}, 90%, 70%)`} />
        ))}
      </svg>
    );
  }
  if (project.id === "temportal") {
    const peers = [
      { x: 100, y: 50,  g: "a" },
      { x: 160, y: 100, g: "a" },
      { x: 150, y: 160, g: "b" },
      { x: 80,  y: 165, g: "b" },
      { x: 40,  y: 105, g: "a" },
    ];
    const gColor = (g) => g === "a" ? `hsl(${hue}, 80%, 60%)` : `hsl(${(hue + 40) % 360}, 75%, 62%)`;
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill={`hsl(${hue}, 50%, 12%)`} opacity="0.35" />
        <circle cx="100" cy="105" r="78" fill="none"
          stroke={`hsla(${hue}, 70%, 65%, 0.2)`} strokeDasharray="2 3" />
        {peers.flatMap((a, i) =>
          peers.slice(i + 1).map((b, j) => (
            <line key={`e-${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={`hsla(${hue}, 70%, 65%, ${a.g === b.g ? 0.55 : 0.2})`}
              strokeWidth={a.g === b.g ? 1.2 : 0.8} />
          ))
        )}
        <rect x="88" y="95" width="24" height="20" rx="3"
          fill="#0a0a0a" stroke={`hsl(${hue}, 75%, 60%)`} strokeWidth="1" />
        <circle cx="106" cy="113" r="1.5" fill={`hsl(${hue}, 90%, 70%)`} />
        {peers.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="9" fill="#0a0a0a" stroke={gColor(p.g)} strokeWidth="1.5" />
            <circle cx={p.x} cy={p.y} r="2.5" fill={gColor(p.g)} />
          </g>
        ))}
      </svg>
    );
  }
  if (project.id === "classtodo") {
    return (
      <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <rect width="200" height="200" fill={`hsl(${hue}, 50%, 12%)`} opacity="0.3" />
        {[0,1,2,3,4].map(c => (
          [0,1,2,3].map(r => {
            const a = (c + r) % 3 === 0;
            return <rect key={`${c}-${r}`} x={20 + c * 32} y={40 + r * 32} width="26" height="26" rx="4"
              fill={a ? `hsl(${hue}, 70%, 55%)` : `hsla(${hue}, 40%, 50%, 0.15)`} />
          })
        ))}
      </svg>
    );
  }
  return (
    <svg className="lab__cell-viz" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill={`hsl(${hue}, 60%, 15%)`} opacity="0.3" />
      {[0,1,2].map(r => (
        [0,1,2,3].map(c => (
          <rect key={`${r}-${c}`} x={30 + c * 36} y={60 + r * 36} width="30" height="30" rx="5"
            fill={(r === 2 && c >= 2) ? `hsl(${hue}, 75%, 65%)` : `hsla(${hue}, 40%, 60%, 0.2)`}
            stroke={`hsla(${hue}, 50%, 70%, 0.4)`} />
        ))
      ))}
    </svg>
  );
}

function LabView({ lang, density }) {
  const [clock, setClock] = React.useState("");
  React.useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        d.toLocaleTimeString(lang === "ja" ? "ja-JP" : "en-US", {
          hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
        }) + " JST"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [lang]);

  // Repeat projects to fill grid density
  const multiplier = density === 1 ? 2 : density === 2 ? 3 : 4;
  const cells = [];
  for (let i = 0; i < multiplier; i++) {
    DATA.projects.forEach(p => cells.push(p));
  }

  return (
    <div className="lab" data-screen-label="Lab">
      <div className="lab__header">
        <h1>TK.LAB / {lang === "ja" ? "制作記録" : "LOGBOOK"}</h1>
        <div className="path">
          / <b>portfolio</b> / <b>work</b> / 03-lab
        </div>
        <div className="clock">[{clock}]</div>
      </div>

      <div className="lab__readout">
        <div className="lab__readout-label">{lang === "ja" ? "被験者情報" : "Subject info"}</div>
        <div>
          <h2>
            {lang === "ja"
              ? "手を動かしながら考える、学生の実験台帳。"
              : "A student's workbench — thinking by making."}
          </h2>
          <p className="lab__readout-bio">
            {lang === "ja"
              ? "広平野 鷹 / Taka Koheiya — 学生。Flutter、Expo、Pythonでモバイルと小さなツールを作り、最近はキーボードの基板設計でハードウェアに越境中。"
              : "Taka Koheiya — student. Building mobile apps and small tools with Flutter, Expo, and Python. Currently trespassing into hardware via PCB design."}
          </p>
        </div>
      </div>

      <div className={`lab__grid density-${density}`} id="work">
        {cells.map((p, i) => {
          const Tag = p.url ? "a" : "div";
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
          <Tag className="lab__cell" key={i} {...linkProps}>
            <div className="lab__cell-index">
              #{String(i + 1).padStart(3, "0")} · {p.num}
            </div>
            <div className="lab__cell-tag">{L(p.kind, lang).toUpperCase()}</div>
            <LabCellViz project={p} index={i} />
            <div className="lab__cell-title">{L(p.name, lang)}{p.url && " ↗"}</div>
            <div className="lab__cell-hover">
              <div>
                <div className="lab__cell-hover-title">{L(p.name, lang)}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>
                  {p.year} · {L(p.status, lang)}
                </div>
              </div>
              <div className="lab__cell-hover-desc">{L(p.short, lang)}</div>
              <div className="lab__cell-hover-cta">
                <span>{p.stack.split(" · ")[0]}</span>
                <span>{p.url ? "↗" : "→"}</span>
              </div>
            </div>
          </Tag>
          );
        })}
      </div>
    </div>
  );
}

window.LabView = LabView;

// View 01 — Monolith (Apple-style case studies)
const { useEffect: _useMono, useRef: _rMono, useState: _sMono } = React;

function CaseArt({ project, index }) {
  // Custom SVG art per project — no external images
  const hue = project.hue;
  const ref = React.useRef(null);
  const [mx, setMx] = React.useState(0.5);
  const [my, setMy] = React.useState(0.5);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setMx((e.clientX - r.left) / r.width);
    setMy((e.clientY - r.top) / r.height);
  };

  const bg = `radial-gradient(circle at ${mx * 100}% ${my * 100}%, hsl(${hue}, 85%, 62%) 0%, hsl(${hue}, 70%, 38%) 40%, hsl(${hue}, 60%, 18%) 100%)`;

  if (project.id === "capcell") {
    return (
      <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
        <svg viewBox="0 0 500 500" width="88%" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))" }}>
          {/* window chrome */}
          <rect x="30" y="60" width="440" height="380" rx="14" fill="#151515" />
          <rect x="30" y="60" width="440" height="28" rx="14" fill="#1f1f1f" />
          <circle cx="50" cy="74" r="5" fill="#ff5f57" />
          <circle cx="66" cy="74" r="5" fill="#febc2e" />
          <circle cx="82" cy="74" r="5" fill="#28c840" />
          <text x="250" y="78" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#888">CapCell — tree</text>

          {/* sidebar */}
          <rect x="30" y="88" width="150" height="352" fill="#111" />
          {/* tree nodes */}
          {[
            { x: 46, y: 110, label: "▾ Portfolio site", bold: true },
            { x: 58, y: 130, label: "▾ Hero" },
            { x: 70, y: 150, label: "• copy" },
            { x: 70, y: 168, label: "• layout" },
            { x: 58, y: 188, label: "▸ Case studies" },
            { x: 58, y: 208, label: "▸ Contact" },
            { x: 46, y: 232, label: "▾ iruka app", bold: true },
            { x: 58, y: 252, label: "• radius search" },
            { x: 58, y: 270, label: "• auth" },
            { x: 46, y: 294, label: "▸ Keyboard" },
            { x: 46, y: 318, label: "▸ 学校" },
          ].map((n, i) => (
            <g key={i}>
              {n.bold && <rect x={n.x - 6} y={n.y - 10} width="140" height="16" rx="3" fill={`hsla(${hue}, 70%, 55%, 0.18)`} />}
              <text x={n.x} y={n.y} fontFamily="monospace" fontSize="10"
                fill={n.bold ? `hsl(${hue}, 75%, 65%)` : "#bbb"}
                fontWeight={n.bold ? 600 : 400}>{n.label}</text>
            </g>
          ))}

          {/* main pane */}
          <rect x="180" y="88" width="290" height="352" fill="#0c0c0c" />
          <text x="200" y="118" fontFamily="sans-serif" fontSize="16" fill="#eee" fontWeight="600">Portfolio site</text>
          <text x="200" y="136" fontFamily="monospace" fontSize="9" fill="#777">3 children · updated 2h ago</text>

          {/* task cards */}
          {[0,1,2,3].map(i => (
            <g key={i} transform={`translate(200 ${160 + i * 52})`}>
              <rect width="250" height="42" rx="6" fill="#181818" stroke="#2a2a2a" />
              <rect x="10" y="13" width="16" height="16" rx="3"
                fill={i === 0 ? `hsl(${hue}, 70%, 55%)` : "transparent"}
                stroke={`hsl(${hue}, 70%, 55%)`} strokeWidth="1.5" />
              {i === 0 && <path d="M 14 21 l 3 3 l 6 -7" stroke="#0a0a0a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
              <rect x="36" y="14" width={140 + i * 10} height="5" rx="2.5" fill={i === 0 ? "#666" : "#ddd"} />
              <rect x="36" y="24" width={80 + i * 12} height="3" rx="1.5" fill="#555" />
              <circle cx="240" cy="21" r="3" fill={`hsl(${(hue + i * 30) % 360}, 70%, 60%)`} />
            </g>
          ))}

          <text x="325" y="428" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="16" fill="#666">CapCell</text>
        </svg>
      </div>
    );
  }
  if (project.id === "iruka") {
    return (
      <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
        <svg viewBox="0 0 400 500" width="82%" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))" }}>
          {/* phone */}
          <rect x="60" y="30" width="280" height="440" rx="36" fill="#0a1a2a" />
          <rect x="72" y="42" width="256" height="416" rx="28" fill={`hsl(${hue}, 40%, 88%)`} />
          {/* map grid */}
          {[0,1,2,3,4,5,6].map(i => (
            <line key={`h${i}`} x1="72" y1={90 + i * 52} x2="328" y2={90 + i * 52}
              stroke={`hsla(${hue}, 30%, 50%, 0.25)`} strokeWidth="1" />
          ))}
          {[0,1,2,3,4].map(i => (
            <line key={`v${i}`} x1={92 + i * 52} y1="60" x2={92 + i * 52} y2="448"
              stroke={`hsla(${hue}, 30%, 50%, 0.25)`} strokeWidth="1" />
          ))}
          {/* search radius */}
          <circle cx="200" cy="250" r="90" fill={`hsla(${hue}, 75%, 50%, 0.12)`}
            stroke={`hsl(${hue}, 75%, 45%)`} strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="200" cy="250" r="8" fill={`hsl(${hue}, 80%, 45%)`} />
          {/* friends inside */}
          <circle cx="160" cy="220" r="10" fill="#fff" stroke={`hsl(${hue}, 80%, 40%)`} strokeWidth="2.5" />
          <circle cx="240" cy="285" r="10" fill="#fff" stroke={`hsl(${hue}, 80%, 40%)`} strokeWidth="2.5" />
          <circle cx="215" cy="200" r="10" fill="#fff" stroke={`hsl(${hue}, 80%, 40%)`} strokeWidth="2.5" />
          {/* friend outside — ghost */}
          <circle cx="110" cy="380" r="8" fill="none" stroke={`hsla(${hue}, 30%, 40%, 0.35)`} strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="300" cy="130" r="8" fill="none" stroke={`hsla(${hue}, 30%, 40%, 0.35)`} strokeWidth="1.5" strokeDasharray="2 2" />
          {/* search bar */}
          <rect x="88" y="64" width="224" height="22" rx="11" fill="rgba(255,255,255,0.95)" />
          <circle cx="102" cy="75" r="4" fill="none" stroke="#666" strokeWidth="1.5" />
          <text x="115" y="79" fontFamily="sans-serif" fontSize="10" fill="#666">このエリアを検索</text>
        </svg>
      </div>
    );
  }
  if (project.id === "classtodo") {
    return (
      <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
        <svg viewBox="0 0 400 500" width="80%" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))" }}>
          {/* top bar */}
          <rect x="60" y="80" width="80" height="8" rx="4" fill="#333" />
          <rect x="60" y="96" width="40" height="5" rx="2" fill="#999" />
          {/* timetable columns */}
          {[0,1,2,3,4].map(d => (
            <g key={d} transform={`translate(${68 + d * 54} 130)`}>
              <text fontSize="9" fill="#999" fontFamily="monospace">{['MON','TUE','WED','THU','FRI'][d]}</text>
              {[0,1,2,3].map(p => {
                const active = (d + p) % 3 === 0;
                return (
                  <rect key={p} x="0" y={16 + p * 56} width="46" height="50" rx="6"
                    fill={active ? `hsl(${hue}, 70%, 55%)` : "rgba(0,0,0,0.05)"} />
                );
              })}
            </g>
          ))}
          {/* task list */}
          <rect x="60" y="370" width="280" height="2" fill="#eee" />
          {[0,1,2].map(i => (
            <g key={i} transform={`translate(60 ${384 + i * 18})`}>
              <rect width="10" height="10" rx="2" fill={i === 0 ? `hsl(${hue}, 70%, 55%)` : "#ddd"} />
              <rect x="18" y="3" width={120 + i * 20} height="4" rx="2" fill="#333" />
            </g>
          ))}
        </svg>
      </div>
    );
  }
  if (project.id === "reverie") {
    // jigsaw grid: each cell shows a piece; some are placed (filled), some floating
    const cols = 4, rows = 5;
    const placed = new Set(["0-0","1-0","2-0","3-0","0-1","1-1","2-1","0-2","1-2","2-2","0-3","1-3","2-3","3-3","0-4","1-4","2-4","3-4"]);
    const cell = 70;
    const ox = 90, oy = 70;
    const knob = (cx, cy, side) => {
      // side: 't','r','b','l' — small bump for puzzle look
      const r = 7;
      if (side === "t") return `M ${cx - 8} ${cy} q 8 -${r * 1.6} 16 0`;
      if (side === "b") return `M ${cx - 8} ${cy} q 8 ${r * 1.6} 16 0`;
      if (side === "l") return `M ${cx} ${cy - 8} q -${r * 1.6} 8 0 16`;
      if (side === "r") return `M ${cx} ${cy - 8} q ${r * 1.6} 8 0 16`;
      return "";
    };
    return (
      <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
        <svg viewBox="0 0 500 500" width="86%" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.4))" }}>
          {/* photo frame backdrop */}
          <rect x="60" y="50" width="380" height="400" rx="6"
            fill="#fdf2ea" stroke={`hsla(${hue}, 30%, 50%, 0.4)`} strokeWidth="1" />
          <rect x="76" y="66" width="348" height="368" rx="2" fill={`hsla(${hue}, 35%, 80%, 0.55)`} />

          {/* simulated photo (warm gradient) */}
          <defs>
            <linearGradient id="rev-photo" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={`hsl(${hue}, 75%, 78%)`} />
              <stop offset="0.55" stopColor={`hsl(${(hue + 30) % 360}, 65%, 70%)`} />
              <stop offset="1" stopColor={`hsl(${(hue + 60) % 360}, 60%, 60%)`} />
            </linearGradient>
          </defs>
          <rect x="76" y="66" width="348" height="368" rx="2" fill="url(#rev-photo)" opacity="0.85" />
          {/* faint silhouettes — abstract memory */}
          <circle cx="180" cy="200" r="38" fill="#fff" opacity="0.18" />
          <circle cx="290" cy="240" r="52" fill="#fff" opacity="0.14" />
          <ellipse cx="240" cy="380" rx="180" ry="22" fill={`hsla(${hue}, 50%, 30%, 0.18)`} />

          {/* puzzle grid lines */}
          {Array.from({ length: rows + 1 }).map((_, r) => (
            <line key={`h${r}`} x1={ox} y1={oy + r * cell} x2={ox + cols * cell} y2={oy + r * cell}
              stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="2 2" />
          ))}
          {Array.from({ length: cols + 1 }).map((_, c) => (
            <line key={`v${c}`} x1={ox + c * cell} y1={oy} x2={ox + c * cell} y2={oy + rows * cell}
              stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeDasharray="2 2" />
          ))}

          {/* placed-piece highlight */}
          {[...placed].map(key => {
            const [c, r] = key.split("-").map(Number);
            return (
              <rect key={key} x={ox + c * cell + 1} y={oy + r * cell + 1}
                width={cell - 2} height={cell - 2}
                fill={`hsla(${hue}, 60%, 95%, 0.15)`}
                stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
            );
          })}

          {/* missing pieces (gap shadow) */}
          {[[3,1],[3,2]].map(([c, r]) => (
            <rect key={`m-${c}-${r}`} x={ox + c * cell + 1} y={oy + r * cell + 1}
              width={cell - 2} height={cell - 2}
              fill={`hsla(${hue}, 30%, 25%, 0.45)`} />
          ))}

          {/* floating loose pieces */}
          <g transform="translate(330 480) rotate(-12)">
            <rect x="-30" y="-30" width="60" height="60" rx="2"
              fill={`hsl(${hue}, 75%, 72%)`} stroke="#fff" strokeWidth="2" />
            <path d={knob(0, -30, "t")} fill={`hsl(${hue}, 75%, 72%)`} stroke="#fff" strokeWidth="2" />
            <path d={knob(30, 0, "r")} fill={`hsl(${hue}, 75%, 72%)`} stroke="#fff" strokeWidth="2" />
          </g>
          <g transform="translate(420 130) rotate(18)">
            <rect x="-26" y="-26" width="52" height="52" rx="2"
              fill={`hsl(${(hue + 30) % 360}, 70%, 68%)`} stroke="#fff" strokeWidth="2" />
            <path d={knob(-26, 0, "l")} fill={`hsl(${(hue + 30) % 360}, 70%, 68%)`} stroke="#fff" strokeWidth="2" />
          </g>

          <text x="250" y="478" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="14"
            fill="rgba(255,255,255,0.85)">— a memory, reassembled</text>
        </svg>
      </div>
    );
  }
  if (project.id === "logogo") {
    return (
      <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
        <svg viewBox="0 0 500 500" width="86%" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.45))" }}>
          {/* window chrome */}
          <rect x="30" y="40" width="440" height="420" rx="12" fill="#161311" />
          <rect x="30" y="40" width="440" height="26" rx="12" fill="#1f1a16" />
          <circle cx="50" cy="53" r="4.5" fill="#ff5f57" />
          <circle cx="64" cy="53" r="4.5" fill="#febc2e" />
          <circle cx="78" cy="53" r="4.5" fill="#28c840" />
          <text x="250" y="58" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#998870">LogoGO — untitled.logo</text>

          {/* left toolbar */}
          <rect x="30" y="66" width="44" height="394" fill="#1a1612" />
          {[0,1,2,3,4,5].map(i => {
            const sel = i === 1;
            return (
              <g key={i} transform={`translate(40 ${82 + i * 44})`}>
                <rect width="24" height="24" rx="4"
                  fill={sel ? `hsl(${hue}, 75%, 55%)` : "transparent"}
                  stroke={sel ? `hsl(${hue}, 75%, 55%)` : "#3a3530"} strokeWidth="1" />
                {i === 0 && <rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke={sel ? "#000" : "#998870"} strokeWidth="1.5" />}
                {i === 1 && <circle cx="12" cy="12" r="6" fill="none" stroke={sel ? "#000" : "#998870"} strokeWidth="1.5" />}
                {i === 2 && <path d="M 12 5 L 19 19 L 5 19 Z" fill="none" stroke={sel ? "#000" : "#998870"} strokeWidth="1.5" />}
                {i === 3 && <text x="12" y="16" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#998870">A</text>}
                {i === 4 && <path d="M 5 12 L 12 5 M 12 5 L 19 12 M 12 5 L 12 19" stroke="#998870" strokeWidth="1.5" fill="none" />}
                {i === 5 && <rect x="6" y="6" width="12" height="12" rx="0" fill="none" stroke="#998870" strokeDasharray="2 2" strokeWidth="1.2" />}
              </g>
            );
          })}

          {/* canvas */}
          <rect x="86" y="74" width="296" height="378" rx="4" fill="#0e0c0a" />
          {/* canvas grid */}
          {[1,2,3,4].map(i => (
            <line key={`gx${i}`} x1={86 + i * 60} y1="74" x2={86 + i * 60} y2="452"
              stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          {[1,2,3,4,5].map(i => (
            <line key={`gy${i}`} x1="86" y1={74 + i * 63} x2="382" y2={74 + i * 63}
              stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}

          {/* logo composition */}
          <g transform="translate(234 263)">
            {/* outer ring */}
            <circle r="92" fill="none" stroke={`hsl(${hue}, 80%, 55%)`} strokeWidth="14" />
            {/* inner shape */}
            <rect x="-44" y="-44" width="88" height="88" rx="14"
              fill={`hsl(${(hue + 30) % 360}, 70%, 60%)`} transform="rotate(12)" />
            {/* mark */}
            <text y="12" textAnchor="middle" fontFamily="sans-serif" fontWeight="800"
              fontSize="56" fill="#0e0c0a">LG</text>
            {/* selection box */}
            <rect x="-104" y="-104" width="208" height="208" fill="none"
              stroke={`hsl(${hue}, 90%, 70%)`} strokeWidth="1" strokeDasharray="3 3" />
            {[[-104,-104],[104,-104],[-104,104],[104,104]].map(([x,y], i) => (
              <rect key={i} x={x - 3} y={y - 3} width="6" height="6"
                fill={`hsl(${hue}, 90%, 70%)`} />
            ))}
          </g>

          {/* right layers panel */}
          <rect x="394" y="74" width="76" height="378" fill="#1a1612" />
          <text x="404" y="92" fontFamily="monospace" fontSize="8" fill="#998870" letterSpacing="1">LAYERS</text>
          {[
            { name: "Mark", active: true },
            { name: "Square", active: false },
            { name: "Ring", active: false },
            { name: "Grid", active: false },
          ].map((l, i) => (
            <g key={i} transform={`translate(404 ${108 + i * 26})`}>
              <rect width="56" height="20" rx="3"
                fill={l.active ? `hsla(${hue}, 75%, 55%, 0.2)` : "transparent"}
                stroke={l.active ? `hsl(${hue}, 75%, 55%)` : "#2a2520"} strokeWidth="1" />
              <circle cx="9" cy="10" r="3" fill={l.active ? `hsl(${hue}, 75%, 55%)` : "#3a3530"} />
              <text x="18" y="13" fontFamily="monospace" fontSize="8"
                fill={l.active ? "#fff" : "#998870"}>{l.name}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }
  if (project.id === "temportal") {
    const peers = [
      { x: 250, y: 90,  label: "ami",   group: "a", screen: false },
      { x: 380, y: 170, label: "ren",   group: "a", screen: true  },
      { x: 380, y: 310, label: "kai",   group: "b", screen: false },
      { x: 250, y: 390, label: "you",   group: "b", screen: false },
      { x: 120, y: 310, label: "mio",   group: "a", screen: false },
      { x: 120, y: 170, label: "haru",  group: "b", screen: false },
    ];
    const groupColor = (g) => g === "a" ? `hsl(${hue}, 80%, 60%)` : `hsl(${(hue + 40) % 360}, 75%, 62%)`;
    return (
      <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
        <svg viewBox="0 0 500 500" width="86%" style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.45))" }}>
          {/* room boundary */}
          <circle cx="250" cy="240" r="200" fill="none"
            stroke={`hsla(${hue}, 70%, 70%, 0.18)`} strokeWidth="1" strokeDasharray="3 4" />
          <circle cx="250" cy="240" r="160" fill={`hsla(${hue}, 60%, 30%, 0.18)`} />

          {/* mesh edges (full P2P graph) */}
          {peers.flatMap((a, i) =>
            peers.slice(i + 1).map((b, j) => (
              <line key={`e-${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={`hsla(${hue}, 70%, 65%, ${a.group === b.group ? 0.55 : 0.18})`}
                strokeWidth={a.group === b.group ? 1.5 : 1}
                strokeDasharray={a.group === b.group ? "0" : "2 3"} />
            ))
          )}

          {/* server node (signaling) */}
          <g>
            <rect x="222" y="212" width="56" height="56" rx="10"
              fill="#0c0c0c" stroke={`hsl(${hue}, 75%, 60%)`} strokeWidth="1.5" />
            <rect x="232" y="222" width="36" height="3" rx="1.5" fill={`hsl(${hue}, 75%, 60%)`} />
            <rect x="232" y="230" width="28" height="3" rx="1.5" fill={`hsla(${hue}, 60%, 60%, 0.6)`} />
            <rect x="232" y="238" width="32" height="3" rx="1.5" fill={`hsla(${hue}, 60%, 60%, 0.6)`} />
            <circle cx="262" cy="252" r="2.5" fill={`hsl(${hue}, 90%, 70%)`}>
              <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
            </circle>
            <text x="250" y="282" textAnchor="middle" fontFamily="monospace" fontSize="7"
              fill={`hsla(${hue}, 30%, 80%, 0.7)`} letterSpacing="1">SIGNALING</text>
          </g>

          {/* peer nodes */}
          {peers.map((p, i) => (
            <g key={`p-${i}`}>
              <circle cx={p.x} cy={p.y} r="22" fill="#0a0a0a"
                stroke={groupColor(p.group)} strokeWidth="2" />
              <circle cx={p.x} cy={p.y} r="22" fill="none"
                stroke={groupColor(p.group)} strokeWidth="2" opacity="0.35">
                <animate attributeName="r" values="22;30;22" dur={`${2.4 + i * 0.2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0;0.35" dur={`${2.4 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              {/* mic icon */}
              <rect x={p.x - 3} y={p.y - 7} width="6" height="10" rx="3" fill={groupColor(p.group)} />
              <path d={`M ${p.x - 6} ${p.y + 1} a 6 6 0 0 0 12 0`} stroke={groupColor(p.group)} strokeWidth="1.5" fill="none" />
              <line x1={p.x} y1={p.y + 7} x2={p.x} y2={p.y + 11} stroke={groupColor(p.group)} strokeWidth="1.5" />
              {/* screen-share badge */}
              {p.screen && (
                <g transform={`translate(${p.x + 14} ${p.y - 18})`}>
                  <circle r="8" fill={`hsl(${hue}, 90%, 65%)`} />
                  <rect x="-4" y="-3" width="8" height="6" rx="1" fill="#0a0a0a" />
                </g>
              )}
              <text x={p.x} y={p.y + 38} textAnchor="middle" fontFamily="monospace" fontSize="9"
                fill="#cfd6dc">{p.label}</text>
            </g>
          ))}

          {/* room header */}
          <text x="250" y="40" textAnchor="middle" fontFamily="monospace" fontSize="10"
            fill={`hsla(${hue}, 30%, 90%, 0.7)`} letterSpacing="2">ROOM · 6 / 12</text>
          <text x="250" y="56" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="13"
            fill="#dde3e8">temportal</text>
        </svg>
      </div>
    );
  }
  // keyboard
  return (
    <div ref={ref} onMouseMove={onMove} className="case-art" style={{ background: bg }}>
      <svg viewBox="0 0 500 400" width="88%" style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))" }}>
        {/* left half */}
        <g transform="translate(30 100) rotate(-8)">
          <rect width="200" height="170" rx="14" fill="#1a1a1a" />
          {[0,1,2,3].map(r => (
            [0,1,2,3,4].map(c => (
              <rect key={`${r}-${c}`} x={14 + c * 34} y={14 + r * 34} width="28" height="28" rx="5"
                fill={(r === 3 && c >= 3) ? `hsl(${hue}, 70%, 60%)` : "#2a2a2a"} stroke="#444" />
            ))
          ))}
          {/* thumb cluster */}
          <g transform="translate(70 150)">
            <rect x="0" y="0" width="36" height="20" rx="10" fill={`hsl(${hue}, 70%, 60%)`} />
            <rect x="42" y="-6" width="36" height="26" rx="10" fill={`hsl(${hue}, 80%, 70%)`} />
          </g>
        </g>
        {/* right half */}
        <g transform="translate(270 100) rotate(8)">
          <rect width="200" height="170" rx="14" fill="#1a1a1a" />
          {[0,1,2,3].map(r => (
            [0,1,2,3,4].map(c => (
              <rect key={`${r}-${c}`} x={14 + c * 34} y={14 + r * 34} width="28" height="28" rx="5"
                fill={(r === 3 && c <= 1) ? `hsl(${hue}, 70%, 60%)` : "#2a2a2a"} stroke="#444" />
            ))
          ))}
          <g transform="translate(40 150)">
            <rect x="0" y="-6" width="36" height="26" rx="10" fill={`hsl(${hue}, 80%, 70%)`} />
            <rect x="42" y="0" width="36" height="20" rx="10" fill={`hsl(${hue}, 70%, 60%)`} />
          </g>
        </g>
        {/* cable */}
        <path d="M 230 210 Q 250 240 270 210" stroke="#444" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
}

function MonolithView({ lang }) {
  const heroRef = React.useRef(null);
  const [scrollY, setScrollY] = React.useState(0);
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  // parallax for hero title
  const parallax = Math.min(scrollY * 0.25, 300);
  const heroOpacity = Math.max(0, 1 - scrollY / 700);
  const titleShift = (mouse.x - 0.5) * 12;
  const titleShiftY = (mouse.y - 0.5) * 8;

  return (
    <div className="mono" data-screen-label="Monolith">
      {/* HERO */}
      <section className="mono__hero" ref={heroRef}>
        {/* Ambient glow */}
        <div
          className="mono__glow"
          style={{
            transform: `translate(${mouse.x * 100 - 50}vw, ${mouse.y * 100 - 50}vh)`,
          }}
        />
        {/* Corner lockups */}
        <div className="mono__lockup mono__lockup--tl">
          <span>N°</span><span>01</span>
          <span className="mono__lockup-rule" />
          <span>PORTFOLIO</span>
          <span>2026</span>
        </div>
        <div className="mono__lockup mono__lockup--tr">
          <span>LAT 35.6762°</span>
          <span>LON 139.6503°</span>
          <span className="mono__lockup-rule" />
          <span>TOKYO · JP</span>
        </div>
        <div className="mono__lockup mono__lockup--bl">
          <span>{lang === "ja" ? "現在" : "Currently"}</span>
          <span className="mono__lockup-rule" />
          <span>{lang === "ja" ? "学生" : "Student"}</span>
          <span>{lang === "ja" ? "ものづくり" : "Making"}</span>
        </div>

        <div
          className="mono__hero-inner"
          style={{ transform: `translateY(${-parallax}px)`, opacity: heroOpacity }}
        >
          <div className="mono__eyebrow">
            <span>— Taka Koheiya · {lang === "ja" ? "広平野 鷹" : "広平野 鷹"}</span>
            <span style={{ marginLeft: "auto" }}>{lang === "ja" ? "ポートフォリオ" : "Portfolio"} / v1.0</span>
          </div>
          <h1
            className="mono__title"
            style={{
              transform: `translate(${titleShift}px, ${titleShiftY}px)`,
            }}
          >
            {lang === "ja" ? (
              <>
                <span className="mono__title-line">欲しいものを、</span>
                <span className="mono__title-line italic accent">欲しいから、</span>
                <span className="mono__title-line">つくる。</span>
              </>
            ) : (
              <>
                <span className="mono__title-line">I build</span>
                <span className="mono__title-line italic accent">what I</span>
                <span className="mono__title-line">want to use.</span>
              </>
            )}
          </h1>
          <div className="mono__sub">
            <p>{lang === "ja" ? DATA.intro.ja : DATA.intro.en}</p>
            <p>
              {lang === "ja"
                ? "学生。自分の手が届く範囲で、アプリとツールと基板を設計しています。小さくても、見えないところまで仕上げることを大切にしています。"
                : "Student. I design apps, tools, and circuit boards within arm's reach — finishing even the parts nobody sees."}
            </p>
          </div>
        </div>
        <div className="mono__scroll-cue">
          <span>{lang === "ja" ? "スクロール" : "Scroll"}</span>
          <span className="mono__scroll-line" />
        </div>
      </section>

      {/* Marquee */}
      <div className="mono__marquee">
        <div className="mono__marquee-track">
          {[1, 2, 3].map(i => (
            <span key={i}>
              Flutter <span>Python</span> <span>Expo</span> <span>KiCad</span> <span>Flutter</span> <span>Go</span> <span>React </span>
            </span>
          ))}
        </div>
      </div>

      {/* CASES */}
      <section className="mono__cases" id="work" data-screen-label="Work">
        <div className="mono__cases-head">
          <h2>
            {lang === "ja" ? (<>プロダクト</>) : (<>Selected<br/><em style={{ fontStyle: "italic" }}>work</em>.</>)}
          </h2>
          <p>
            {lang === "ja"
              ? "動いているものから、まだ動かないものまで。どれも「使っていて楽しい」を軸に、小さな手触りを大事にしています。"
              : "Some shipping, some still in the workshop. Every one starts from the same question: does this feel good to use?"}
          </p>
        </div>

        {DATA.projects.map((p, i) => {
          const Tag = p.url ? "a" : "article";
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
          <Tag className="mono__case" key={p.id} {...linkProps}>
            <div className="mono__case-media">
              <CaseArt project={p} index={i} />
            </div>
            <div className="mono__case-body">
              <div className="mono__case-label">
                <span>— {p.num}</span>
                <b>{L(p.status, lang)}</b>
                <span>· {L(p.kind, lang)}</span>
                {p.url && <span className="mono__case-link">{lang === "ja" ? "サイトを開く ↗" : "Visit site ↗"}</span>}
              </div>
              <h3>{L(p.name, lang)}</h3>
              <p className="mono__case-desc">{L(p.long, lang)}</p>
              <dl className="mono__case-meta">
                <div>
                  <dt>Year</dt>
                  <dd>{p.year}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{L(p.role, lang)}</dd>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <dt>Stack</dt>
                  <dd>{p.stack}</dd>
                </div>
              </dl>
            </div>
          </Tag>
          );
        })}
      </section>
    </div>
  );
}

window.MonolithView = MonolithView;

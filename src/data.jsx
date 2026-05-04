// Portfolio data — Taka Koheiya
const DATA = {
  name: { ja: "広平野 鷹", en: "Taka Koheiya" },
  handle: "@takakoheiya",
  role: { ja: "ソフトウェア・ものづくりの学生", en: "Student — software & making" },
  location: "Tokyo, JP",
  email: "hello@koheiya.dev",

  intro: {
    ja: "アプリ、ツール、ガジェット。Flutter / Python / Expo を使って、日々の小さな不便をちゃんと解くものを作っています。",
    en: "Apps, tools, and a physical keyboard. I use Flutter, Python, and Expo to build small things that fix small daily frictions — properly.",
  },

  // Three case studies
  projects: [
    {
      id: "capcell",
      num: "01",
      name: "CapCell",
      year: "2025",
      status: { ja: "リリース済み", en: "Shipped" },
      kind: { ja: "デスクトップアプリ", en: "Desktop App" },
      role: { ja: "個人開発", en: "Solo" },
      stack: "Flutter · Dart",
      url: "https://takamaruru.github.io/CapCell_HP/",
      short: {
        ja: "プロジェクトをツリー構造で見渡せる、デスクトップ向けのタスク管理ツール。",
        en: "A desktop project-tree app for managing nested tasks at a glance.",
      },
      long: {
        ja: "プロジェクト・サブタスク・メモをツリー構造で整理できるWindows/macOS向けアプリ。階層をたたんで全体を俯瞰したり、掘り下げて集中したり、行き来の心地よさを重視して設計しています。",
        en: "A Windows/macOS app that organizes projects, subtasks, and notes into a single tree. Collapse to see the whole shape, or dive in and focus — the shuttling between the two is where the feel matters most.",
      },
      // Visual identity
      hue: 16, // orange-ish
      theme: "warm",
    },
    {
      id: "iruka",
      num: "02",
      name: "iruka",
      year: "2025–",
      status: { ja: "開発中", en: "In progress" },
      kind: { ja: "モバイルアプリ", en: "Mobile App" },
      role: { ja: "個人開発", en: "Solo" },
      stack: "Flutter · Dart",
      short: {
        ja: "マップで探したエリアにいる友達だけが見える、位置情報共有アプリ。",
        en: "A location-sharing app: friends appear only inside the area you search.",
      },
      long: {
        ja: "「位置情報が常にオン／オフ」という二択に違和感があり、マップ上の任意の範囲を検索したときだけ、その範囲内の友達が見える仕組みを試しています。プライバシーと偶然性のバランスを探るプロジェクト。",
        en: "Pushing back against the on/off binary of location sharing. Friends become visible only when someone actively searches a region on the map — a small experiment in balancing privacy and serendipity.",
      },
      hue: 195,
      theme: "cool",
    },
    {
      id: "classtodo",
      num: "03",
      name: "ClassTodo",
      year: "2026",
      status: { ja: "開発中", en: "In progress" },
      kind: { ja: "学生向けツール", en: "Student Tool" },
      role: { ja: "個人開発", en: "Solo" },
      stack: "Expo · React Native · TypeScript",
      short: {
        ja: "時間割に紐づく「今日やること」だけが並ぶ、学生のための小さなToDo。",
        en: "A tiny to-do built around the timetable — only today's classwork shows up.",
      },
      long: {
        ja: "提出物・課題を授業コマごとに紐づけ、授業中でも片手で扱える操作感を追求中。学校生活の生活リズムに寄り添うアプリを目指しています。",
        en: "Homework attached to class periods; one-handed operation during class. A companion that matches the school-day rhythm.",
      },
      hue: 214, // blue
      theme: "cool",
    },
    {
      id: "keeb",
      num: "04",
      name: { ja: "自作キーボード", en: "Custom Keyboard" },
      year: "2026",
      status: { ja: "設計中", en: "Prototyping" },
      kind: { ja: "ハードウェア", en: "Hardware" },
      role: { ja: "設計 / 基板 / ファーム", en: "PCB, firmware, keymap" },
      stack: "KiCad · QMK · 3D Printing",
      short: {
        ja: "親指を主役にした、ずっと触っていたい左右分割キーボード。",
        en: "A split keyboard where the thumb finally gets to lead.",
      },
      long: {
        ja: "親指クラスタを贅沢に使った左右分離型。基板設計からファームウェア、ケース造形まで全行程を自分で。ソフトとハードの境界で学ぶプロジェクト。",
        en: "A split board centered on a generous thumb cluster. PCB, firmware, and case — all done in-house. Learning at the edge of software and hardware.",
      },
      hue: 280, // purple
      theme: "tech",
    },
    {
      id: "temportal",
      num: "05",
      name: "Temportal",
      year: "2026",
      status: { ja: "稼働中", en: "Live" },
      kind: { ja: "リアルタイム通信", en: "Realtime Server" },
      role: { ja: "個人開発", en: "Solo" },
      stack: "Go · WebSocket · WebRTC",
      url: "https://temportal.koheiya-taka.com/",
      short: {
        ja: "用が済めば消える、一時的なボイスチャットルームのシグナリング基盤。",
        en: "A signaling backbone for ephemeral voice rooms — gone when you leave.",
      },
      long: {
        ja: "WebRTCのP2P通話を支えるGo製シグナリングサーバー。ルームは最大12人、グループ分け・画面共有・チャットに対応し、最後の1人が抜けると痕跡なく消える「その場限り」の場をつくっています。低レイテンシと運用の軽さを両立する設計を追求中。",
        en: "A Go signaling server that brokers WebRTC peer-to-peer calls. Up to 12 people per room, with subgroups, screen share, and chat — and the room evaporates the moment the last person leaves. Built around low latency and a deliberately small operational footprint.",
      },
      hue: 158, // mint / signal green
      theme: "tech",
    },
    {
      id: "reverie",
      num: "06",
      name: { ja: "レベリエ・パズル", en: "Reverie Puzzle" },
      year: "2026",
      status: { ja: "開発中", en: "In progress" },
      kind: { ja: "モバイルアプリ", en: "Mobile App" },
      role: { ja: "個人開発", en: "Solo" },
      stack: "Capacitor · Vite · TypeScript",
      short: {
        ja: "大切な写真をジグソーパズルに変えて、思い出を振り返るアプリ。",
        en: "Turn cherished photos into jigsaw puzzles — a memory gallery you assemble by hand.",
      },
      long: {
        ja: "手元の写真を自動でピースに分割し、組み立てた完成品はギャラリーに飾られていく。「ただ眺める」より「もう一度たどる」ことで思い出を再生する、温度のある写真アプリを目指しています。Capacitor で iOS / Android / Web を一本化。",
        en: "Photos are sliced into jigsaw pieces; finished puzzles become a gallery of memories you can revisit. Less about scrolling, more about retracing — a warmer kind of photo app. Capacitor unifies iOS, Android, and Web from one codebase.",
      },
      hue: 340, // warm rose
      theme: "warm",
    },
    {
      id: "logogo",
      num: "07",
      name: "LogoGO",
      year: "2026",
      status: { ja: "開発中", en: "In progress" },
      kind: { ja: "デスクトップアプリ", en: "Desktop App" },
      role: { ja: "個人開発", en: "Solo" },
      stack: "Electron · JavaScript",
      short: {
        ja: "図形と画像を重ねて、自分用のロゴをサッと組めるデスクトップエディタ。",
        en: "Stack shapes and images into a logo — a small desktop editor for fast iteration.",
      },
      long: {
        ja: "シンプルな図形・画像・テキストをレイヤーとして重ねて、自分用のロゴやアイコンを素早く試作するためのEditor。日本語/英語のメニューを切り替えられ、ショートカット中心で作業できる軽さを優先しています。Electronで自作のショートカット体系を試す実験場でもあります。",
        en: "A small desktop editor for sketching personal logos and icons — stack shapes, images, and text as layers and iterate fast. Bilingual menus, shortcut-first interactions, and intentional minimalism. Also a sandbox for trying my own keyboard-shortcut grammar in Electron.",
      },
      hue: 48, // amber / go-yellow
      theme: "warm",
    },
  ],

  // Now — currently doing
  now: [
    {
      when: "Apr 26",
      ja: "ClassTodoの<em>β版</em>を学内で配布中",
      en: "Seeding the ClassTodo <em>beta</em> on campus",
    },
    {
      when: "Apr 26",
      ja: "自作キーボードの<em>rev.2 基板</em>を発注",
      en: "Ordered <em>rev.2 PCB</em> of the keyboard",
    },
    {
      when: "2026",
      ja: "<em>Flutter</em>と<em>Rust</em>を行き来しながら学習",
      en: "Studying <em>Flutter</em> and <em>Rust</em> in parallel",
    },
    {
      when: "Always",
      ja: "使っていて<em>ちゃんと</em>したものを探し続ける",
      en: "Chasing things that are <em>properly made</em>",
    },
  ],

  // Socials
  links: [
    { label: "GitHub", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "Zenn", href: "#" },
    { label: "Email", href: "mailto:hello@koheiya.dev" },
  ],
};

// helper to get localized field
const L = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.ja || field.en;
};

window.DATA = DATA;
window.L = L;

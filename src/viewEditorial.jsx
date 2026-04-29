// View 02 — Editorial (magazine)
function EditorialView({ lang }) {
  const date = new Date().toLocaleDateString(lang === "ja" ? "ja-JP" : "en-GB", {
    year: "numeric", month: "long", day: "numeric"
  });

  return (
    <div className="ed" data-screen-label="Editorial">
      <header className="ed__masthead">
        <div className="ed__issue">
          <span>Issue Nº 01 · Vol. 2026</span>
          <span>{date}</span>
          <span>Tokyo · ¥0 — free to read</span>
        </div>
        <h1 className="ed__title">
          {lang === "ja" ? (<>KOHEIYA <em>&amp;</em><br/>CO.</>) : (<>KOHEIYA <em>&amp;</em><br/>CO.</>)}
        </h1>
      </header>

      <section className="ed__dek">
        <div className="ed__dek-label">
          — {lang === "ja" ? "編集前書き" : "Editor's Note"}
        </div>
        <p>
          {lang === "ja"
            ? "学生の広平野 鷹が、日々つくり続けている小さな道具たちの台帳。アプリと基板と、少しの雑記。"
            : "A working ledger of small tools by Taka Koheiya, student. Apps, circuit boards, and a little prose on the side."}
        </p>
        <aside>
          <b>{lang === "ja" ? "制作" : "MAKER"}</b><br/>
          {lang === "ja" ? "広平野 鷹" : "Taka Koheiya"}<br/>
          <br/>
          <b>STACK</b><br/>
          Flutter · Expo · Python<br/>
          KiCad · QMK
        </aside>
      </section>

      <section className="ed__index" id="work">
        <div className="ed__index-head">
          <span>Nº</span>
          <span>{lang === "ja" ? "年" : "Year"}</span>
          <span>{lang === "ja" ? "タイトル" : "Title"}</span>
          <span>{lang === "ja" ? "要旨" : "Synopsis"}</span>
          <span>{lang === "ja" ? "分類" : "Dept."}</span>
        </div>
        {DATA.projects.map((p) => {
          const Tag = p.url ? "a" : "div";
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
          <Tag className="ed__work" key={p.id} {...linkProps}>
            <span className="ed__work-num">— {p.num}</span>
            <span className="ed__work-year">{p.year}</span>
            <span className="ed__work-title">{L(p.name, lang)}{p.url && <span className="ed__work-arrow"> ↗</span>}</span>
            <span className="ed__work-desc">{L(p.short, lang)}</span>
            <span className="ed__work-tags">{L(p.kind, lang)} · {L(p.status, lang)}</span>
          </Tag>
          );
        })}
      </section>

      <section className="ed__spread">
        <div>
          <h2 className="ed__spread-headline">
            {lang === "ja" ? (<>手で、<br/>つくる<br/><em>こと。</em></>) : (<>Making<br/>with<br/><em>hands.</em></>)}
          </h2>
        </div>
        <div className="ed__spread-body">
          <p>
            {lang === "ja"
              ? "画面の中だけで完結しない、物理的な重さと手触り。その境界線でものをつくるのが好きです。アプリの角丸を悩むのと同じ温度で、キーボードの親指キーの角度を悩みます。"
              : "Not everything finishes inside the screen. The border between pixels and matter — that's where I like to work. I argue about rounded corners with the same care I give a thumb-key's tilt."}
          </p>
          <p>
            {lang === "ja"
              ? "学生としての時間の中で、小さく、たくさん、手を動かすこと。出荷されなかった試作も含めて、全部この台帳の一部です。次に何ができるか、まだ私にもわかりません。"
              : "Student-time is finite, so I keep the loop small and fast: many prototypes, some shipped. Even the ones that never left the workshop belong on this ledger. What's next is still unknown — even to me."}
          </p>
          <p>
            {lang === "ja"
              ? "同じ画面を見ている誰かと、一緒につくる時間も増やしていきたい。もし温度感が合いそうなら、連絡してください。"
              : "I'd like more time making things with people who're looking at the same screen. If the temperature feels right — reach out."}
          </p>
        </div>
      </section>
    </div>
  );
}

window.EditorialView = EditorialView;

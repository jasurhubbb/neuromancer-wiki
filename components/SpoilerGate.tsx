import type { ReactNode } from "react";

export function SpoilerGate({ children, title }: { children: ReactNode; title: string }) {
  return (
    <>
      <section className="spoiler-gate" aria-labelledby="spoiler-warning-title">
        <span className="spoiler-gate__signal" aria-hidden="true">!</span>
        <div>
          <p className="eyebrow">Full-book spoilers ahead</p>
          <h2 id="spoiler-warning-title">Continue into {title}?</h2>
          <p>This article discusses outcomes and identities from the end of the novel.</p>
          <a className="hero-cta" href="#full-article">Continue to full article</a>
        </div>
      </section>
      <div className="spoiler-gate__content" id="full-article">
        {children}
      </div>
    </>
  );
}

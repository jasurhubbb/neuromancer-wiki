import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <div className="wordmark wordmark--footer">
            <span className="wordmark__mark" aria-hidden="true">N<span>A</span></span>
            <span className="wordmark__text">Neuromancer <em>Atlas</em></span>
          </div>
          <p>An independent, reader-made field guide to William Gibson’s <i>Neuromancer</i>.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/wiki">All articles</Link>
          <Link href="/glossary">First-reader glossary</Link>
          <Link href="/research">Research ledger</Link>
          <Link href="/about">Research & editorial policy</Link>
          <a href="https://williamgibsonbooks.com/" rel="noreferrer">William Gibson’s site ↗</a>
        </nav>
        <p className="site-footer__note">
          This unofficial wiki is not affiliated with William Gibson, Ace, Penguin Random House, or Apple.
          Quotations and marks remain the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}

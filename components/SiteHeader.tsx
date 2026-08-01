import Link from "next/link";
import { SearchBox, type SearchRecord } from "./SearchBox";

export function SiteHeader({ searchRecords }: { searchRecords: SearchRecord[] }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="wordmark" aria-label="Neuromancer Atlas home">
            <span className="wordmark__mark" aria-hidden="true">N<span>A</span></span>
            <span className="wordmark__text">Neuromancer <em>Atlas</em></span>
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            <Link href="/wiki">A–Z</Link>
            <Link href="/category/Characters">Characters</Link>
            <Link href="/category/Technology">Matrix</Link>
            <Link href="/glossary">Glossary</Link>
            <Link href="/category/Chapter%20guide">Read-along</Link>
            <Link href="/research">Research</Link>
          </nav>
          <SearchBox records={searchRecords} compact />
        </div>
      </header>
    </>
  );
}

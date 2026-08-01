import type { Metadata } from "next";
import { searchRecords } from "@/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WikiDirectory } from "@/components/WikiDirectory";

export const metadata: Metadata = {
  title: "A–Z index",
  description: "Browse every Neuromancer Atlas article by title, category, or keyword.",
};

export default function WikiIndex() {
  return (
    <>
      <SiteHeader searchRecords={searchRecords} />
      <main id="main-content" className="listing-page">
        <div className="page-frame">
          <WikiDirectory records={searchRecords} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export interface ImageRecord {
  key: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
  license: string;
}

export const imageRecords: ImageRecord[] = [
  {
    key: "tokyo-night",
    src: "/images/tokyo-night.jpg",
    width: 1280,
    height: 782,
    alt: "Tokyo skyline and waterfront illuminated at night",
    caption: "A present-day Tokyo nightscape, used as contextual rather than canonical imagery for the novel’s Chiba setting.",
    credit: "T.Kiya",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Night_view_Tokyo,_%E5%A4%9C%E6%99%AF_%E6%9D%B1%E4%BA%AC_(12949766414).jpg",
    license: "CC BY-SA 2.0",
  },
  {
    key: "orbital-colony",
    src: "/images/orbital-colony.jpg",
    width: 1000,
    height: 765,
    alt: "NASA artist concept of a vast rotating orbital settlement",
    caption: "A 1970s NASA space-colony concept. Freeside is fictional; the image gives historical design context, not a canonical depiction.",
    credit: "NASA / DVIDS",
    sourceUrl: "https://www.dvidshub.net/image/700254/space-colony-artist-concepts-bw-dupe-negative-were-made-also",
    license: "Public domain",
  },
];

export const imageByKey = new Map(imageRecords.map((image) => [image.key, image]));

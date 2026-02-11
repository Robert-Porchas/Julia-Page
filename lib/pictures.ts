export type Picture = { id: string; src: string; alt: string };

const filenames = [
  "Baddie.jpg",
  "EarlyHeadlock.jpg",
  "FirstDate.jpg",
  "HollowPumpkin.jpg",
  "Pahrump1.jpg",
  "Prom.jpg",
  "Rise1Holding.jpg",
  "Risefootheart.jpg",
  "aiBday.jpg",
  "beautiful.JPG",
  "hollowSubway.jpg",
  "mirrorpic.jpg",
  "pinballMuseum.jpg",
  "rise2mirror.JPG",
] as const;

const toId = (filename: string) => filename.replace(/\.[^.]+$/, "");
const toAlt = (filename: string) =>
  toId(filename).replace(/[-_]+/g, " ").trim();

export const pictures: Picture[] = filenames.map((filename) => ({
  id: toId(filename),
  src: `/juliaPhotos/${filename}`,
  alt: toAlt(filename),
}));

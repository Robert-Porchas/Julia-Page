export type Picture = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

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

const pictureText: Record<
  (typeof filenames)[number],
  { title: string; description: string }
> = {
  "Baddie.jpg": {
    title: "Baddie",
    description: "A confident portrait with a bold, direct energy.",
  },
  "EarlyHeadlock.jpg": {
    title: "Early Headlock",
    description: "A playful candid that captures motion and personality.",
  },
  "FirstDate.jpg": {
    title: "First Date",
    description: "A soft, cinematic moment with warm, nostalgic framing.",
  },
  "HollowPumpkin.jpg": {
    title: "Hollow Pumpkin",
    description: "A moody seasonal scene with texture and contrast.",
  },
  "Pahrump1.jpg": {
    title: "Pahrump 1",
    description: "A desert snapshot that leans into open space and light.",
  },
  "Prom.jpg": {
    title: "Prom",
    description: "A memory piece centered on style, celebration, and glow.",
  },
  "Rise1Holding.jpg": {
    title: "Rise 1 Holding",
    description: "An intimate frame with hands and expression in focus.",
  },
  "Risefootheart.jpg": {
    title: "Rise Foot Heart",
    description: "A quirky visual detail that feels spontaneous and sweet.",
  },
  "aiBday.jpg": {
    title: "AI Birthday",
    description: "A playful birthday capture with a bright, modern feel.",
  },
  "beautiful.JPG": {
    title: "Beautiful",
    description: "A classic portrait focused on calm presence and light.",
  },
  "hollowSubway.jpg": {
    title: "Hollow Subway",
    description: "An urban scene with depth, shadow, and movement.",
  },
  "mirrorpic.jpg": {
    title: "Mirror Pic",
    description: "A reflective self-portrait with casual confidence.",
  },
  "pinballMuseum.jpg": {
    title: "Pinball Museum",
    description: "Colorful arcade atmosphere with energetic visual texture.",
  },
  "rise2mirror.JPG": {
    title: "Rise 2 Mirror",
    description: "A continuation portrait using mirrors and layered framing.",
  },
};

export const pictures: Picture[] = filenames.map((filename) => ({
  id: toId(filename),
  src: `/juliaPhotos/${filename}`,
  alt: toAlt(filename),
  title: pictureText[filename].title,
  description: pictureText[filename].description,
}));

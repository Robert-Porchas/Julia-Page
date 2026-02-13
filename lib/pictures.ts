export type Picture = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

const filenames = [
  "Baddie.avif",
  "EarlyHeadlock.avif",
  "FirstDate.avif",
  "HollowPumpkin.avif",
  "Pahrump1.avif",
  "PahrumpShirt.avif",
  "Prom.avif",
  "Rave.avif",
  "Rise1Holding.avif",
  "Rise1Smile.avif",
  "Risefootheart.avif",
  "aiBday.avif",
  "beautiful.avif",
  "hollowSubway.avif",
  "mirrorpic.avif",
  "paintball.avif",
  "pinballMuseum.avif",
  "rise_kissing.avif",
  "rise2mirror.avif",
] as const;

const toId = (filename: string) => filename.replace(/\.[^.]+$/, "");
const toAlt = (filename: string) =>
  toId(filename).replace(/[-_]+/g, " ").trim();

const pictureText: Record<
  (typeof filenames)[number],
  { title: string; description: string }
> = {
  "Baddie.avif": {
    title: "Baddie",
    description: "Genuinely just a photo that I thought you looked so fine in. You've already been aware of this, but you look gorgeous in this photo.",
  },
  "EarlyHeadlock.avif": {
    title: "Super Early Photo",
    description: "I forgot the date, but this photo was taken at least like 2-3 years ago. I thought we looked so cute, and I love that you still very occasionally do this to me.",
  },
  "FirstDate.avif": {
    title: "Matching Fits",
    description: "I remember this date so vividly still. I was still nervous around you because we hadn't solidified anything yet and I remember going through the aisles and you reached back to hold my hands and I was SO NERVOUS!!!!!!! that gave ME butterflies. I love you.",
  },
  "HollowPumpkin.avif": {
    title: "Pumpkin",
    description: "Idk why we never actually did anything big for holloween up until this as far as I can remember, and this is such a sweet photo for me. I think we look really cute and the size comparison also makes me laugh I feel like I look so much bigger than you in this photo.",
  },
  "Pahrump1.avif": {
    title: "Pahrump the first",
    description: "I remember this was the first trip that we actually went kinda far for, and it was so much fun. This was the first time I spent real time around Kelly so I was a little intimidated just because I wanted her to like me, but I loved spending that time with you.",
  },
  "PahrumpShirt.avif": {
    title: "Peak Shirt",
    description: "I can't remember which time this was, this may have been the one where I was super grumpy, but this photo is so funny to me. I remember pointing it out to you and this pose you did is so cute, I love how you look like you weren't trying to be pretty and yet you still looked so pretty.",
  },
  "Prom.avif": {
    title: "Prom",
    description: "Our first prom, and kinda the only one because I couldn't go to your senior year one but still. I had so much fun with you that night, and it's a very warm memory for me, I felt like we looked so perfect together in every photo, we looked like 2 perfect puzzle pieces type shi.",
  },
  "Rave.avif": {
    title: "Rave",
    description: "I still remember going to this rave with you and I was looking for the photos of us together but for whatever reason, this was the only photo I could find of us T-T. Please don't beat me I love you.",
  },
  "Rise1Holding.avif": {
    title: "The first son of Rise",
    description: "This rise was definitely a big event for me, this felt so expensive at the time which is lowkey sad, but when we got there I had such a good experience with you. I love this photo of us, it looks a little cliche but I had a lot of fun with you, and you made it memorable for me.",
  },
  "Rise1Smile.avif": {
    title: "Rise First Lift",
    description: "I think we look really cute in this, and this was after we let go of both of the lanterns if i remember correctly. I remember kissing you right before this for whatever reason, but I love you so much for getting me to come to this.",
  },
  "Risefootheart.avif": {
    title: "Heart",
    description: "Nothing crazy about this photo, but I think it's sweet and I didn't remember taking this, so when I was searching for photos for this seeing this was a nice reminder.",
  },
  "aiBday.avif": {
    title: "Ai's Bday",
    description: "Dude idk why but I feel like we look like the IT couple. Like we look so good together in this. Genuinely one of the best photos I think that you've ever taken of us.",
  },
  "beautiful.avif": {
    title: "HEEEEEEEEY",
    description: "I know this is my wallpaper, and ITS FOR A REASON. You look absolutely gorgeous in this, there is very few photos I've ever seen that ever can compete with the beauty that you show in this photo.",
  },
  "hollowSubway.avif": {
    title: "Subway Surfers",
    description: "This is crazy how long ago this was, but I think this was when we were still in highschool. I remember that for whatever reason, probably me, but we weren't gonna do anything crazy for holloween so we dressed as the characters from subway surfers and I thought we looked really cute.",
  },
  "mirrorpic.avif": {
    title: "Mirror Pic",
    description: "If I remember correctly this was lowkey either during or right after our rough patch, and I thought this was so much fun. We look really cute together.",
  },
  "paintball.avif": {
    title: "Paintball",
    description: "You look so cute in this. That's it, I remember you went paintballing and you wanted to cover up to be safe, and I love how cute you look in that jacket.",
  },
  "pinballMuseum.avif": {
    title: "Pinball Museum",
    description: "I think we went here for gf day or something, but I'm so glad I downloaded that filter app, I don't even use it anymore but this filter looked so good on you, and I don't think that you liked the photos but I really like how you look in this, it's perfect.",
  },
  "rise_kissing.avif": {
    title: "Rise Smooch",
    description: "This photo. Dude. We look so perfect, I do wish that I centered the lamps a little more, but regardless everything about this photo is so pretty, and it's my favorite photo to come out of either Rise events.",
  },
  "rise2mirror.avif": {
    title: "Rise 2 Mirror",
    description: "Ik you might think this photo looks normal af for us, but to me this was a good photo, it reminds me of everything about rise, and I think that our fits complemented each other's really well.",
  },
};

export const pictures: Picture[] = filenames.map((filename) => ({
  id: toId(filename),
  src: `/juliaPhotos/${filename}`,
  alt: toAlt(filename),
  title: pictureText[filename].title,
  description: pictureText[filename].description,
}));

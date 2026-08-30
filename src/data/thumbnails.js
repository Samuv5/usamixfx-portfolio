const images = import.meta.glob("../assets/thumbnails/*", { eager: true, import: "default" });

function image(name) {
  const match = Object.entries(images).find(([path]) => path.endsWith(name));
  if (!match) throw new Error(`Thumbnail not found: ${name}`);
  return match[1];
}

export const thumbnails = [
  { image: image("New Project (11).png"), alt: "Thumbnail Minecraft 4" },
  { image: image("New Project (1).png"), alt: "Thumbnail Minecraft 1" },
  { image: image("New Project (3).png"), alt: "Thumbnail Minecraft 2" },
  { image: image("New Project (4) (3).png"), alt: "Thumbnail Minecraft 3" },
  { image: image("miniatura de chifruit.jpg"), alt: "Thumbnail Chifruit" },
  { image: image("uFywkZyPL5Q-HD.jpg"), alt: "Thumbnail YouTube" },
];

export const chifruitThumbnail = image("miniatura de chifruit.jpg");
export const heroThumbnail = image("New Project (11).png");

export interface Post {
  slug: string;
  image: string;
  title: string;
  content: string;
}

// Simulated blog posts data
export const posts: Post[] = [
  {
    slug: "alovera",
    image: "/png/plant1.png",
    title: "Natural Plants",
    content: "PKR: 250.00"
  },
  {
    slug: "lichi",
    image: "/png/plant2.png",
    title: "Artificial Plants",
    content: "PKR: 360.00"
  },
  {
    slug: "cactus",
    image: "/png/plant3.png",
    title: "Artificial Plants",
    content: "PKR: 400.00",
  },
];

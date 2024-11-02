export interface Post {
    slug: string;
    image: string;
    title: string;
    content: string;
  }
  
  // Simulated blog posts data
  export const aboutPosts: Post[] = [
    {
      slug: "large",
      image: "/svg/img1.svg",
      title: "Large Assortment",
      content: "we offer many different types of products with fewer variations in each category."
    },
    {
      slug: "shipping",
      image: "/svg/img2.svg",
      title: "Fast & Free Shipping",
      content: "4-day or less delivery time, free shipping and an expedited delivery option."
    },
    {
      slug: "support",
      image: "/svg/img3.svg",
      title: "24/7 Support",
      content: "answers to any business related inquiry 24/7 and in real-time."
    },
]
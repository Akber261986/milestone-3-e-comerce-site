export interface Post {
    imageUrl: string;
    title: string;
    content: string;
    rating: number;
    name: string,
    workAs: string
}

export const commentsPosts: Post[] = [
    { 
        imageUrl: "/png/man1.png",
        title: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  distinctio excepturi soluta! Quasi temporibus dicta numquam delectus recusandae, rem natus quidem! Saepe tenetur optio voluptates expedita veritatis.", 
        content: "This is the first post.", 
        rating: 4.8,
        name: "Akber",
        workAs: "Web Developer",
    },

    { 
        imageUrl: "/png/man2.png", 
        title: "Adipisci culpa nihil expedita deleniti alias error quae ipsam excepturi dolorum corrupti! Ea accusantium, itaque vitae, ipsum inventore optio quae cumque doloremque autem, distinctio excepturi soluta! Quasi temporibus dicta numquam delectus recusandae, rem natus quidem! Saepe tenetur optio voluptates expedita veritatis.", 
        content: "This is the second post.",
        rating: 3.9,
        name: "Quratulain",
        workAs: "YouTuber",
    },
    { 
        imageUrl: "/png/women.png", 
        title: "Vel nulla hic quibusdam fuga eligendi ex reiciendis necessitatibus. Cum rerum explicabo similique excepturi nesciunt perferendis porro velit ex, provident eum nulla quos illum iure quae. Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,", 
        content: "This is the third post.",
        rating: 4.3,
        name: "Khizra",
        workAs: "Free Lancer",
},
  ];

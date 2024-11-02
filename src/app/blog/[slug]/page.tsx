'use client'
import { posts, Post } from '../../../../data/posts';

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;

  // Find the post that matches the slug from the URL
  const post = posts.find((p: Post) => p.slug === slug);

  // Handle the case where no post is found
  if (!post) {
    return <div>Post not found!</div>;
  }


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-8">{post.content}</p>

      
        <button
          // onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Comment
        </button>
      </div>
  );
}

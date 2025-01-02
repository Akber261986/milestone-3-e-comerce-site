
import { client } from '@/sanity/lib/client';
import { PostType } from '@/app/Types';

async function getData(slug:string): Promise<PostType> {
  
  const quary = `*[_type == "products" && slug.current == '${slug}'][0]{
  "slug": slug.current,
    title,
    image,
    description,
    price,
    
    
}`;
  const response = await client.fetch(quary);
  return response;
  
}
interface ProductProps {
  params: { slug: string };
}

export default async function ProductDetail({ params }: ProductProps) {
  const { slug } = params;

 const product = await getData(slug);
 
  // Handle the case where no post is found
  if (!product) {
    return <div>Product not found!</div>;
  }


  return (
    <div className="container mx-auto p-6">
      <h1>products detail</h1>
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="text-lg mb-8">{product.description}</p>
      </div>
  );
}

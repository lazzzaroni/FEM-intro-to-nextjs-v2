import { getAllPosts } from "@/lib/cms";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`}>
          <div className="">
            <h1>{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

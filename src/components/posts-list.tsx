import Link from "next/link"

interface Post {
  id: string;
  title: string;
}

export default async function PostsList() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <ul>
          {
            data.posts.map((post: Post) => (
              <li key={post.id} className="mb-3">
                <Link href={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
  )
}

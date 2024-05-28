import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/2a7ef7e0-e53a-4e07-99fc-5c63b1e1374d-wwan8z.webp",
  "https://utfs.io/f/cf5d771d-89b6-49ad-b8a9-821d31ee2618-27hxpm.webp",
  "https://utfs.io/f/f43aad39-38c6-4eb8-a2d7-d1366c29a422-wwan8z.webp",
  "https://utfs.io/f/a69c535a-6510-4b54-97f2-171cdcf56bfb-9uris8.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}

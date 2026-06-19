export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      date: "June 19, 2024",
      excerpt: "This is the excerpt of your first blog post.",
      slug: "first-blog-post",
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "June 18, 2024",
      excerpt: "This is the excerpt of your second blog post.",
      slug: "second-blog-post",
    },
    {
      id: 3,
      title: "Third Blog Post",
      date: "June 17, 2024",
      excerpt: "This is the excerpt of your third blog post.",
      slug: "third-blog-post",
    },
  ];

  return (
    <div className="w-full transition-colors duration-300 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">Blog</h1>

          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="pb-6 border-b hover:opacity-75 transition-opacity duration-300 cursor-pointer"
              >
                <time className="text-sm">{post.date}</time>
                <h2 className="text-2xl font-semibold mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    return (
      <ul className="bg-gradient-to-r from-black bg-slate-800">
        {posts.map((post) => (
          <li className=" font-bold my-5" key={post.id}>{post.id}. {post.body}</li>
        ))}
      </ul>
    )
  }
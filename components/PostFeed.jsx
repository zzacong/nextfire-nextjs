import NextLink from 'next/link'

export default function PostFeed({ posts, admin }) {
  return posts
    ? posts.map(post => <PostItem post={post} key={post.slug} admin={admin} />)
    : null
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length
  const minutesToRead = (wordCount / 100 + 1).toFixed(0)

  return (
    <div className="card">
      <NextLink href={`/${post.username}`} passHref>
        <a>
          <strong>By @{post.username}</strong>
        </a>
      </NextLink>

      <NextLink href={`/${post.username}/${post.slug}`} passHref>
        <h2>
          <a>{post.title}</a>
        </h2>
      </NextLink>

      <footer>
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span>{post.heartCount} Hearts</span>
      </footer>

      {/* If admin view, show extra controls for user */}
      {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {post.published ? (
            <p className="text-success">Live</p>
          ) : (
            <p className="text-danger">Unpublished</p>
          )}
        </>
      )}
    </div>
  )
}

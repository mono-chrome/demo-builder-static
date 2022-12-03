import Link from 'next/link'
import { PostData } from '../types/postdata'

export default function Post({ title, body, id }: PostData) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link href={`/post/${id}`}>Read more</Link>
    </article>
  )
}

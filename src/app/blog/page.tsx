import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type BlogWithSlug, getAllBlogs } from '@/lib/blog'
import { formatDate } from '@/lib/formatDate'

function Blog({ blog }: { blog: BlogWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/reviews/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Full book review</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ReviewsIndex() {
  let reviews = await getAllBlogs()

  return (
    <SimpleLayout
      title="Writing on programming/UX books and anything else that interests me."
      intro="All of my long-form thoughts on the resources I use to grow my skills."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {reviews.map((review) => (
            <Blog key={review.slug} blog={review} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

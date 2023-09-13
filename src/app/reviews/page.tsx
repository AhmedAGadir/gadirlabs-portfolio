import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ReviewWithSlug, getAllReviews } from '@/lib/reviews'
import { formatDate } from '@/lib/formatDate'

function Review({ review }: { review: ReviewWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/reviews/${review.slug}`}>{review.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={review.date}
          className="md:hidden"
          decorate
        >
          {formatDate(review.date)}
        </Card.Eyebrow>
        <Card.Description>{review.description}</Card.Description>
        <Card.Cta>Read review</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={review.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(review.date)}
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
  let reviews = await getAllReviews()

  return (
    <SimpleLayout
      title="Writing on programming/UX books and anything else that interests me."
      intro="All of my long-form thoughts on the resources I use to grow my skills."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {reviews.map((review) => (
            <Review key={review.slug} review={review} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

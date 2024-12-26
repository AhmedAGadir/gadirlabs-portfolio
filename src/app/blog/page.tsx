import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type BlogWithSlug, getAllBlogs } from '@/lib/blog'
import { formatDate } from '@/lib/formatDate'

function Blog({ blog, external }: { blog: BlogWithSlug; external?: boolean }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title
          {...(external
            ? {
                href: blog.slug,
                newTab: true,
              }
            : {
                href: `/blog/${blog.slug}`,
              })}
        >
          {blog.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>{external ? 'Read on Medium' : 'Read blog'}</Card.Cta>
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
  title: 'Blog',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function BlogsIndex() {
  let blogPosts = [
    ...(await getAllBlogs()),
    {
      slug: 'https://medium.com/@ahmedagadir/how-i-learned-to-code-in-under-a-year-recommended-resources-1e05b3f1d2ba',
      author: 'Ahmed Gadir',
      date: '2018-08-06',
      title: 'How I learned to code in under a year + recommended resources',
      description: 'A guide to for beginners first learning to code.',
      external: true,
    },
    {
      slug: 'https://medium.com/@ahmedagadir/arabic-books-i-read-in-2021-1828de4136ee',
      author: 'Ahmed Gadir',
      date: '2022-05-01',
      title: 'Arabic books I read in 2021',
      description:
        'A list of Arabic books I read in 2021 and my thoughts on them.',
      external: true,
    },
  ]

  return (
    <SimpleLayout
      title="Writing on programming, UX and anything else that interests me."
      intro="All of my long-form thoughts on the resources I use to grow my skills."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogPosts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .map((blog) => {
              if (blog.external) {
                return <Blog key={blog.slug} blog={blog} external />
              }
              return <Blog key={blog.slug} blog={blog} />
            })}
        </div>
      </div>
    </SimpleLayout>
  )
}

import glob from 'fast-glob'

interface Review {
  title: string
  description: string
  author: string
  date: string
}

export interface ReviewWithSlug extends Review {
  slug: string
}

async function importReview(reviewFilename: string): Promise<ReviewWithSlug> {
  let { review } = (await import(`../app/reviews/${reviewFilename}`)) as {
    default: React.ComponentType
    review: Review
  }

  return {
    slug: reviewFilename.replace(/(\/page)?\.mdx$/, ''),
    ...review,
  }
}

export async function getAllReviews() {
  let reviewFilenames = await glob('*/page.mdx', {
    cwd: './src/app/reviews',
  })

  let reviews = await Promise.all(reviewFilenames.map(importReview))

  return reviews.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

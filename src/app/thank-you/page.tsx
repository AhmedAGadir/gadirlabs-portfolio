'use client'

import { SimpleLayoutWithBackButton } from '@/components/SimpleLayoutWithBackButton'

export default function ThankYou() {
  return (
    <SimpleLayoutWithBackButton
      title="Thanks for subscribing."
      intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      backButton
    />
  )
}

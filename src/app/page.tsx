import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.png'
import { type BlogWithSlug, getAllBlogs } from '@/lib/blog'
import { formatDate } from '@/lib/formatDate'
import Resume from '@/components/Resume'
import Newsletter from '@/components/Newsletter'

function Blog({ blog }: { blog: BlogWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${blog.slug}`}>{blog.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  const images = [
    {
      image: image1,
      alt: 'desk setup',
    },
    {
      image: image2,
      alt: 'training brazilian jiu-jitsu',
    },
    {
      image: image3,
      alt: 'create-react-app installing project dependencies',
    },
    {
      image: image4,
      alt: 'team at ag-grid',
    },
    {
      image: image5,
      alt: 'programming books I love',
    },
  ]
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map(({ image, alt }, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt={alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  // NEXT BLOGS
  // PRACTICAL MODULE FEDERATION BOOK
  // CS50
  // NAND2TETRIS UPDATE
  // DATABASE DESIGN FOR MERE MORTALS
  // NEETCODE SYSTEM DESIGN
  // CODECADEMY BACKEND
  // UDEMY NODEJS
  // DATABASE DESIGN FOR MERE MORTALS

  let blogs = (await getAllBlogs()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Ahmed, a Software Developer from London. Passionate about
            building accessible, performant, and intuitive applications. I’m
            currently building{' '}
            <Link
              href="https://arabybuddy.com"
              arial-label="ArabyBuddy website"
              target="_blank"
              className="font-medium text-teal-500 hover:underline dark:text-teal-400"
            >
              ArabyBuddy
            </Link>
            , an AI-powered Arabic learning platform.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/ahmedagadir"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/ahmedagadir"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogs.map((blog) => (
              <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Ahmed Gadir. I live in London, where I design and build sotware.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover object-top dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Ahmed Gadir. I live in London, where I design and build
            software.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve always been inclined towards both technical and creative
              fields, excelling in math and art during my school years, I
              assumed life would be smooth sailing. This led me to pursue
              engineering in university, a field I believed would play to my
              strengths.
            </p>

            <p>
              But upon graduating, I felt unfulfilled. Despite years spent
              solving complex problems, I questioned my ability to add real
              value to businesses. That&apos;s when I discovered software
              development and was instantly captivated.
            </p>

            <figure className="mx-auto">
              <blockquote className="text-xl font-semibold italic text-gray-900 dark:text-white">
                <svg
                  className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                A program is a building of thought. It is costless to build, it
                is weightless, and it grows easily under our typing hands.
              </blockquote>
              <figcaption>
                <div className="mt-1 divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Marijn Haverbeke
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    Eloquent JavaScript
                  </cite>
                </div>
              </figcaption>
            </figure>

            <p>
              I spent the subsequent year juggling part-time work as a math
              tutor while building my junior developer{' '}
              <Link
                href="http://ahmedagadir.com/"
                arial-label="ahmed gadir junior developer portfolio"
                target="_blank"
                className="font-medium text-teal-500 hover:underline dark:text-teal-400"
              >
                portfolio
              </Link>
              . Fast forward five years, and I&apos;ve had the privilege of
              working with several companies, developing dozens of web
              applications, and collaborating with incredibly talented
              individuals.
            </p>

            <p>
              Now, my focus is solely on product development. If an idea strikes
              or if somebody wants to work on an interesting project, I act on
              it immediately, acquiring any necessary skills along the way to
              bring it to fruition.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/ahmedagadir"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/ahmedagadir"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ahmed@gadirlabs.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

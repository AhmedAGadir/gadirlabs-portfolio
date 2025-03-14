import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoArabyBuddy from '@/images/logos/arabybuddy.png'
// import logoBlink from '@/images/logos/blink.png'
import logoInvoise from '@/images/logos/invoise.png'
import logoPDFGrid from '@/images/logos/pdf-grid.png'
import logoGapBio from '@/images/logos/gap-bio.png'
import logoAzza from '@/images/logos/azza-school.png'
import logoDefault from '@/images/logos/glabs.png'

const projects: {
  name: string
  description: string
  link: {
    href: string
    label: string
  }
  logo: StaticImageData
  beta?: boolean
}[] = [
  {
    name: 'ArabyBuddy',
    description:
      'Speak Arabic Fluently. Built with GPT-4, React Native, PostgreSQL and Blender.',
    link: { href: 'http://arabybuddy.com', label: 'arabybuddy.com' },
    logo: logoArabyBuddy,
  },
  {
    name: 'PDFGrid',
    description:
      'Export AG Grid instances to PDF using the pdfmake library. Available in React, Angular, Vue.js and vanilla JavaScript.',
    link: {
      href: 'https://blog.ag-grid.com/exporting-ag-grid-to-pdf/',
      label: 'blog.ag-grid.com',
    },
    logo: logoPDFGrid,
  },
  {
    name: 'Invoise',
    description:
      'Manage invoices with CRUD, sorting, filtering and multi-currency values. Built with React, Exchange-Rate API, Node.js, and MongoDB.',
    link: {
      href: 'https://github.com/AhmedAGadir/invoise-mern-crud-demo',
      label: 'github.com',
    },
    logo: logoInvoise,
    beta: true,
  },
  {
    name: 'Gap Bio',
    description:
      'Online presence for a pharmaceutical licensing firm. Built with React, Next.js, and Tailwind.',
    link: {
      href: 'https://gapbio.netlify.app/',
      label: 'gapbio.netlify.app',
    },
    logo: logoGapBio,
    beta: false,
  },
  {
    name: 'Azza School',
    description:
      'Online presence for a local charity. Features internationalization. Built with React, Next.js and Tailwind.',
    link: {
      href: 'https://www.azzaschool.org/',
      label: 'azzaschool.org',
    },
    logo: logoAzza,
    beta: false,
  },
  {
    name: 'Organization UI',
    description:
      "Organize a mock organization's teams and members. Built with React, Tailwind, and Node.js.",
    link: {
      href: 'https://org-demo.netlify.app/',
      label: 'org-demo.netlify.app',
    },
    logo: logoDefault,
    beta: true,
  },
  // {
  //   name: 'Blink',
  //   description:
  //     'Frontend demo chat app built with React. Styling follows the BEM methodology.',
  //   link: {
  //     href: 'https://blink-chat-app.netlify.app',
  //     label: 'netlify.app',
  //   },
  //   logo: logoBlink,
  //   beta: true,
  // },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I'm still building out this section so bear with me. If you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                <span>{project.name}</span>
                {project.beta && (
                  <span className="ml-2 inline-flex items-center rounded-md bg-zinc-400/10 px-2 py-1 text-xxs font-medium uppercase text-zinc-400 ring-1 ring-inset ring-zinc-400/20">
                    BETA
                  </span>
                )}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

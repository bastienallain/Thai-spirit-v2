import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'
const MAX_DISPLAY = 9

export default function Home({ posts }) {
  return (
    <>
      <div className="relative px-4 pt-32 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="inline-block text-deep-purple-accent-400">a lazy dog</span>
              </h2>
              <p className="text-base  md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <img
            src="https://kitwind.io/assets/kometa/full-browser.png"
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt=""
          />
        </div>
      </div>
      <div className="divide-y ">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 text-center">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 ">
            Thailand travel Guide
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags, thumbnail } = post
              return (
                <div
                  key={slug}
                  className="overflow-hidden transition-shadow duration-300 bg-white dark:bg-black rounded shadow-sm "
                >
                  <Image
                    src={thumbnail?.[0] || '/static/images/Thai-spirit.png'}
                    className="object-cover w-full h-64"
                    alt=""
                    width={900}
                    height={900}
                  />
                  <div className="p-5 border border-t-0 dark:border-gray-700">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase text-black dark:text-white">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                      <span className="text-gray-600 dark:text-gray-400">
                        — <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </span>
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-black dark:text-white hover:text-deep-purple-accent-700 dark:hover:text-deep-purple-400"
                    >
                      {title}
                    </Link>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">{summary}</p>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 dark:hover:text-deep-purple-200"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

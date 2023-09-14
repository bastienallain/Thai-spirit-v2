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
      <div className="relative px-4 pt-32 mx-auto lg:py-32  sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                Discover the Hidden Gems of Thailand
                <span className="inline-block text-primary-500">From Bangkok to Phuket</span>
              </h2>
              <p className="text-base  md:text-lg">
                Welcome to Thai Spirit , your go-to resource for exploring Thailand's most
                captivating destinations. Whether you're an adventurer, a foodie, or a beach bum,
                we've got something for everyone. From the bustling streets of Bangkok to the serene
                beaches of Phuket, let us guide you through an unforgettable journey in this
                tropical paradise.
              </p>
            </div>
            <div className="flex items-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black hover:text-white dark:text-white bg-white dark:bg-slate-900 transition duration-200 rounded shadow-md hover:bg-primary-600 focus:shadow-outline focus:outline-none dark:hover:bg-neutral-800 dark:hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:focus:bg-neutral-800 dark:focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]"
              >
                Our Blog
              </Link>
              <Link
                href="/"
                aria-label=""
                className="ml-4 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Our Pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <Image
            src="/static/images/home.webp"
            className="object-contain object-top w-full max-w-xl -mb-16 rounded  lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:max-w-screen-md h-full"
            alt=""
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div className=" py-3 sm:py-4 lg:py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:mb-6 lg:text-3xl">
              Our Destination
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-200 dark:text-gray-200 md:text-lg">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text but is random or otherwise
              generated.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* product - start */}
            <div>
              <Link
                href="/bangkok"
                className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
              >
                <Image
                  src="/static/images/home/bangkok-card.webp"
                  alt=""
                  width={900}
                  height={1350}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <Link
                    href="/bangkok"
                    className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                  >
                    Bangkok
                    <br />
                    <span className="text-sm text-gray-500 lg:text-base">
                      The pulsating heart of Thailand, welcomes you to explore its vibrant street
                      markets, grandiose temples, and bustling nightlife.
                    </span>
                    <br /> <span className="text-sm text-grey-800 lg:text-base">Read More</span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/phuket"
                className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
              >
                <Image
                  src="/static/images/home/phuket-card.webp"
                  alt=""
                  width={900}
                  height={1350}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <Link
                    href="/phuket"
                    className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                  >
                    Phuket
                    <br />
                    <span className="text-sm text-gray-500 lg:text-base">
                      the jewel of the Andaman Sea, invites you to discover its paradisiacal
                      beaches, colorful markets, and vibrant nightlife.
                    </span>
                    <br /> <span className="text-sm text-grey-800 lg:text-base">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/pattaya"
                className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
              >
                <Image
                  src="/static/images/home/pattaya-card.webp"
                  alt=""
                  width={900}
                  height={1350}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <Link
                    href="/pattaya"
                    className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                  >
                    Pattaya
                    <br />
                    <span className="text-sm text-gray-500 lg:text-base">
                      a vibrant city that harmoniously blends the modern with the traditional,
                      invites you to explore its pristine beaches, bustling markets, and
                      electrifying nightlife.
                    </span>
                    <br /> <span className="text-sm text-grey-800 lg:text-base">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link
                href="/chiang-mai"
                className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
              >
                <Image
                  src="/static/images/home/chiang-mai-card.webp"
                  alt=""
                  width={900}
                  height={1350}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                  <Link
                    href="/chiang-mai"
                    className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                  >
                    Chiang Mai
                    <br />
                    <span className="text-sm text-gray-500 lg:text-base">
                      the rose of Northern Thailand, beckons you to explore its ancient temples,
                      vibrant markets, and tranquil mountains.
                    </span>
                    <br /> <span className="text-sm text-grey-800 lg:text-base">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = ({ menuData }) => {
  return (
    <header className="flex items-center justify-between py-4 w-full fixed top-0 left-0 right-0 bg-white dark:bg-black z-50 container mx-auto">
      <div className="">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/static/images/logo.svg"
                width={80}
                height={80}
                alt="thai spirit travel guide"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block  text-black dark:text-white ">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <div className="relative inline-block text-left">
          <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
            Cities
          </button>
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-1 py-1 ">
              {menuData.map((cityData) => (
                <div className="relative" key={cityData.city}>
                  <button className="group w-full px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                    {cityData.city}
                  </button>
                  <div className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    {cityData.areas.map((areaData) => (
                      <div className="relative" key={areaData.area}>
                        <button className="group w-full px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900">
                          {areaData.area}
                        </button>
                        <div className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          {areaData.categories.map((category) => (
                            <button
                              key={category}
                              className="w-full px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

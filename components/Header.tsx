'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { useMenuData } from './MenuDataContext'
import { useState } from 'react'
const Header = () => {
  const { menuData } = useMenuData()
  const [openCity, setOpenCity] = useState<string | null>(null)
  const cities = menuData.reduce(
    (acc, data) => {
      if (!acc[data.city]) {
        acc[data.city] = []
      }
      acc[data.city].push(data)
      return acc
    },
    {} as Record<string, MenuData[]>
  )
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
        {Object.keys(cities).map((city, index) => (
          <div key={index} className="relative inline-block text-left">
            <button
              onClick={() => setOpenCity(openCity === city ? null : city)}
              type="button"
              className="inline-flex justify-center w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              {city}
            </button>
            {openCity === city && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {cities[city].map((data, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {data.area}
                    </a>
                  ))}
                  {/* Vous pouvez ajouter ici un autre dropdown pour la catégorie si nécessaire */}
                </div>
              </div>
            )}
          </div>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

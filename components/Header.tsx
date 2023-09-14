'use client'
import siteMetadata from '@/data/siteMetadata'
import bangkokMenuLinks from '@/data/bangkokMenuLinks'
import phuketMenuLinks from '@/data/phuketMenuLinks'
import huahinMenuLinks from '@/data/huahinMenuLinks'
import pattayaMenuLinks from '@/data/pattayaMenuLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { useMenuData } from './MenuDataContext'
import { useState } from 'react'
import { MenuData } from './MenuDataContext'
import chiangmaiMenuLinks from '@/data/chiangmaiMenuLinks'
const Header = () => {
  const { menuData } = useMenuData()

  return (
    <header className="flex items-center justify-between py-4 w-full fixed top-0 left-0 right-0 bg-white dark:bg-black z-50 container mx-auto">
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
            <div className="h-6 text-2xl font-semibold sm:block  text-black dark:text-white ">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className=" items-center leading-5 space-x-1 hidden lg:flex">
        <div className="flex items-center leading-5 ">
          <ul className="flex">
            {bangkokMenuLinks.map((menu, menuIdx) => (
              <li key={menuIdx} className="toggleable hover:bg-black hover:text-white hoverable">
                <input
                  type="checkbox"
                  value="selected"
                  id={`toggle-${menuIdx}`}
                  className="toggle-input"
                />
                <label
                  htmlFor={`toggle-${menuIdx}`}
                  className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold dark:text-white"
                >
                  <Link href="/bangkok" rel="noopener noreferrer">
                    {menu.title}
                  </Link>
                </label>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white dark:bg-black bangkok_menu dark:text-white">
                  <div className="container mx-auto w-full flex flex-wrap justify-between hoverable">
                    {menu.sections.map((section, sectionIdx) => (
                      <ul
                        key={sectionIdx}
                        className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                      >
                        <h2 className="font-bold text-xl text-white dark:text-white text-bold mb-2">
                          {section.heading}
                        </h2>
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              href={link.href}
                              className="block p-3 hover:bg-gray-600 dark:hover:bg-gray-300 text-gray-100 hover:text-white dark:text-white dark:hover:text-gray-700 font"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>{' '}
        <div className="flex items-center leading-5 ">
          <ul className="flex">
            {phuketMenuLinks.map((menu, menuIdx) => (
              <li key={menuIdx} className="toggleable hover:bg-black hover:text-white hoverable">
                <input
                  type="checkbox"
                  value="selected"
                  id={`toggle-${menuIdx}`}
                  className="toggle-input"
                />
                <label
                  htmlFor={`toggle-${menuIdx}`}
                  className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold dark:text-white"
                >
                  <Link href="/phuket" rel="noopener noreferrer">
                    {menu.title}
                  </Link>
                </label>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white dark:bg-black phuket_menu dark:text-white">
                  <div className="container mx-auto w-full flex flex-wrap justify-between hoverable">
                    {menu.sections.map((section, sectionIdx) => (
                      <ul
                        key={sectionIdx}
                        className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                      >
                        <h2 className="font-bold text-xl text-white dark:text-white text-bold mb-2">
                          {section.heading}
                        </h2>
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              href={link.href}
                              className="block p-3 hover:bg-gray-600 dark:hover:bg-gray-300 text-gray-100 hover:text-white dark:text-white dark:hover:text-gray-700 font"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center leading-5 ">
          <ul className="flex">
            {pattayaMenuLinks.map((menu, menuIdx) => (
              <li key={menuIdx} className="toggleable hover:bg-black hover:text-white hoverable">
                <input
                  type="checkbox"
                  value="selected"
                  id={`toggle-${menuIdx}`}
                  className="toggle-input"
                />
                <label
                  htmlFor={`toggle-${menuIdx}`}
                  className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold dark:text-white"
                >
                  <Link href="/pattaya" rel="noopener noreferrer">
                    {menu.title}
                  </Link>
                </label>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white dark:bg-black phuket_menu dark:text-white">
                  <div className="container mx-auto w-full flex flex-wrap justify-between hoverable">
                    {menu.sections.map((section, sectionIdx) => (
                      <ul
                        key={sectionIdx}
                        className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                      >
                        <h2 className="font-bold text-xl text-white dark:text-white text-bold mb-2">
                          {section.heading}
                        </h2>
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              href={link.href}
                              className="block p-3 hover:bg-gray-600 dark:hover:bg-gray-300 text-gray-100 hover:text-white dark:text-white dark:hover:text-gray-700 font"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center leading-5 ">
          <ul className="flex">
            {chiangmaiMenuLinks.map((menu, menuIdx) => (
              <li key={menuIdx} className="toggleable hover:bg-black hover:text-white hoverable">
                <input
                  type="checkbox"
                  value="selected"
                  id={`toggle-${menuIdx}`}
                  className="toggle-input"
                />
                <label
                  htmlFor={`toggle-${menuIdx}`}
                  className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold dark:text-white"
                >
                  <Link href="/chian-mai" rel="noopener noreferrer">
                    {menu.title}
                  </Link>
                </label>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white dark:bg-black phuket_menu dark:text-white">
                  <div className="container mx-auto w-full flex flex-wrap justify-between hoverable">
                    {menu.sections.map((section, sectionIdx) => (
                      <ul
                        key={sectionIdx}
                        className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                      >
                        <h2 className="font-bold text-xl text-white dark:text-white text-bold mb-2">
                          {section.heading}
                        </h2>
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              href={link.href}
                              className="block p-3 hover:bg-gray-600 dark:hover:bg-gray-300 text-gray-100 hover:text-white dark:text-white dark:hover:text-gray-700 font"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center leading-5 ">
          <ul className="flex">
            {huahinMenuLinks.map((menu, menuIdx) => (
              <li key={menuIdx} className="toggleable hover:bg-black hover:text-white hoverable">
                <input
                  type="checkbox"
                  value="selected"
                  id={`toggle-${menuIdx}`}
                  className="toggle-input"
                />
                <label
                  htmlFor={`toggle-${menuIdx}`}
                  className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold dark:text-white"
                >
                  {menu.title}
                </label>
                <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white dark:bg-black phuket_menu dark:text-white">
                  <div className="container mx-auto w-full flex flex-wrap justify-between hoverable">
                    {menu.sections.map((section, sectionIdx) => (
                      <ul
                        key={sectionIdx}
                        className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"
                      >
                        <h2 className="font-bold text-xl text-white dark:text-white text-bold mb-2">
                          {section.heading}
                        </h2>
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link
                              href={link.href}
                              className="block p-3 hover:bg-gray-600 dark:hover:bg-gray-300 text-gray-100 hover:text-white dark:text-white dark:hover:text-gray-700 font"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center leading-5 ">
          <ul className="flex">
            <h2 className="block cursor-pointer py-6 px-4 lg:p-6 text-sm lg:text-base font-bold dark:text-rose-500 text-rose-700">
              <Link href="/">Adult</Link>
            </h2>
          </ul>
        </div>
      </div>
      <SearchButton />
      <ThemeSwitch />
      <MobileNav />
    </header>
  )
}

export default Header

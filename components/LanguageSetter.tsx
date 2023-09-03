'use client'
import { useEffect } from 'react'

interface LanguageSetterProps {
  language: string
}

export const LanguageSetter: React.FC<LanguageSetterProps> = ({ language }) => {
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return null
}

import en from './en'
import es from './es'

export const LANGUAGES = {
  en: 'English',
  es: 'Español'
}

export const getCurrentLanguage = (url: URL): string => {
  const pathname = url.pathname
  if (pathname.startsWith('/es/') || pathname === '/es') {
    return 'es'
  }
  return 'en'
}

export const getLanguageName = (lang: string): string => {
  return LANGUAGES[lang as keyof typeof LANGUAGES] || ''
}

export const useTranslations = (lang: string) => {
  return lang === 'es' ? es : en
}

export const getTranslatedPath = (path: string, lang: string) => {
  const basePath = path.startsWith('/') ? path : `/${path}`
  return lang === 'en' ? basePath : `/es${basePath}`
}

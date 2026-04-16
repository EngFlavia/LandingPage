import { useEffect, useState } from 'react';
import type { Language } from '../types/portfolio';

const STORAGE_KEY = 'portfolio-language';

export function useLanguage(initialLanguage: Language = 'pt') {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return initialLanguage;
    }

    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

    return savedLanguage === 'en' || savedLanguage === 'pt' ? savedLanguage : initialLanguage;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  return { language, setLanguage };
}

import { useEffect } from 'react';
import type { PortfolioContent, SeoCopy } from '../types/portfolio';

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
}

export function usePortfolioMeta(_portfolio: PortfolioContent, seo: SeoCopy) {
  useEffect(() => {
    document.title = seo.title;

    upsertMeta(
      'meta[name="description"]',
      'name',
      'description',
      seo.description,
    );
    upsertMeta(
      'meta[property="og:title"]',
      'property',
      'og:title',
      seo.title,
    );
    upsertMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      seo.description,
    );
  }, [_portfolio, seo]);
}

import { config } from '@/config';
import { env } from '@/env';
import type { Metadata } from 'next';

interface MetadataProps extends Metadata {
  canonicalUrl?: string;
  extraTags?: Record<string, string>;
}

export const seoMetadata = ({
  title,
  description,
  keywords,
  openGraph,
  twitter,
  canonicalUrl,
  extraTags,
}: MetadataProps) => {
  return {
    title: `${title} | ${config.applicationName}` || config.applicationName,
    description: description ?? config.applicationDescription,
    keywords: keywords || [config.applicationName],
    applicationName: config.applicationName,
    metadataBase: new URL(
      env.NODE_ENV === 'production'
        ? new URL(config.applicationDomain)
        : new URL('http://localhost:3000'),
    ),
    robots: {
      index: config.robots.index,
      follow: config.robots.follow,
    },
    openGraph: {
      title: openGraph?.title || `${title} | ${config.applicationName}`,
      description: openGraph?.description || description || config.applicationDescription,
      url: openGraph?.url || canonicalUrl,
      siteName: openGraph?.siteName || config.applicationName,
      type: config.applicationType,
      locale: openGraph?.locale || config.defaultLocale,
    },
    twitter: {
      title: openGraph?.title || config.applicationName,
      description: openGraph?.description || config.applicationDescription,
      card: 'summary_large_image',
      site: openGraph?.url || `${config.applicationDomain}`,
      creator: openGraph?.siteName || config.social.twitter,
      ...twitter,
    },
    alternates: {
      types: {
        'application/rss+xml': `${config.applicationDomain}/rss.xml`,
        'application/atom+xml': `${config.applicationDomain}/atom.xml`,
      },
    },
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
    ...extraTags,
  };
};

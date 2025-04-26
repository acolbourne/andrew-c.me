export const config = {
  // -> Website Settings
  applicationName: 'Andrew Colbourne',
  applicationDescription:
    'The barely coherent rantings of a man on the Internet, available to you on demand.',
  applicationType: 'website',
  applicationDomain: 'https://www.andrew-c.me',
  defaultLocale: 'en-GB',
  robots: {
    index: true,
    follow: true,
  },
  // -> Social Settings
  social: {
    twitter: '@andyctrader',
  },
} as const;

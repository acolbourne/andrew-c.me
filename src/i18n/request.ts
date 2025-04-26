import { config } from '@/config';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  return {
    locale: config.defaultLocale,
    messages: (await import(`@/language/${config.defaultLocale}.json`)).default,
  };
});

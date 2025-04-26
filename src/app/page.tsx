import { seoMetadata } from '@/utils/seoMetadata';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();
  return seoMetadata({
    title: t('testKey'),
  });
}

export default function Home() {
  const t = useTranslations();
  return <h1>{t('testKey')}</h1>;
}

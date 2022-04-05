import { ChevronLeftIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import useSWR from 'swr';

import { Post } from '@/types';

const StoriesTray = dynamic(() => import('@/components/StoriesTray'));

const fetchStories = async () =>
  fetch('/api/posts')
    .then((res) => res.json())
    .then((data) => data.posts);

export default function Home() {
  const { data, error } = useSWR<Post[]>('/api/stories', fetchStories, {
    refreshInterval: 30 * 1000,
  });

  const { t } = useTranslation('common');

  return (
    <div className='bg-black relative h-full w-full text-white'>
      {data && <StoriesTray stories={data} />}

      <Link href='/'>
        <a className='absolute top-2 left-2 flex'>
          <ChevronLeftIcon width={14} />

          {t('back', 'Back')}
        </a>
      </Link>
    </div>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

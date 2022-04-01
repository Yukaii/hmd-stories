import dynamic from 'next/dynamic';
import React from 'react';
import useSWR from 'swr';

import { Post } from '@/types';

const StoriesTray = dynamic(() => import('@/components/StoriesTray'));

const fetchStories = async () =>
  fetch('https://stories.hackmd.io/api/posts')
    .then((res) => res.json())
    .then((data) => data.posts);

export default function Home() {
  const { data, error } = useSWR<Post[]>('/api/stories', fetchStories, {
    refreshInterval: 30 * 1000,
  });

  return (
    <div className='bg-black h-full w-full text-white'>
      {data && <StoriesTray stories={data} />}
    </div>
  );
}

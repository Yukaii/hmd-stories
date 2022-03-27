import React from 'react';
import { dynamic } from 'aleph/react';

import { Post } from '../types/index.ts';

const StoriesTray = dynamic(() => import('~/components/StoriesTray.tsx'));

const post: Omit<Post, 'id'> = {
  userpath: 'hello world',
  content: '# asdfasd',
  deleteToken: 'asdfasdf',
  variant: 0,
  createdAt: Date.now(),
};

export default function Home() {
  return (
    <div className="bg-black h-full w-full text-white">
      <StoriesTray
        stories={new Array(20)
          .fill(0)
          .map((_, i) => ({ ...post, id: `${i + 1}` }))}
      />
    </div>
  );
}

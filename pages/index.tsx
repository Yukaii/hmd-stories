import React from 'react';
import StoriesTray from '~/components/StoriesTray.tsx'
import { Post } from "../types/index.ts";

const post: Post = {
  id: '1',
  userpath: 'hello world',
  content: '# asdfasd',
  deleteToken: 'asdfasdf',
  variant: 0
}

export default function Home() {
  return (
    <div className='bg-black h-full w-full text-white'>
      <StoriesTray stories={[post]} />
    </div>
  );
}

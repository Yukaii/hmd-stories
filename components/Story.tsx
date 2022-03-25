import React from 'react';

export default function Story ({ markdown }: { markdown: string }) {
  return <div className='rounded bg-blue-400'>
    { markdown }
  </div>
}
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { getQueryBuilder } from '@/lib/supabase';

import { Post } from '@/types';

const cors = Cors({
  methods: ['OPTIONS', 'HEAD', 'DELETE'],
});

const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const postId = req.query.id as string;
  const { deleteToken } = req.body;
  const queryBuilder = getQueryBuilder<Post>('posts');

  const { data } = await queryBuilder.select('deleteToken').eq('id', postId);

  if (data && data.length > 0 && deleteToken) {
    if (data[0].deleteToken === deleteToken) {
      const { data } = await queryBuilder.delete().eq('id', postId);

      if (data) {
        res.json({
          message: 'Post deleted',
        });
      } else {
        res.status(500).json({
          error: 'Error deleting post',
        });
      }
    } else {
      res.status(403).json({
        error: 'Invalid delete token',
      });
    }
  } else {
    res.status(404).json({
      error: 'Post not found',
    });
  }
};

const handler = nc().use(cors).delete(deletePost);

export default handler;

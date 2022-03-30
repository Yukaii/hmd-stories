import Cors from 'cors';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { getQueryBuilder } from '@/lib/supabase';

import { CreatePostPayload, Post } from '@/types';

const cors = Cors({
  methods: ['GET', 'OPTIONS', 'HEAD', 'POST'],
});

const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data: posts, error } = await getQueryBuilder<Post>('posts')
    .select('*')
    .order('createdAt', {
      ascending: false,
    })
    .filter('createdAt', 'gt', 'yesterday');

  if (error) {
    res.status(500).json({
      error: error.message,
    });
  } else {
    res.status(200).json({
      posts,
    });
  }
};

const createPost: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const body: CreatePostPayload = req.body;

  const { userpath, content, variant } = body;

  const { data } = await getQueryBuilder('posts').insert({
    userpath,
    content,
    variant,
  });

  if (data) {
    res.json({ post: data[0] });
  } else {
    res.status(500).json({
      error: 'Error creating post',
    });
  }
};

const handler: NextApiHandler = nc().use(cors).get(getPosts).post(createPost);

export default handler;

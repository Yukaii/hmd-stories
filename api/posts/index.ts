import type { APIHandler } from 'aleph/types.d.ts';
import { getQueryBuilder } from '~/lib/supabase.ts';
import { CreatePostPayload, Post } from '~/types/index.ts'

const getPosts: APIHandler = async ({ response }) => {
  const { data: posts, error } = await getQueryBuilder<Post>('posts').select('*').filter('createdAt', 'gt', 'yesterday');

  if (error) {
    response.status = 500;
    response.json({
      error,
    });
  } else {
    response.json({ posts });
  }
}

const createPost: APIHandler = async ({ request, response }) => {
  const body: CreatePostPayload = await request.json()

  const { userpath, content, variant } = body;

  const { data } = await getQueryBuilder('posts').insert({
    userpath,
    content,
    variant 
  })

  if (data) {
    response.json({ post: data[0] });
  } else {
    response.status = 500;
    response.json({
      error: 'Error creating post',
    });
  }
}

export const handler: APIHandler = async (context) => {
  const { response, request } = context;

  switch (request.method) {
    case 'GET': {
      await getPosts(context);
      break
    }

    case 'POST': {
      await createPost(context);
      break
    }

    default:
      response.status = 405;
  }
};

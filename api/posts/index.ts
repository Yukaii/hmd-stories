import type { APIHandler } from 'aleph/types.d.ts';
import { getQueryBuilder } from '~/lib/supabase.ts';
import { CreatePostPayload } from '~/types/index.ts'

const getPosts: APIHandler = async ({ response }) => {
  const { data: posts, error } = await getQueryBuilder('posts').select('*');

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

  console.log(body)

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
    }

    case 'POST': {
      console.log('shit')
      await createPost(context);
    }

    default:
      response.status = 405;
  }
};

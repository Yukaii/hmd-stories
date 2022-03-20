import type { APIHandler } from 'aleph/types.d.ts';
import { getQueryBuilder } from '~/lib/supabase.ts';
import { Post } from "../../types/index.ts";

const deletePost: APIHandler = async ({ router, response, request }) => {
  const postId = router.params['id'];
  const { deleteToken } = await request.json()
  const queryBuilder = getQueryBuilder<Post>('posts')

  const { data } = await queryBuilder.select('deleteToken').eq('id', postId);

  if (data && data.length > 0 && deleteToken) {
    if (data[0].deleteToken === deleteToken) {
      const { data } = await queryBuilder.delete().eq('id', postId); 
  
      if (data) {
        response.json({
          message: 'Post deleted',
        })
      } else {
        response.status = 500;
        response.json({
          error: 'Error deleting post',
        })
      }
    } else {
      response.status = 403;
      response.json({
        error: 'Invalid delete token',
      })
    }
  } else {
    response.status = 404;
    response.json({
      error: 'Post not found',
    });
  }
}

export const handler: APIHandler = async (context) => {
  const { response, request } = context;

  switch (request.method) {
    case 'DELETE': {
      await deletePost(context);
      break
    }

    default:
      response.status = 405;
  }
}
import type { APIHandler } from 'aleph/types.d.ts'
import supabase from '~/lib/supabase.ts'

export const handler: APIHandler = async ({ response }) => {
  let { data: posts, error } = await (supabase.from('posts') as any).select('*')

  if (error) {
    response.status = 500
    response.json({
      error
    })
  } else {
    response.json({ posts })
  }
}

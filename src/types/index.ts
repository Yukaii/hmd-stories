export enum PostType {
  DEFAULT,
  WAVE,
  ORANGE,
  BLACK,
}

export type Post = {
  id: string; // UUID
  userpath: string;
  content: string;
  variant: PostType;
  deleteToken: string;
  createdAt: number;
};

export type CreatePostPayload = Pick<Post, 'userpath' | 'content' | 'variant'>;

export type CreatePost = Post & {
  deleteToken: string;
};

export type PostList = Post[];

export type DeletePostPayload = {
  deleteToken: string;
};

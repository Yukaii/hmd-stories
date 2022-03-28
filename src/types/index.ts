export enum PostType {
  BLACK,
  GREY,
  ORANGE,
  PINK_AND_ORANGE,
  PURPLE,
  GREEN,
  PURPLE_AND_PINK,
  // RAINBOW
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

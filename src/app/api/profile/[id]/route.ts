import { Post, User } from '@/data-access/types';

function getUser(id: string): Promise<User> {
  const users = require('../..//mocks/users.json');
  const posts = require('../..//mocks/posts.json');
  const user: User = users.data.find((user: User) => user.id === id);
  const latestPosts: Post[] = posts.data.filter(
    (post: Post) => id === post.userId
  );
  user.latestPosts = latestPosts;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 300);
  });
}

export async function GET(_: Request, context: { params: { id: string } }) {
  const user = await getUser(context.params.id);
  return new Response(JSON.stringify(user));
}

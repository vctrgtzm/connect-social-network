import { Post, User } from '@/data-access/types';

function getPost(id: string): Promise<Post> {
  const posts = require('../../mocks/posts.json');
  const users = require('../..//mocks/users.json');
  const post = posts.data.find((post: Post) => post.id === id);
  const user = users.data.find((user: User) => post.userId === user.id);
  post.userImage = user.picture.large;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post as Post);
    }, 300);
  });
}

export async function GET(
  _: Request,
  context: { params: { id: string } }
) {
  const post = await getPost(context.params.id);
  return new Response(JSON.stringify(post));
}

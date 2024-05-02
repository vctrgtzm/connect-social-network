import { Post } from '@/data-access/types';

function getPosts(): Promise<Post[]> {
  const posts = require('../mocks/posts.json');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts as Post[]);
    }, 300);
  });
}

export async function GET(request: Request) {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts));
}

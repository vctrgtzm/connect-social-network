import type { Post as PostType } from '@/data-access/types';
import Post from '../post/post';

export default function PostList({ posts }: { posts: PostType[] }) {
  if (!posts.length) {
    return <p>We could not find any post</p>;
  }

  return (
    <>
      {posts?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}

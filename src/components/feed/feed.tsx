import type { Post } from '@/data-access/types';
import styles from './feed.module.css';
import PostList from '../post-list/post-list';

export default function Feed({ feedData }: { feedData: Post[] }) {
  return (
    <main className={styles.feedContainer}>
      <h1 style={{ marginBottom: '20px' }}>Latest Posts</h1>
      <PostList posts={feedData} />
    </main>
  );
}

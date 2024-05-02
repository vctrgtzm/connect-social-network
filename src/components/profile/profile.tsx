import { User } from '@/data-access/types';
import styles from './profile.module.css';
import Image from 'next/image';
import PostList from '../post-list/post-list';

export default function Profile({ user }: { user: User }) {
  const userName = `${user.name.first} ${user.name.last}`;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfoContainer}>
        <div className={styles.userPictureContainer}>
          <Image
            src={user.picture.large}
            alt={`Profile picture thumbnail of ${userName}`}
            width={200}
            height={200}
          />
        </div>
        <h1 className={styles.userName}>{userName}</h1>
        <p>{user.email}</p>
        <p>{user.cellphone}</p>
        <p>{user.location.country}</p>
      </div>
      <h2>Latest Posts</h2>
      <PostList posts={user.latestPosts ?? []} />
    </div>
  );
}

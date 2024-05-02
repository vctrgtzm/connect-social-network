import { Post } from '@/data-access/types';
import styles from './post-detail.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PostDetail({ post }: { post: Post }) {
  const {
    userId,
    userImage,
    userName,
    date,
    title,
    textContent,
    mediaContent,
  } = post;

  return (
    <div className={styles.postContainer}>
      <Link href={`/profile/${userId}`} className={styles.postInfoContainer}>
        <div className={styles.postImageContainer}>
          <Image
            src={userImage}
            alt={`Profile picture thumbnail of ${userName}`}
            width={200}
            height={200}
          />
        </div>
        <p className={styles.userName}>{userName}</p>
      </Link>
      <p className={styles.postDate}>{date}</p>
      <h2 className={styles.title}>{title}</h2>
      <p>{textContent}</p>
      {mediaContent.hasMediaContent &&
      mediaContent.type === 'IMAGE' &&
      mediaContent.mediaUrl ? (
        <div className={styles.mediaContainer}>
          <Image
            src={mediaContent.mediaUrl}
            alt={`Photo posed by ${userName}`}
            fill={true}
            className={styles.postImage}
          />
        </div>
      ) : null}
    </div>
  );
}

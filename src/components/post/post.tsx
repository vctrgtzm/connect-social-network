import type { Post as PostType } from '@/data-access/types';
import Image from 'next/image';
import styles from './post.module.css';
import Link from 'next/link';

export default function Post(post: PostType) {
  const {
    userId,
    userImage,
    userName,
    date,
    title,
    textContent,
    mediaContent,
    id,
  } = post;
  const MAX_CHARACTERS = 200;
  const showCompleteMessage = textContent.length <= MAX_CHARACTERS;
  let postMessage = textContent;

  if (!showCompleteMessage) {
    postMessage = `${textContent.substring(0, MAX_CHARACTERS).trimEnd()}...`;
  }

  return (
    <div className={styles.postContainer}>
      <Link href={`/profile/${userId}`} className={styles.postInfoContainer}>
        <div className={styles.postImageContainer}>
          <Image
            src={userImage}
            alt={`Profile picture thumbnail of ${userName}`}
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.postDate}>{date}</p>
        </div>
      </Link>
      <h3 className={styles.title}>{title}</h3>
      <p>
        {postMessage}
        {!showCompleteMessage && (
          <Link className={styles.viewMoreLink} href={`/post-detail/${id}`}>
            view more
          </Link>
        )}
      </p>
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

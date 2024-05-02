import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/" className={styles.title}>
          Connect
        </Link>
        <ul>
          <li>
            <Link href="/">Feed</Link>
          </li>
          <li>
            <Link href="/profile/2afde699-b7f1-4ea2-897b-be210a90cf44">
              My Profile
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="/profile/2afde699-b7f1-4ea2-897b-be210a90cf44"
        className={styles.user}
      >
        <Image
          src="https://randomuser.me/api/portraits/thumb/men/22.jpg"
          alt="Thumbnail of profile picture"
          width={50}
          height={50}
        />
      </Link>
    </nav>
  );
}

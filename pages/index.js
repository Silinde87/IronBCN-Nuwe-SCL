import styles from './../styles/index.module.css';
import Text from '../components/atoms/Text';
import Link from 'next/link';

const Home = () => (
  <div className={styles.container}>
    <main>
      <Text as="h1" size="xxl">Welcome to <Link href="https://nextjs.org">Next.js!</Link></Text>
    </main>
  </div>
)

export default Home

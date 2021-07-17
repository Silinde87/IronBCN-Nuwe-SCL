import styles from './../styles/index.module.css';
import Text from '../components/atoms/Text';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

const Home = () => {
	const [session, loading] = useSession();

	return (
		<div className={styles.container}>
			<main>
				<div>
					<Text as="h1" size="xxl">
						Welcome to <Link href="https://nextjs.org">Next.js!</Link>
					</Text>
				</div>
				<div style={{ marginTop: '50px' }}>
					{!session && (
						<article style={{ display: 'flex' }}>
							<Text as="h2" size="l">
								Not signed in
							</Text>
							<button onClick={() => signIn()}>Sign in</button>
						</article>
					)}
					{session && (
						<article style={{ display: 'flex' }}>
							<Text as="h2" size="l">
								Signed in as {session.user.email}
							</Text>
							<button onClick={() => signOut()}>Sign out</button>
						</article>
					)}
				</div>
			</main>
		</div>
	);
};

export default Home;

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { decryptWithAES } from '../../../utils/hashPass';
import dbConnect from './../../../utils/dbConnect';
import User from '../../../models/User';

const options = {
	providers: [
		Providers.Credentials({
			name: 'credentials',

			credentials: {
				email: { label: 'E-mail', type: 'email', placeholder: 'Introduce your e-mail' },
				password: { label: 'Password', type: 'password', placeholder: 'Introduce your password' },
			},

			async authorize(credentials, req) {
				const { email, password } = credentials;
				await dbConnect();

				const theUser = await User.findOne({ email })
					.then((userFound) => {
						if (userFound) {
							const decryptedPass = decryptWithAES(userFound.password);
							const user = { ...userFound._doc };
							if (decryptedPass == password) {
								return user;
							} else {
								console.log('pass NOT match');
							}
						} else {
							console.log('user not found');
						}
					})
					.catch((err) => console.error('error', err));

				//If no error and we have user data, return it
				if (theUser) return theUser;
				//Return null if user data could not be retrieved
				return null;
			},
		}),
	],
	callbacks: {
		async signIn(user) {
			return user;
		},
		async session(session, token) {
			session.user = token.user;
			return session;
		},
		async jwt(token, user) {
			const newUser = { ...user };
			delete newUser.password;
			if (user) token.user = newUser;
			return token;
		},
	},
	site: process.env.NEXT_PUBLIC_NEXTAUTH_URL || 'http://localhost:3000',
	database: process.env.NEXT_PUBLIC_DATABASE_URL,
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	theme: 'light',
};

export default (req, res) => NextAuth(req, res, options);

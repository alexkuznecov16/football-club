import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'FK Spartaks Jūrmala - #FKSPARTAKS',
	description: 'FK Spartaks Jūrmala - #FKSPARTAKS',
	keywords: 'keywords',
	icons: {
		icon: '/favicon.ico?v=4',
		apple: '/spartaks-logo.svg?v=4',
		shortcut: '/spartaks-logo.svg?v=4',
	},
};

export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

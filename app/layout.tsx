import { lusitana, poppins } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Dashboard',
		default: 'Dashboard',
	},
	description: 'The Next.js tutorial site, built with app router, whatever that is.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} ${lusitana.className} bg-white`}>{children}</body>
		</html>
	);
}

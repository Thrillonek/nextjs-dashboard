import { lusitana, poppins } from '@/app/ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} ${lusitana.className} bg-white`}>{children}</body>
		</html>
	);
}

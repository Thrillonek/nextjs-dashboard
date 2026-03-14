import { Lusitana, Poppins } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const lusitana = Lusitana({ weight: ['400', '700'] });

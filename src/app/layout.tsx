import './globals.css';
import Recoil from './Recoil';
import GlobalStyle from '@/style/globalStyle';
import { ThemeWrapper } from './themeWrapper';
import Navbar from '@/Component/Common/Navbar';
import Footer from '@/Component/Common/Footer';
import { Do_Hyeon } from 'next/font/google';
import { Metadata } from 'next';
import Head from 'next/head';
import GoogleAnalytics from '@/Component/GA/GA';

const baseFont = Do_Hyeon({
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'HJ`s Blog',
  description: '개발관련 여러 지식을 기록하는 공간',
  icons: {
    icon: '/images/favicon.webp',
  },
  metadataBase: new URL('https://hj-devlog.vercel.app/'),
  openGraph: {
    url: 'https://hj-devlog.vercel.app',
    title: 'HJ`s Blog',
    description: '개발 관련 여러 지식을 기록하고, 정리하는 공간입니다',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/59411107?v=4',
        width: 800,
        height: 600,
      },
      {
        url: 'https://avatars.githubusercontent.com/u/59411107?v=4',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'g3Daim29whdK1ZzL1CE6pvkYyvSgM5-6C898-TVjiz0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={baseFont.className}>
      <Head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-S9N5XJ40DL" />
      </Head>
      <body className="App">
        <Recoil>
          <ThemeWrapper>
            <GlobalStyle />
            <Navbar />
            {children}
          </ThemeWrapper>
          <Footer />
        </Recoil>
      </body>
    </html>
  );
}

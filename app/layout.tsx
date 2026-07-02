import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '西安互邦信息技术有限公司 | AI驱动企业数字化升级',
  description: '西安互邦信息技术有限公司专注于AI智能客服系统、网站开发、小程序开发、APP开发、企业管理系统、私有化AI知识库及行业数字化解决方案，为中小企业提供专业的AI驱动数字化转型服务。',
  keywords: 'AI智能客服,网站开发,小程序开发,APP开发,企业管理系统,AI知识库,数字化解决方案,西安软件开发,互邦信息技术',
  authors: [{ name: '西安互邦信息技术有限公司' }],
  creator: '西安互邦信息技术有限公司',
  openGraph: {
    title: '西安互邦信息技术有限公司 | AI驱动企业数字化升级',
    description: 'AI驱动的软件开发与企业数字化解决方案服务商，为企业提供智能化转型的全栈技术支持。',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '西安互邦信息技术有限公司',
    description: 'AI驱动的软件开发与企业数字化解决方案服务商',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

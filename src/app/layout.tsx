import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KELAB - Knowledge Engineering Lab @ Hanyang",
  description: "비정형 텍스트 데이터에서 의미 있는 지식을 추출하고 구조화하는 인공지능 기반 혁신 기술을 연구합니다.",
  keywords: ["NLP", "Knowledge Graph", "GraphRAG", "AI", "Machine Learning", "Hanyang University"],
  authors: [{ name: "KELAB" }],
  openGraph: {
    title: "KELAB - Knowledge Engineering Lab @ Hanyang",
    description: "Transforming Unstructured Text into Knowledge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}

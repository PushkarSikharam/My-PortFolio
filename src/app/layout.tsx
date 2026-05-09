import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import DynamicBackground from "@/components/ui/DynamicBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Sai Pushkar Sikharam | AI/ML & Data Engineer",
  description: "AI/ML & Data Engineer building LLM applications, data pipelines, and scalable backend systems with Python, APIs, and production-ready infrastructure.",
  keywords: [
    "Sai Pushkar Sikharam",
    "AI ML Engineer",
    "Data Engineer",
    "LLM Applications",
    "RAG",
    "Python",
    "FastAPI",
    "Backend Engineer",
    "Data Pipelines",
    "Machine Learning"
  ],
  authors: [{ name: "Sai Pushkar Sikharam" }],
  creator: "Sai Pushkar Sikharam",
  publisher: "Sai Pushkar Sikharam",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sai Pushkar Sikharam | AI/ML & Data Engineer",
    description: "Portfolio of an AI/ML & Data Engineer building LLM applications, data pipelines, and scalable backend systems.",
    type: "website",
    siteName: "Sai Pushkar Sikharam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Pushkar Sikharam | AI/ML & Data Engineer",
    description: "LLM applications, data pipelines, and scalable backend systems built with Python-first engineering.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans min-h-screen relative overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="fixed inset-0 z-[-1] bg-background transition-colors duration-300">
            <DynamicBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10 pointer-events-none"></div>
          </div>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sai Pushkar Sikharam",
              jobTitle: "AI/ML & Data Engineer",
              email: "mailto:s.sai.pushkar@gmail.com",
              sameAs: [
                "https://github.com/PushkarSikharam",
                "https://linkedin.com/in/sai-pushkar-sikharam-167666234"
              ],
              knowsAbout: [
                "LLM Applications",
                "Data Engineering",
                "Backend Systems",
                "Machine Learning",
                "FastAPI",
                "Python"
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

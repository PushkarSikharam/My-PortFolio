import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import DynamicBackground from "@/components/ui/DynamicBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

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
    "Machine Learning",
    "Cybersecurity Research",
    "LLM Benchmarking",
    "Vulnerability Detection"
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} font-sans min-h-screen relative overflow-x-hidden`}>
        <div className="fixed inset-0 z-[-1] bg-background">
          <DynamicBackground />
        </div>
        {children}
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
                "Python",
                "Cybersecurity Research",
                "LLM Benchmarking"
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

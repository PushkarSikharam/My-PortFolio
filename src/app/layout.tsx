import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import DynamicBackground from "@/components/ui/DynamicBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Sai Pushkar Sikharam | AI + Backend Systems Engineer",
  description: "AI and backend systems engineer building scalable APIs, intelligent applications, and production-grade software systems.",
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
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApplyToJobs",
  description: "Apply to 100 jobs in 1 minute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
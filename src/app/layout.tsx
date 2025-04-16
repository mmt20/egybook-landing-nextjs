import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";

const font = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "EgyBook | Discover & Book the Best Hotels in Egypt",
  description:
    "EgyBook is your ultimate platform to explore, preview, and book 450+ curated hotels across Egypt with smart booking, VR previews, and best-price deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}  antialiased`} suppressHydrationWarning>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

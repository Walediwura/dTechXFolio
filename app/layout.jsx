import { Antonio } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import FollowCursor from "./components/FollowCursor";
import { ThemeProvider } from "next-themes";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-antonio",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // adjust as needed
  variable: "--font-urbanist",
  display: "swap", // avoids layout shift
});
export const metadata = {
  title: "dTechGuyX",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${antonio.className} ${urbanist.variable} antialiased`}>
        <div>
          <div className="text-slate-200 antialiased selection:bg-black selection:text-white">
            <ThemeProvider attribute="class" enableSystem defaultTheme="system">
              {children}
            </ThemeProvider>

            <FollowCursor />
          </div>
        </div>
      </body>
    </html>
  );
}

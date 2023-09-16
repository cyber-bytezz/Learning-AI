import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";
import { Toast } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning AI-xD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
        <Provider>
        <Navbar />
          {children}
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
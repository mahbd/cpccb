import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";
import Sidebar from "@/app/components/Sidebar";
import AuthProvider from "./Provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        <AuthProvider>
          <NavBar />
          <div className="md:flex md:gap-4">
            <div className="hidden md:block">
              <Sidebar />
            </div>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

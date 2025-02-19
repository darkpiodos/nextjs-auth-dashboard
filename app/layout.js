import { AuthProvider } from "./Providers";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Autheticated Dashboard By Darwin",
  description:
    "Secure and responsive authentication dashboard built with Next.js, MongoDB, NextAuth, and Tailwind CSS. Features user registration, login, protected routes, session management, and password hashing for a seamless and secure experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        {" "}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

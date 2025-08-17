import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter =Inter({subsets: ["latin"]});

export const metadata = {
  title: "NexFinance",
  description: "One stop solution for all your financial needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header*/}
        <main className="min-h-screen">{children}</main>
        {/*Footer*/}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>
              Made with ❤️ by Gauri
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

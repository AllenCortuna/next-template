import "./globals.css";
import { Navbar } from "./component/Navbar";
import { Martian_Mono } from "next/font/google";
const font = Martian_Mono ({ subsets: ["latin"], weight: ["200","400","500","600", "700"] });
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "MODEO Web App",
  description: "DPWH MODEO Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Navbar />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}

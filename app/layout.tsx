import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "POS Dashboard built with Next.js and ShadCN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

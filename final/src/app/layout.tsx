import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar/>
          <main className="flex-1">
            <Navbar/>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

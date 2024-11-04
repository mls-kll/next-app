import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./layout.module.scss";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Milos Kallai",
  description: "Milos Kallai - Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.layoutRoot}>
        <NavBar />
        <Container className={styles.mainContent}>{children}</Container>
      </body>
    </html>
  );
}

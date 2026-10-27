import React from "react";
import "./styles.css";
import Header from "@/components/Header/Header";

export const metadata = {
  description: "Et starterprosjekt for Payload CMS, bygget med Docker",
  title: "Payload CMS",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="no">
      <body>
        <div className="app-container">
          <Header />
          <main>
            {children}
          </main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
};

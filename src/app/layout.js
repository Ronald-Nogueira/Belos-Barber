"use client";

import { createGlobalStyle } from "styled-components";
import React from "react";

import { AuthProvider } from "@/contexts/authContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Arial, sans-serif;
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

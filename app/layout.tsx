"use client";

import { ColorModeScript } from "@chakra-ui/react";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head />
      <body>
        <ColorModeScript />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

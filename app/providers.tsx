"use client";
import { useState } from "react";

// Chrakra UI
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react";
import { theme } from "@/theme";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

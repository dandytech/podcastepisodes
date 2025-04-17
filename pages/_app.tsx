import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ContextProvider } from "../contexts/ContextProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Create one query client per app session
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Assignment from Daniel Amaechi</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <div className="antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
          <Header />

          <main className="w-full">
            <ContextProvider>
              <Component {...pageProps} />
            </ContextProvider>
          </main>

          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}

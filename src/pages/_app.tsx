// pages/_app.tsx

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const hideFooter =
    currentPath === "/loginPage" ||
    currentPath === "/registerPage" ||
    currentPath === "/resetPasswordPage" ||
    currentPath === "/loginAdminPage";
  const hideHeader =
    currentPath === "/loginPage" ||
    currentPath === "/registerPage" ||
    currentPath === "/resetPasswordPage" ||
    currentPath === "/profileAdminPage" ||
    currentPath === "/loginAdminPage";

  return (
    <Layout hideFooter={hideFooter} hideHeader={hideHeader}>
      <Component {...pageProps} />
    </Layout>
  );
}

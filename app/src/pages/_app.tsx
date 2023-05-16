import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "~/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Toaster />
    </>
  );
};

export default api.withTRPC(MyApp);

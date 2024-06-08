import { Suspense } from "react";
import { ReactDemoLoading } from ".";

export default function ReactDemoSuspense({ children }: any) {
  return <Suspense fallback={<ReactDemoLoading />}>{children}</Suspense>;
}

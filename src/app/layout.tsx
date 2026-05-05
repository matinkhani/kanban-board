import type { ReactNode } from "react";
import { Header } from "../components/layout/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden bg-green-300">
      <div className="flex flex-col gap-9 h-full max-w-300 w-full bg-red-400">
        <Header />
        {children}
      </div>
    </div>
  );
};

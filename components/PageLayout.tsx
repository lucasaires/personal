import { ReactNode } from "react";
import Header from "./Header";

interface PageLayoutProps {
  children: ReactNode;
  currentPage?: "about" | "projects" | "contact";
}

export default function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header currentPage={currentPage} />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

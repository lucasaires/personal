"use client";

import Link from "next/link";
import { useMobileMenu } from "../hooks/useMobileMenu";

interface HeaderProps {
  currentPage?: "about" | "projects" | "contact";
}

export default function Header({ currentPage }: HeaderProps) {
  const { isOpen, toggle, close } = useMobileMenu();

  const getNavLinkClass = (page: string) => {
    const baseClass =
      "text-[#0d141c] text-sm font-medium leading-normal hover:text-[#3490f3] transition-colors";
    return currentPage === page ? `${baseClass} font-bold` : baseClass;
  };

  const getMobileNavLinkClass = (page: string) => {
    const baseClass =
      "text-[#0d141c] text-lg font-medium leading-normal hover:text-[#3490f3] transition-colors block py-3 px-4 border-b border-[#e7edf4]";
    return currentPage === page
      ? `${baseClass} font-bold bg-[#f0f7ff]`
      : baseClass;
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-4 md:px-10 py-3 relative z-50">
        <div className="flex items-center gap-4 text-[#0d141c]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_330)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <Link
            className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex items-center
            "
            href="/"
          >
            <span className="hidden sm:inline">Lucas Portfolio</span>
            <span className="sm:hidden">Lucas</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <Link className={getNavLinkClass("about")} href="/about">
              Sobre mim
            </Link>
            <Link className={getNavLinkClass("projects")} href="/projects">
              Projetos
            </Link>
            <Link className={getNavLinkClass("contact")} href="/contact">
              Contato
            </Link>
          </nav>
          <div className="flex gap-2">
            <a
              href="https://github.com/lucasaires"
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e9edf1] text-[#101419] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="text-[#101419]"
                data-icon="GithubLogo"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </div>
            </a>
            <a
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e9edf1] text-[#101419] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              href="https://www.linkedin.com/in/lucas-aires-6571a9125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="text-[#101419]"
                data-icon="LinkedinLogo"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span
              className={`block w-6 h-0.5 bg-[#0d141c] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0d141c] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0d141c] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`
        fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
        onClick={close}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`
        fixed top-[73px] left-0 right-0 bg-white border-b border-[#e7edf4] z-40 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        <nav className="py-2">
          <Link
            className={getMobileNavLinkClass("about")}
            href="/about"
            onClick={close}
          >
            Sobre mim
          </Link>
          <Link
            className={getMobileNavLinkClass("projects")}
            href="/projects"
            onClick={close}
          >
            Projetos
          </Link>
          <Link
            className={getMobileNavLinkClass("contact")}
            href="/contact"
            onClick={close}
          >
            Contato
          </Link>

          {/* Mobile Social Links */}
          <div className="flex gap-4 justify-center py-4 border-t border-[#e7edf4] mt-2">
            <a
              href="https://github.com/lucasaires"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e9edf1] text-[#101419] hover:bg-[#d9e2ea] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </a>
            <a
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#e9edf1] text-[#101419] hover:bg-[#d9e2ea] transition-colors"
              href="https://www.linkedin.com/in/lucas-aires-6571a9125/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

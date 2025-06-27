import Link from "next/link";

interface HeaderProps {
  currentPage?: "about" | "projects" | "contact";
}

export default function Header({ currentPage }: HeaderProps) {
  const getNavLinkClass = (page: string) => {
    const baseClass = "text-[#0d141c] text-sm font-medium leading-normal hover:text-[#3490f3] transition-colors";
    return currentPage === page ? `${baseClass} font-bold` : baseClass;
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
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
          className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]"
          href="/"
        >
          Lucas Portfolio
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link
            className={getNavLinkClass("about")}
            href="/about"
          >
            About
          </Link>
          <Link
            className={getNavLinkClass("projects")}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={getNavLinkClass("contact")}
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              'url("https://avatars.githubusercontent.com/u/29777714?v=4&size=64")',
          }}
        ></div>
      </div>
    </header>
  );
}

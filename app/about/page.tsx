import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Manrope, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_330)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">Alex&apos;s Portfolio</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-[#0d141c] text-sm font-medium leading-normal" href="/">About</Link>
              <Link className="text-[#0d141c] text-sm font-medium leading-normal" href="/projects">Projects</Link>
              <Link className="text-[#0d141c] text-sm font-medium leading-normal" href="/contact">Contact</Link>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq0INUNHxcq29M7VcARGZ6R8AuLTGd0lcCATk7DjC6x7W0hCE9MJ08L8x8JyO_aWL0U0iATrV4mJ38n1JgPtd-KLKC2OqB9bOoUdAo9rnZihO14QqTeYxnZ9te7T2LmxIg9c9xYs2V3Ry1bPVX2ThU4AKz-jVK_dHco9R8LiSYpBBCsh9kmKoBDCxwv3b4HyIT4JNxhNe7NnQM5y4HIrR_Ps0lodlY-75s8nDs04wFyN1xyVGN05ICh06M-pApAB6pdaWJiIRWqPE")'}}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">About Me</p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  I&apos;m a software engineer with a passion for building innovative solutions. With a background in computer science and several years of experience in the tech
                  industry, I specialize in developing scalable and efficient applications. My expertise spans across various programming languages and frameworks, and I&apos;m always
                  eager to learn new technologies and tackle challenging projects.
                </p>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Background</h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              I hold a Bachelor&apos;s degree in Computer Science from State University and have worked as a software engineer at Tech Solutions Inc. for the past five years. During my
              time there, I contributed to several key projects, including the development of a cloud-based platform for managing customer data and a mobile application for
              streamlining internal communication. My work involved collaborating with cross-functional teams, participating in code reviews, and ensuring the delivery of
              high-quality software solutions.
            </p>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Java</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Python</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">JavaScript</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">React</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Node.js</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">SQL</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">AWS</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Docker</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Git</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">Agile Methodologies</p>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-[#0d141c]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                    ></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#cedbe8] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Software Engineer at Tech Solutions Inc.</p>
                <p className="text-[#49719c] text-base font-normal leading-normal">2019 - Present</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#cedbe8] h-2"></div>
                <div className="text-[#0d141c]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                    ></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#cedbe8] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Intern at Innovation Labs</p>
                <p className="text-[#49719c] text-base font-normal leading-normal">Summer 2018</p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#cedbe8] h-2"></div>
                <div className="text-[#0d141c]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">Freelance Web Developer</p>
                <p className="text-[#49719c] text-base font-normal leading-normal">2017 - 2019</p>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Interests</h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Outside of work, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with industry trends. I&apos;m also an avid reader and
              enjoy hiking and photography in my free time. These interests help me stay creative and bring a fresh perspective to my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

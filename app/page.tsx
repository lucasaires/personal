import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9edf1] px-10 py-3">
          <div className="flex items-center gap-4 text-[#101419]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em]">
              Portfolio
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                className="text-[#101419] text-sm font-medium leading-normal"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-[#101419] text-sm font-medium leading-normal"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-[#101419] text-sm font-medium leading-normal"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e9edf1] text-[#101419] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
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
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e9edf1] text-[#101419] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
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
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage:
                        'url("https://avatars.githubusercontent.com/u/29777714?v=4")',
                    }}
                  ></div>
                  <div className="flex flex-col items-center justify-center justify-center">
                    <p className="text-[#101419] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                      Lucas Aires
                    </p>
                    <p className="text-[#58728d] text-base font-normal leading-normal text-center">
                      Software Developer
                    </p>
                    <p className="text-[#58728d] text-base font-normal leading-normal text-center">
                      Atuo como full-stack, com uma base sólida em JavaScript,
                      React e Node.js. Gosto de trabalhar em projetos que exigem
                      atenção aos detalhes e foco na experiência do usuário.
                      Estou sempre buscando aprender mais e evoluir, tanto no
                      código quanto na forma de pensar e construir produtos de
                      qualidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#101419] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Projetos
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8W1BhsZ0oUfW8JcDPip48itSH8qcWDRE0sXf_M8spWlCr7cTd2_9Wr_53PKmF_betbYmDWAT_oSE27gzbpxGWWc_LWNbiY6fzy0vtISybyOH8_NDs4XtImMrE8JRukAYvLojxbrw_BCHHAMy7vww3QOyvPArLHRZiFCuiMZftwA5mOiLFNSJOonFCAj-gjRlYUmQOHhf30obs_KKJpXKnva2VHEV9ectICJhHbxD84qCM7DQKhPurxkjHnIys7I1Uy8nOT7-TDUA")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101419] text-base font-medium leading-normal">
                      Project Alpha
                    </p>
                    <p className="text-[#58728d] text-sm font-normal leading-normal">
                      A web application for managing tasks and projects
                      efficiently.
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnmRjto4uzrAtXKp_SiZENHuZlghTe3W3x15QoceDzn__ymffGoPC6K17z0cmoRlZKCEl3kps5iTSyKVMlHxQ4JAYr232GZYT4-CGsVZyfSPZEdehhTMgPUmIOKggh8ThG5VKSxaCriL38Vod8oJnusQRDmDWdlYV716R6eBmMz3X8fXhisrdKT--vqruFpYPdn2zS-oOyTVPzpZ5AeUCt335yC8Wo-eBpaMznCr3KRUAWjAdxuW9tRDYlaH_7lQJU6eUK_x6Uu3Y")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101419] text-base font-medium leading-normal">
                      Project Beta
                    </p>
                    <p className="text-[#58728d] text-sm font-normal leading-normal">
                      An e-commerce platform with a focus on user experience and
                      performance.
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0zQ08U6uo20fGxoWlLEDqy-lksvXzYfQHZLLIgLphuaKqznXr7Xu0e3cHa7oaQ43hya5-G72GCmUz1-YYAkESJ8zo-Iqf5vdMxdQXRzyM1PBaUM3A1jzPT2tfAPgu_X6f8vLbNMprmh8lYRUD31RTCh5BZXGJUTh7wKXzn0ZlQI6DeUP4ox2a0BMby1SaD2bvK22MoH4tFZvauExBA76nBcdk0_rPi2XrJ8wr1N8y6MnvxlW_UMhoszxUIw-2KEDi_toSUkrsyYg")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#101419] text-base font-medium leading-normal">
                      Project Gamma
                    </p>
                    <p className="text-[#58728d] text-sm font-normal leading-normal">
                      A mobile app for tracking fitness goals and progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div
                    className="text-[#58728d]"
                    data-icon="GithubLogo"
                    data-size="24px"
                    data-weight="regular"
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
                  </div>
                </a>
                <a href="#">
                  <div
                    className="text-[#58728d]"
                    data-icon="LinkedinLogo"
                    data-size="24px"
                    data-weight="regular"
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
                  </div>
                </a>
              </div>
              <p className="text-[#58728d] text-base font-normal leading-normal">
                @2025 Lucas Aires. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

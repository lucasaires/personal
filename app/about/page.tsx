import Link from "next/link";

export default function About() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
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
            <div className="flex items-center gap-9">
              <Link
                className="text-[#0d141c] text-sm font-medium leading-normal"
                href="/"
              >
                About
              </Link>
              <Link
                className="text-[#0d141c] text-sm font-medium leading-normal"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-[#0d141c] text-sm font-medium leading-normal"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://avatars.githubusercontent.com/u/29777714?v=4&size=64")',
              }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight">
                  Quem sou eu?
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Sou engenheiro de software e adoro transformar ideias em
                  soluções que realmente fazem a diferença. Tenho formação em
                  Ciência da Computação e, ao longo dos últimos anos, venho
                  acumulando experiência no desenvolvimento de aplicações
                  escaláveis, eficientes e voltadas para o usuário. Trabalho com
                  diversas linguagens e frameworks, e estou sempre em busca de
                  novos aprendizados e desafios que me tirem da zona de
                  conforto. Gosto de estar onde a inovação acontece.
                </p>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Um pouco sobre mim
            </h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Sou bacharel em Ciência da Computação pela Universidade Federal De
              Campina Grande, pós graduando em Engenharia de Software pela PUC
              Minas e trabalho como engenheiro de software na Globo. Meu
              trabalho envolve a colaboração com equipes multifuncionais, a
              participação em revisões de código e a garantia da entrega de
              soluções de software de alta qualidade.
            </p>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Skills
            </h2>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  Java
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  Python
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  JavaScript
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  React
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  Node.js
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  SQL
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  GCP
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  Docker
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  Git
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
                <p className="text-[#0d141c] text-sm font-medium leading-normal">
                  Metodologias Ágeis
                </p>
              </div>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Experiências
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div
                  className="text-[#0d141c]"
                  data-icon="Briefcase"
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
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#cedbe8] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Engenheiro de Software na Globo
                </p>
                <p className="text-[#49719c] text-base font-normal leading-normal">
                  2024 - Present
                </p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#cedbe8] h-2"></div>
                <div
                  className="text-[#0d141c]"
                  data-icon="Briefcase"
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
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#cedbe8] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Desenvolvedor FullStack na Act Digital
                </p>
                <p className="text-[#49719c] text-base font-normal leading-normal">
                  2020 - 2024
                </p>
              </div>
            </div>

            {/* <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#cedbe8] h-2"></div>
                <div
                  className="text-[#0d141c]"
                  data-icon="Briefcase"
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
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Freelance Desenvolvedor web (Going2)
                </p>
                <p className="text-[#49719c] text-base font-normal leading-normal">
                  2023 - 2025
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-[#cedbe8] h-2"></div>
                <div
                  className="text-[#0d141c]"
                  data-icon="Briefcase"
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
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141c] text-base font-medium leading-normal">
                  Freelance Desenvolvedor web (Hygia - Startup de Saúde)
                </p>
                <p className="text-[#49719c] text-base font-normal leading-normal">
                  2021 - 2022
                </p>
              </div> */}
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Interesses
            </h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Fora do trabalho, gosto de explorar novas tecnologias e tento me
              manter atualizado com as tendências do setor. Também gosto de
              bater uma bolinha, de viajar e jogar video game no meu tempo
              livre. Esses interesses me ajudam a manter a criatividade e a
              trazer uma nova perspectiva ao meu trabalho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

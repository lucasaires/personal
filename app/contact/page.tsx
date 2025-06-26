"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

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
                href="/about"
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
                className="text-[#0d141c] text-sm font-medium leading-normal font-bold"
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
                  Entre em Contato
                </p>
                <p className="text-[#49719c] text-sm font-normal leading-normal">
                  Estou sempre aberto para discutir novos projetos, ideias
                  criativas ou oportunidades. Sinta-se à vontade para entrar em
                  contato através de qualquer um dos canais abaixo.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0d141c] text-base font-medium leading-normal pb-2">
                    Seu Nome
                  </p>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49719c] p-[15px] text-base font-normal leading-normal                "
                    required
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0d141c] text-base font-medium leading-normal pb-2">
                    Seu Email
                  </p>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49719c] p-[15px] text-base font-normal leading-normal"
                    required
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#0d141c] text-base font-medium leading-normal pb-2">
                    Sua Mensagem
                  </p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] min-h-36 placeholder:text-[#49719c] p-[15px] text-base font-normal leading-normal"
                    required
                  ></textarea>
                </label>
              </div>

              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#3490f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2980d9] transition-colors"
                >
                  <span className="truncate">Enviar Mensagem</span>
                </button>
              </div>
            </form>

            <h3 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Outras Formas de Contato
            </h3>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-10"
                  data-icon="Envelope"
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
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                  </svg>
                </div>
                <p className="text-[#0d141c] text-base font-normal leading-normal flex-1 truncate">
                  Email
                </p>
              </div>
              <div className="shrink-0">
                <p className="text-[#0d141c] text-base font-normal leading-normal">
                  lucasaires13@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-10"
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
                <p className="text-[#0d141c] text-base font-normal leading-normal flex-1 truncate">
                  LinkedIn
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://linkedin.com/in/lucas-aires-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d141c] text-base font-normal leading-normal hover:text-[#3490f3] transition-colors"
                >
                  linkedin.com/in/lucas-aires-6571a9125
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-10"
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
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,0,24-24V152a8,8,0,0,0-16,0v16a8,8,0,0,1-8,8H96a39.89,39.89,0,0,0-8.44-24.47A40.05,40.05,0,0,0,120,112a8,8,0,0,0,0-16,24,24,0,0,1-24-24V64a8,8,0,0,0-16,0v8a40,40,0,0,0,40,40h16a40,40,0,0,0,40-40V64a8,8,0,0,0-16,0v8a24,24,0,0,1-24,24,8,8,0,0,0,0,16Z"></path>
                  </svg>
                </div>
                <p className="text-[#0d141c] text-base font-normal leading-normal flex-1 truncate">
                  GitHub
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://github.com/lucasaires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0d141c] text-base font-normal leading-normal hover:text-[#3490f3] transition-colors"
                >
                  github.com/lucasaires
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

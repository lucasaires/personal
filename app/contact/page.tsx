"use client";

import { PageLayout, ContactForm, ContactInfo } from "@/components";

export default function Contact() {
  return (
    <PageLayout currentPage="contact">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3 w-full">
          <p className="text-[#0d141c] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">
            Entre em Contato
          </p>
          <p className="text-[#49719c] text-sm font-normal leading-normal">
            Estou sempre aberto para discutir novos projetos, ideias
            criativas ou oportunidades. Sinta-se à vontade para entrar em
            contato através de qualquer um dos canais abaixo.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-4">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="lg:max-w-md">
          <ContactInfo />
        </div>
      </div>
    </PageLayout>
  );
}

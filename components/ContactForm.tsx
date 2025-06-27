"use client";

import { useState } from "react";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <label className="flex flex-col flex-1">
            <p className="text-[#0d141c] text-base font-medium leading-normal pb-2">
              Seu Nome
            </p>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Digite seu nome"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49719c] p-[15px] text-base font-normal leading-normal"
              required
            />
          </label>

          <label className="flex flex-col flex-1">
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

        <label className="flex flex-col">
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

        <div className="flex justify-start">
          <button
            type="submit"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#3490f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2980d9] transition-colors"
          >
            <span className="truncate">Enviar Mensagem</span>
          </button>
        </div>
      </div>
    </form>
  );
}

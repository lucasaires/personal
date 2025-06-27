import { PageLayout, SkillsSection, ExperienceSection } from "@/components";

export default function About() {
  return (
    <PageLayout currentPage="about">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3 w-full">
          <p className="text-[#0d141c] tracking-light text-[28px] sm:text-[32px] font-bold leading-tight">
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

      <h2 className="text-[#0d141c] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
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

      <SkillsSection />
      <ExperienceSection />

      <h2 className="text-[#0d141c] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Interesses
      </h2>
      <p className="text-[#0d141c] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Fora do trabalho, gosto de explorar novas tecnologias e tento me
        manter atualizado com as tendências do setor. Também gosto de
        bater uma bolinha, de viajar e jogar video game no meu tempo
        livre. Esses interesses me ajudam a manter a criatividade e a
        trazer uma nova perspectiva ao meu trabalho.
      </p>
    </PageLayout>
  );
}

interface Experience {
  title: string;
  period: string;
}

interface ExperienceItemProps {
  experience: Experience;
  isLast?: boolean;
}

function ExperienceItem({ experience, isLast = false }: ExperienceItemProps) {
  return (
    <>
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
        {!isLast && <div className="w-[1.5px] bg-[#cedbe8] h-2 grow"></div>}
      </div>
      <div className="flex flex-1 flex-col py-3">
        <p className="text-[#0d141c] text-base font-medium leading-normal">
          {experience.title}
        </p>
        <p className="text-[#49719c] text-base font-normal leading-normal">
          {experience.period}
        </p>
      </div>
    </>
  );
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Engenheiro de Software na Globo",
      period: "2024 - Present"
    },
    {
      title: "Desenvolvedor FullStack na Act Digital",
      period: "2020 - 2024"
    }
  ];

  return (
    <>
      <h2 className="text-[#0d141c] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Experiências
      </h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {experiences.map((experience, index) => (
          <ExperienceItem 
            key={index} 
            experience={experience} 
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </>
  );
}

interface SkillTagProps {
  skill: string;
}

function SkillTag({ skill }: SkillTagProps) {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#e7edf4] pl-4 pr-4">
      <p className="text-[#0d141c] text-sm font-medium leading-normal">
        {skill}
      </p>
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    "Java",
    "Python", 
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "GCP",
    "Docker",
    "Git",
    "Metodologias Ágeis"
  ];

  return (
    <>
      <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Skills
      </h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactInfoItem({ icon, label, value, href }: ContactInfoProps) {
  const textClass = href 
    ? "text-[#0d141c] text-sm sm:text-base font-normal leading-normal hover:text-[#3490f3] transition-colors"
    : "text-[#0d141c] text-sm sm:text-base font-normal leading-normal";

  const content = (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-slate-50 p-4 min-h-14 sm:justify-between rounded-lg">
      <div className="flex items-center gap-4">
        <div className="text-[#0d141c] flex items-center justify-center rounded-lg bg-[#e7edf4] shrink-0 size-10">
          {icon}
        </div>
        <p className="text-[#0d141c] text-base font-medium leading-normal">
          {label}
        </p>
      </div>
      <div className="sm:shrink-0 pl-14 sm:pl-0">
        <p className={textClass}>
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
        Outras Formas de Contato
      </h3>

      <div className="space-y-3">
        <ContactInfoItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
            </svg>
          }
          label="Email"
          value="lucasaires13@gmail.com"
          href="mailto:lucasaires13@gmail.com"
        />

        <ContactInfoItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          }
          label="LinkedIn"
          value="linkedin.com/in/lucas-aires-dev"
          href="https://www.linkedin.com/in/lucas-aires-6571a9125/"
        />

        <ContactInfoItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,0,24-24V152a8,8,0,0,0-16,0v16a8,8,0,0,1-8,8H96a39.89,39.89,0,0,0-8.44-24.47A40.05,40.05,0,0,0,120,112a8,8,0,0,0,0-16,24,24,0,0,1-24-24V64a8,8,0,0,0-16,0v8a40,40,0,0,0,40,40h16a40,40,0,0,0,40-40V64a8,8,0,0,0-16,0v8a24,24,0,0,1-24,24,8,8,0,0,0,0,16Z"></path>
            </svg>
          }
          label="GitHub"
          value="github.com/lucasaires"
          href="https://github.com/lucasaires"
        />
      </div>
    </div>
  );
}

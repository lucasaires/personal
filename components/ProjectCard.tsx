interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string | null;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 pb-4 bg-white rounded-xl p-4 shadow-sm border border-[#e7edf4] hover:shadow-md transition-shadow">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-[#0d141c] text-lg font-semibold leading-normal">
            {title}
          </p>
          <p className="text-[#49719c] text-sm font-normal leading-normal mt-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#e7edf4] text-[#0d141c] text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-[#0d141c] text-white text-sm font-medium rounded-lg hover:bg-[#1a1f2e] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,0,24-24V152a8,8,0,0,0-16,0v16a8,8,0,0,1-8,8H96a39.89,39.89,0,0,0-8.44-24.47A40.05,40.05,0,0,0,120,112a8,8,0,0,0,0-16,24,24,0,0,1-24-24V64a8,8,0,0,0-16,0v8a40,40,0,0,0,40,40h16a40,40,0,0,0,40-40V64a8,8,0,0,0-16,0v8a24,24,0,0,1-24,24,8,8,0,0,0,0,16Z"></path>
            </svg>
            GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-[#3490f3] text-white text-sm font-medium rounded-lg hover:bg-[#2980d9] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56,56,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142A8,8,0,1,0,106.69,154a56,56,0,0,0,79.22-2.22l24.12-24.12A56,56,0,0,0,207.62,48.38Z"></path>
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

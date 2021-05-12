import Image from "next/image"
import { Children } from "../utils/common"

export interface LanguageCaseStudyProps extends Children {
  name: string
  caseStudies?: CaseStudy[]
  experienceLevel: "Familiar" | "Knowledgeable" | "Expert"
}

export interface CaseStudy {
  name: string
  link: string
}

export function LanguageCaseStudy({
  caseStudies,
  children,
  name,
  experienceLevel
}: LanguageCaseStudyProps) {
  return (
    <div>
      <Image
        src={`/langs/${name.toLowerCase()}.svg`}
        width={128}
        height={128}
      />

      <h1 className="mt-2 text-xl font-semibold">{name}</h1>
      <h2 className="text-sm italic">{experienceLevel}</h2>

      <div className="h-32 my-4">
        <p className="mt-2 text-sm">{children}</p>
      </div>

      <div>
        <h1 className="font-semibold">My projects using {name}</h1>

        <ul className="space-y-1">
          {caseStudies?.map(({ link, name }) => (
            <li key={name}>
              <a
                className="inline-block text-sm transition text-blue-600 hover:text-blue-500"
                target="_blank"
                href={link}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

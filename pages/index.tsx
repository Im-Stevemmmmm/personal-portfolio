import { PageContent } from "../components/PageContent"
import { Children } from "../utils/common"

function Title({ children }: Children) {
    return (
        <div className="w-max">
            <h1 className="text-4xl font-white font-bold">{children}</h1>
            <div className="mt-2 h-2 w-2/3 rounded-full bg-blue-300" />
        </div>
    )
}

interface HtmlTagProps extends Children {
    name: string
    smallPadding?: boolean
}

function HtmlTag({ name, children, smallPadding }: HtmlTagProps) {
    const padding = {
        normal: ["mb-10", "mt-10"],
        small: ["mb-4", "mt-4"]
    }[smallPadding ? "small" : "normal"]

    const topPadding = padding[0]
    const bottomPadding = padding[1]

    return (
        <div>
            <h4 className={`html-tag ${topPadding}`}>{`<${name}>`}</h4>
            {children}
            <h4 className={`html-tag ${bottomPadding}`}>{`</${name}>`}</h4>
        </div>
    )
}

export default function Home() {
    return (
        <div className="min-h-screen bg-darkGray text-gray-100">
            <nav>
                <PageContent>
                    <div className="h-20 flex flex-row items-center justify-between">
                        <div>
                            <h5 className="text-lg text-bold uppercase font-bold tracking-wide">
                                Esteban Garcia
                            </h5>
                            <div className="h-2 w-16 rounded-full bg-teal-300" />
                        </div>
                        <ul className="flex flex-row space-x-12">
                            <li className="font-semibold">About Me</li>
                            <li className="font-semibold">Work</li>
                            <li className="font-semibold">Contact</li>
                        </ul>
                    </div>
                </PageContent>
            </nav>

            <PageContent className="pt-36 mb-12">
                <div className="flex flex-row">
                    <HtmlTag name="h1">
                        <h1 className="text-6xl max-w-3xl font-bold">
                            Hi, <br /> I'm{" "}
                            <span className="text-teal-300">Esteban</span>,{" "}
                            <br />a{" "}
                            <span className="text-blue-300">
                                fullstack developer
                            </span>
                            .
                        </h1>
                        <h4 className="my-2 text-sm text-gray-400 font-medium">
                            7 years of personal / Systems developer / Certified
                            AWS specialist experience
                        </h4>
                    </HtmlTag>
                </div>
            </PageContent>

            <PageContent>
                <HtmlTag name="ul">
                    <Title>Projects</Title>
                </HtmlTag>
            </PageContent>
        </div>
    )
}

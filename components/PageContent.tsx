import { Children, ForwardStyles } from "../utils/common"

export interface PageContentProps extends ForwardStyles, Children {}

export function PageContent({ className, id, children }: PageContentProps) {
  const rootElem = <div className="px-16 mx-auto max-w-7xl">{children}</div>

  return className ? (
    <div className={className} id={id}>
      {rootElem}
    </div>
  ) : (
    rootElem
  )
}

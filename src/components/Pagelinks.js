import { pageLinks } from './Data'
import PageLink from './PageLink'
const Pagelinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default Pagelinks

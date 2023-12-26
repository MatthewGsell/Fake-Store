import Arrowcss from "./Arrow.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons"


function Arrow() {
    return <div className={Arrowcss.main}><div className={Arrowcss.arrow}><FontAwesomeIcon icon={faArrowUpLong}/></div><h3>Choose Category</h3></div>
}
export default Arrow
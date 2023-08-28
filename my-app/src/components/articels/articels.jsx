import Styled from "./articels.module.css"
import articel from "./../../assets/img/img-1.jpg"

function Articels(props) {
    
    return(
        <div className={Styled.articelsWrapper}>
        
            <img src={props.list.imageUrl} alt="" />
            <h4>{props.list.title}</h4>
            <p>خواندن {props.list.readingTime} دقیقه ای</p>
        

        </div>
    )
}
export default Articels
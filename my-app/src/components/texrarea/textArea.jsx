import styled from "./textArea.module.css"



function TextArea(props){
    return(
        <div className={styled.textArea}>
        <label>{props.title}</label>
        <textarea onChange={props.onChange}></textarea>
        </div>

    )
}
export default TextArea
import styled from "./inputCreateArticel .module.css"

function InputCreateArticel(props) {



    return(
        <div className={styled.inputCreateArticel}>
          <label>{props.title}</label>
          <input 
          onChange={props.onChange} 
          name={props.name} 
          type="text" />
        
        </div>
    )
    
}
export default InputCreateArticel
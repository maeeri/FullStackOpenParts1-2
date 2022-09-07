
const Input = (props) => {
    return (
        <table>
          <td>
            {props.name}
          </td>
          <td>
            <input 
            value={props.term}
            onChange={props.action}/>
          </td>
        </table>
    )
}

export default Input
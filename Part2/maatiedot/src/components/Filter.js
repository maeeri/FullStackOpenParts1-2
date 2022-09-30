const Filter = (props) => {
    return (
        <table>
          <tbody>
            <tr>
              <td>
                filter countries
              </td>
              <td>
                <input id={props.id}
                value={props.term}
                onChange={props.action}/>
              </td>
            </tr>
          </tbody>
        </table>
    )
}

export default Filter
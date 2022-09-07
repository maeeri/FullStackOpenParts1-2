import Input from "./Input";

const PersonForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <table>
                <tr>
                    <Input name='name' term={props.nameTerm} action={props.nameAction} />
                </tr>
                <tr>
                    <Input name='number' term={props.numberTerm} action={props.numberAction} />
                </tr>          
            </table>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
    
}

export default PersonForm
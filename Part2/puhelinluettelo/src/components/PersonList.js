import Person from "./Person";

const PersonList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                <th>
                    name
                </th>
                <th>
                    number
                </th>
                </tr>
            </thead>
            <tbody>
                {props.showPersons.map(person => 
                <Person key={person.name} name={person.name} number={person.number} />
                )}
            </tbody>
        </table>
    )
}

export default PersonList
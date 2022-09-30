import Country from "./Country";
import CountryList from "./CountryList";
import Weather from "./Weather"

const ShowArea = (props) => {
    if (props.show.length === 0) {
        return <p>No matches</p>
    } else if (props.show.length === 1) {
        return (
            <div>
                <Country country={props.show[0]} />
                <Weather country={props.show[0]} />
            </div>
        )
    } else if (props.show.length > 10) {
        return (
            <p>Too many matches. Specify another filter</p>
        )
    } else {
        console.log("hello")
        return (
            <CountryList countries={props.show} handleClick={props.handleClick} />
        )
    }
}

export default ShowArea
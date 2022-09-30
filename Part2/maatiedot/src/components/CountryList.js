

const CountryList = (props) => {
    return (
        Object.values(props.countries).map((country) => 
        <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => props.handleClick(country.name.common)}>show</button>
        </div>)
    )
}

export default CountryList
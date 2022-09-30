
const Country = ({country}) => {
    try {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <br/>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map(language => 
                        <li key={language}>{language}</li>)}
                </ul>
                <img src={country.flags.svg} height="200" alt="this is a flag" />
            </div>
        )
    } catch(err) {
        console.log(err)
    }
}

export default Country

/*[{
    "name":"Peru",
    "topLevelDomain":
    [".pe"],
    "alpha2Code":"PE","alpha3Code":"PER",
    "callingCodes":["51"],
    "capital":"Lima",
    "altSpellings":[
        "PE",
        "Republic of Peru",
        "República del Perú"
    ],
    "subregion":"South America",
    "region":"Americas",
    "population":32971846,
    "latlng":[-10.0,-76.0],
    "demonym":"Peruvian",
    "area":1285216.0,
    "gini":41.5,
    "timezones":["UTC-05:00"],
    "borders":["BOL","BRA","CHL","COL","ECU"],
    "nativeName":"Perú","numericCode":"604","
    flags":{"svg":"https://flagcdn.com/pe.svg","png":"https://flagcdn.com/w320/pe.png"},
    "currencies":[{
        "code":"PEN",
        "name":"Peruvian sol",
        "symbol":"S/."
    }],
    "languages":[{
        "iso639_1":"es",
        "iso639_2":"spa",
        "name":"Spanish",
        "nativeName":"Español"
    }],
        "translations":{
        "br":"Perou",
        "pt":"Peru",
        "nl":"Peru",
        "hr":"Peru",
        "fa":"پرو",
        "de":"Peru",
        "es":"Perú",
        "fr":"Pérou",
        "ja":"ペルー",
        "it":"Perù",
        "hu":"Peru"},
        "flag":"https://flagcdn.com/pe.svg",
        "regionalBlocs":[{
            "acronym":"PA",
            "name":"Pacific Alliance",
            "otherNames":[
                "Alianza del Pacífico"
            ]},
            {"acronym":"USAN",
            "name":"Union of South American Nations",
            "otherAcronyms":["UNASUR","UNASUL","UZAN"],
            "otherNames":[
                "Unión de Naciones Suramericanas",
                "União de Nações Sul-Americanas",
                "Unie van Zuid-Amerikaanse Naties",
                "South American Union"
            ]}],
            "cioc":"PER","independent":true
}]*/
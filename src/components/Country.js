
const Country = ({country, updateVisitedCountries}) => {


    return (
        <>
        <li>{country.name.common}</li>
        <button onClick = {() => updateVisitedCountries(country)} >Visited</button>
        </>
    )

}

export default Country;
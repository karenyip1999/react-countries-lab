import Country from "./Country"
const CountriesList = ({countries, visitedCountries, updateVisitedCountries}) => {
    const mappedCountries = countries.map(country => {
        return <Country country = {country} key = {country.id} updateVisitedCountries = {updateVisitedCountries} />
    })

    const mappedVisitedCountries = visitedCountries.map(visitedCountry => {
        return <Country country = {visitedCountry} key = {visitedCountries.id} updateVisitedCountries = {updateVisitedCountries} />
    });


    return (
        <>
        <div> 
            <h3> Countries I can visit: </h3>    
            {mappedCountries}
        </div>
        <div>
            <h3>Visited countries: </h3>
            {mappedVisitedCountries}
        </div>
        </>
    )
}

export default CountriesList;
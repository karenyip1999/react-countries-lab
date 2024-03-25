
const CountriesList = ({country}) => {
    const mappedCountry = country.map(c => {
        return <Country c = {country} key = {country.id} />
    })
    return (
        <>
        {mappedCountry}
        </>

    )

}

export default CountriesList;
import {useState, useEffect} from "react";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadCountries = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    const updateVisitedCountries = (country) => {
        console.log(country);
        //Updates visited country, plus the country just clicked
        setVisitedCountries([...visitedCountries, country])
    }

    useEffect(
        () => {
            loadCountries();
        }, []);

    return (
        <>
        <CountriesList countries = {countries} 
        visitedCountries = {visitedCountries} 
        updateVisitedCountries = {updateVisitedCountries}/>
        </>
    )
}

export default CountriesContainer;
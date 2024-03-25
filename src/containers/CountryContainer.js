import {useState, useEffect} from "react";
import CountriesList from "../components/CountriesList";

const CountryContainer = () => {
    const [country, setCountry] = useState("");

    const loadCountries = async () => {
        const response = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        setCountry(jsonData);
    }

    return (
        <>
        <CountriesList countries = {countries} />
        
        </>
    )
}

export default CountryContainer;
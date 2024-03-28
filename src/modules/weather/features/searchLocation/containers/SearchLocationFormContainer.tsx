import React, {useEffect, useMemo, useState} from 'react';
import {useRouter} from "next/router";
import SearchLocationForm from '@modules/weather/features/searchLocation/components/SearchLocationForm';
import {LocalStorage} from "@modules/shared/misc/helpers/local-storage.helper";
import axios from "axios";

const SearchLocationFormContainer = () => {
    const router = useRouter();
    const [locations, setLocations] = useState<any[]>([]);

    const fetchLocations = useMemo(() => async () => {
        try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities');
            if (response?.data?.error) {
                console.error('Error:', response?.data?.msg);
            } else {
                console.log(response?.data);
                setLocations(response?.data?.data);
            }
        } catch (ex) {
            console.error('Error:', ex);
        }
    }, []);

    const handleSearchLocation = (keyword: any) => {
        LocalStorage.setLocationSearchHistoryList(keyword);
        router.push({
            pathname: '/home',
            query: { keyword: keyword },
        });
    };

    useEffect(() => {
        fetchLocations();
    }, [fetchLocations]);

    return <SearchLocationForm locations={locations} handleSubmit={handleSearchLocation}/>;
};

export default SearchLocationFormContainer;
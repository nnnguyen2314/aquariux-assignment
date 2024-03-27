import React from 'react';
import {useRouter} from "next/router";
import SearchLocationForm from '@modules/weather/features/searchLocation/components/SearchLocationForm';
import {LocalStorage} from "@modules/shared/misc/helpers/local-storage.helper";

const SearchLocationFormContainer = () => {
    const router = useRouter();
    const handleSearchLocation = (keyword: any) => {
        LocalStorage.setLocationSearchHistoryList(keyword);
        router.push({
            pathname: '/home',
            query: { keyword: keyword },
        });
    };

    return <SearchLocationForm handleSubmit={handleSearchLocation}/>;
};

export default SearchLocationFormContainer;
import React, {useEffect, useMemo, useState} from 'react';
import {LocalStorage} from "@modules/shared/misc/helpers/local-storage.helper";
import SearchHistoryList from "@modules/weather/features/searchLocation/components/SearchHistoryList";
import {Card} from "antd";
import {useRouter} from "next/router";

const SearchHistoryContainer = () => {
    const router = useRouter();

    const historyList: any[] = useMemo(() => {
        const storedHistoryList = LocalStorage.getLocationSearchHistoryList();
        return storedHistoryList ? JSON.parse(storedHistoryList) : [];
    },  []);

    const handleClick = (item: string) => {
        router.push({
            pathname: '/home',
            query: { keyword: item },
        });
    }

    return (
        <div>
            <h3>Search History</h3>
            <Card>
                <SearchHistoryList historyList={historyList} handleClick={handleClick} />
            </Card>
        </div>
    );
};

export default SearchHistoryContainer;
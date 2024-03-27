import React, {useEffect, useMemo, useState} from 'react';
import {LocalStorage} from "@modules/shared/misc/helpers/local-storage.helper";
import SearchHistoryList from "@modules/weather/features/searchLocation/components/SearchHistoryList";
import {Card} from "antd";
import {useRouter} from "next/router";

const SearchHistoryContainer = () => {
    const [historyList, setHistoryList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedHistoryList = LocalStorage.getLocationSearchHistoryList();
        setHistoryList(storedHistoryList ? JSON.parse(storedHistoryList) : []);
    }, []);

    const handleClick = (item: string) => {
        router.push({
            pathname: '/home',
            query: { keyword: item },
        });
    };

    const handleRemoveHistoryItem = (item: string) => {
        LocalStorage.removeLocationSearchHistoryItem(item);
        const storedHistoryList = LocalStorage.getLocationSearchHistoryList();
        setHistoryList(storedHistoryList ? JSON.parse(storedHistoryList) : []);
    }

    return (
        <div>
            <h3>Search History</h3>
            <Card>
                <SearchHistoryList historyList={historyList} handleClick={handleClick} handleRemoveHistoryItem={handleRemoveHistoryItem} />
            </Card>
        </div>
    );
};

export default SearchHistoryContainer;
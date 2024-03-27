import React from 'react';
import {Input} from "antd";
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

interface SearchLocationFormProps {
    handleSubmit: any;
}

const SearchLocationForm = (props: SearchLocationFormProps) => {
    const doSearch: SearchProps['onSearch'] = (value, _e, info) => {
        props?.handleSubmit(value);
    };

    return (
        <Search
            placeholder="Search country or city here..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={doSearch}
        />
    );
};

export default SearchLocationForm;
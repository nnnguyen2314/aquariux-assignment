import React, {useState} from 'react';
import {Button, Input} from "antd";
import type { SearchProps } from 'antd/es/input/Search';
import styled from "styled-components";

const { Search } = Input;

const SearchLocationFormWrapper = styled.div`
  .ant-form-item-explain-error {
    color: #ff4d4f;
  }
`;

interface SearchLocationFormProps {
    locations: any[];
    handleSubmit: any;
}

const SearchLocationForm = (props: SearchLocationFormProps) => {
    const [address, setAddress] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLocationSearchChange = (evt: React.FormEvent<HTMLInputElement>) => {
        const value = evt.currentTarget.value;
        setSelectedLocation(selectedLocation);
        if (value && props?.locations.length > 0) {
            const existingLocation = props?.locations.find((loc, index) => {
                return (loc.city.toLowerCase() === value.toLowerCase()) || (loc.country.toLowerCase() === value.toLowerCase());
            });
            setErrorMessage(!existingLocation ? 'Invalid Country / City': '');
        } else {
            setErrorMessage('');
        }
    };

    const doSearch: SearchProps['onSearch'] = (value, _e, info) => {
        props?.handleSubmit(value);
    };

    return (
        <SearchLocationFormWrapper>
            <Search
                placeholder="Search country or city here..."
                allowClear
                enterButton={<Button disabled={!selectedLocation}>Search</Button>}
                size="large"
                onChange={handleLocationSearchChange}
                onSearch={doSearch}
            />
            <div className="ant-form-item-explain-error">{errorMessage}</div>
        </SearchLocationFormWrapper>
    );
};

export default SearchLocationForm;
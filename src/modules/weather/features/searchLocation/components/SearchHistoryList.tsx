import React, {useEffect, useMemo, useState} from 'react';
import {Col, List, Row} from "antd";
import {SearchOutlined, DeleteOutlined} from "@ant-design/icons";
import styled from "styled-components";

const StyledListItem = styled(Row)`
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
`;
interface SearchHistoryListProps {
    historyList: any[];
    handleClick: any;
}

const SearchHistoryList = (props: SearchHistoryListProps) => {
    return (
        <List
            dataSource={props?.historyList}
            renderItem={(item: string, index) => {
                return (
                    <StyledListItem onClick={() => {
                        props?.handleClick(item);
                    }}>
                        <Col md={{span: 20}}>
                            {item}
                        </Col>
                        <Col md={{span: 2}}>
                            <SearchOutlined />
                        </Col>
                        <Col md={{span: 2}}>
                            <DeleteOutlined />
                        </Col>
                    </StyledListItem>
                )
            }}
        />
    )
};

export default SearchHistoryList;
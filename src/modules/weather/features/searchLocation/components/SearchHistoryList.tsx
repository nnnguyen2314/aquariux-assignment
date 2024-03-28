import React from 'react';
import {Button, Col, List, Row} from "antd";
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
    handleRemoveHistoryItem: any;
}

const SearchHistoryList = (props: SearchHistoryListProps) => {
    return (
        <List
            dataSource={props?.historyList}
            renderItem={(item: string, index) => {
                return (
                    <StyledListItem>
                        <Col md={{span: 20}} onClick={() => {
                            props?.handleClick(item)
                        }}>
                            {item}
                        </Col>
                        <Col md={{span: 2}}>
                            <Button type="link" icon={<SearchOutlined />} onClick={() => {
                                props?.handleClick(item);
                            }} />
                        </Col>
                        <Col md={{span: 2}}>
                            <Button type="link" icon={<DeleteOutlined />} onClick={() => {
                                props?.handleRemoveHistoryItem(item)
                            }} />
                        </Col>
                    </StyledListItem>
                )
            }}
        />
    )
};

export default SearchHistoryList;
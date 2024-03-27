import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import styled from "styled-components";
import {Col, Row} from "antd";
import SearchLocationFormContainer
    from "@modules/weather/features/searchLocation/containers/SearchLocationFormContainer";

const StyledSearchContainer = styled(Row)`
    margin: 20px;
    justify-content: center;
`;

const SearchPage: NextPage = () => {
    return (
        <RootLayout>
            <StyledSearchContainer>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 9}}>
                    <SearchLocationFormContainer />
                </Col>
            </StyledSearchContainer>
        </RootLayout>
    );
};

export default SearchPage;
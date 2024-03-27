import type { NextPage } from "next";
import Router, {useRouter} from 'next/router';
import RootLayout from "@modules/shared/features/layout/RootLayout";
import CurrentWeatherContainer from "@modules/weather/features/currentWeather/containers/CurrentWeatherContainer";
import WeatherForecastContainer from "@modules/weather/features/weatherForecast/containers/WeatherForecastContainer";
import styled from "styled-components";
import {Col, Row} from "antd";
import React from "react";

const StyledWeatherContainer = styled(Row)`
    margin: 20px;
    justify-content: center;
`;

const IndexPage: NextPage = () => {
    const router = useRouter();
    const keyword = router?.query?.keyword ? router?.query?.keyword : '';

    return (
        <RootLayout>
            <StyledWeatherContainer>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 9}}>
                    <CurrentWeatherContainer keyword={keyword} />
                </Col>
            </StyledWeatherContainer>
            <StyledWeatherContainer>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 9}}>
                    <WeatherForecastContainer keyword={keyword} />
                </Col>
            </StyledWeatherContainer>
        </RootLayout>
    );
};

export default IndexPage;
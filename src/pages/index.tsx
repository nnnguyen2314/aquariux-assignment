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
    const city = router?.query?.city ? router?.query?.city : '';

    return (
        <RootLayout>
            <StyledWeatherContainer>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 9}}>
                    <CurrentWeatherContainer city={city} />
                </Col>
            </StyledWeatherContainer>
            <StyledWeatherContainer>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 9}}>
                    <WeatherForecastContainer city={city} />
                </Col>
            </StyledWeatherContainer>
        </RootLayout>
    );
};

export default IndexPage;
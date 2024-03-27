import React from 'react';
import {Col, Row} from "antd";
import moment from "moment";
import {WEATHER_ICON_URL} from "@modules/weather/misc/constants";
import styled from "styled-components";

const StyledWeatherForecastListItemRow = styled(Row)`
    .ant-col {
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
      }
      &:last-child {
        justify-content: flex-end;
      }
    }
`;

interface IWeatherForecastListItemProps {
    weatherInfo: any;
}

const WeatherForecastListItem = (props: IWeatherForecastListItemProps) => {
    return (
        <StyledWeatherForecastListItemRow>
            <Col md={{span: 4}}>
                <h4>{moment(props?.weatherInfo?.dt).format('HH:mm')}</h4>
            </Col>
            <Col md={{span: 12}}>
                <img alt={props?.weatherInfo?.weather[0]?.description} width={40} className="weather-icon" src={`${WEATHER_ICON_URL}/${props?.weatherInfo?.weather[0]?.icon}.png`} />
                <label>{`${props?.weatherInfo?.main?.temp_min}/${props?.weatherInfo?.main?.temp_max}`} &deg;C</label>
            </Col>
            <Col md={{span: 8}}>
                <h4>{props?.weatherInfo?.weather[0]?.description}</h4>
            </Col>
        </StyledWeatherForecastListItemRow>
    );
};

export default WeatherForecastListItem;
import React from 'react';
import {Card, Col, Row} from "antd";
import moment from "moment";
import styled from "styled-components";
import {WEATHER_ICON_URL} from "@modules/weather/misc/constants";

const StyledCurrentWeatherCard = styled(Card)`
    &.ant-card {
      .ant-card-head {
        border-bottom: none;

        .ant-col {
          display: flex;
          justify-content: flex-end;

          &:first-child {
            justify-content: flex-start;
          }
        }
      }

      .weather-icon {
        width: 80px;
      }

      .current-weather-card-content-row {
        .current-weather-card-content-col {
          text-align: center;

          h1 {
            margin: 0;
          }

          h3 {
            font-weight: normal;
            margin: 0;
          }

          h2 {
            margin: 0;
          }
        }
      }
    }
`;

interface CurrentWeatherCardProps {
    weatherData: any;
}

const CurrentWeatherCard = (props: CurrentWeatherCardProps) => {
    return props.weatherData && (
        <StyledCurrentWeatherCard
            title={<Row>
                <Col md={{span: 12}}>
                    <label>{moment().format('LL')}</label>
                </Col>
                <Col md={{span: 12}}>
                    <label>{`${props?.weatherData?.name}, ${props?.weatherData?.sys?.country}`}</label>
                </Col>
            </Row>}>
            <Row className="current-weather-card-content-row">
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} className="current-weather-card-content-col">
                    <img className="weather-icon" src={`${WEATHER_ICON_URL}/${props?.weatherData?.weather[0]?.icon}.png`} />
                </Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} className="current-weather-card-content-col">
                    <h1>{props?.weatherData?.main?.temp}&deg;C</h1>
                    <h3>{props?.weatherData?.weather[0]?.description}</h3>
                </Col>
            </Row>
            <Row className="current-weather-card-content-row">
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} className="current-weather-card-content-col">
                    <div>Humidity</div>
                    <h2>{`${props?.weatherData?.main?.humidity} %`}</h2>
                </Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} className="current-weather-card-content-col">
                    <div>Winds</div>
                    <div>
                        <h2>
                            <svg width="18" height="18" viewBox="0 0 50 50">
                                <path d="M25 5 L40 45 L25 35 L10 45 Z" fill="currentColor" transform={`rotate(${props?.weatherData?.wind?.deg + 180}, 25, 25)`} />
                            </svg>
                            <span>{`${props?.weatherData?.wind?.speed} m/s`}</span>
                        </h2>
                    </div>
                </Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} className="current-weather-card-content-col">
                    <div>Visibility</div>
                    <h2>{`${props?.weatherData?.visibility / 1000} km`}</h2>
                </Col>
            </Row>
        </StyledCurrentWeatherCard>
    )
};

export default CurrentWeatherCard;
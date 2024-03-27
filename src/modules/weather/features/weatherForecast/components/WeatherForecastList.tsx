import React, {useEffect, useState} from 'react';
import {List} from "antd";
import _ from 'lodash';
import WeatherForecastListItem from "@modules/weather/features/weatherForecast/components/WeatherForecastListItem";
import moment from "moment";
import styled from "styled-components";

const StyledWeatherForecastListItem = styled.div`
  &:not(:last-child) {
    border-bottom: lightgray solid 1px;
  }
`;
interface IWeatherForecastListProps {
    weatherInfoList: [];
}

const WeatherForecastList = (props: IWeatherForecastListProps) => {
    const [formattedWeatherList, setFormattedWeatherList] = useState<any[]>([]);
    const formatWeatherForecastList: any = () => {
        const list = [];
        const formattedList = _.groupBy(props.weatherInfoList, (item: any) => {
            return moment(item?.dt_txt).format('L');
        });
        for(const [key, value] of Object.entries(formattedList)) {
            list.push({
                date: key,
                data: value
            });
        }
        setFormattedWeatherList(list);
    };

    useEffect(() => {
        formatWeatherForecastList();
    }, [props.weatherInfoList]);

    return (
        <div>
            {formattedWeatherList.map((item, index) => {
                return (
                    <StyledWeatherForecastListItem key={index}>
                        <h3 style={{color: 'darkgray', fontWeight: '600'}}>
                            {!moment().isBefore(moment(item.date), 'days') && 'Today'}
                            {moment().isBefore(moment(item.date), 'days') && moment(item.date).format('DD MMMM')}
                        </h3>
                        <List
                            dataSource={item?.data}
                            renderItem={(dataItem, index) => {
                                return <WeatherForecastListItem weatherInfo={dataItem} key={index}/>
                            }}
                        />
                    </StyledWeatherForecastListItem>
                );
            })}
        </div>
    );
};

export default WeatherForecastList;
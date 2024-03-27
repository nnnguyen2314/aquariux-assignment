import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import Image from "next/image";
import CurrentWeatherContainer from "@modules/weather/features/currentWeather/containers/CurrentWeatherContainer";

const IndexPage: NextPage = () => {
    return (
        <RootLayout>
            <div className="d-flex">
                <div style={{ display: 'grid' }}>
                    <CurrentWeatherContainer/>
                </div>
                <div className="grid-flow-col">
                    Test
                </div>
            </div>
        </RootLayout>
    );
};

export default IndexPage;
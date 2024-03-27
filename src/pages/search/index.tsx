import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";

const SearchPage: NextPage = () => {
    return (
        <RootLayout>
            <div className="d-flex">
                <div style={{ display: 'grid' }}>
                </div>
                <div className="grid-flow-col">
                    Test
                </div>
            </div>
        </RootLayout>
    );
};

export default SearchPage;
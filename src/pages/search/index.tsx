import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import IndexPage from "@/pages";

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
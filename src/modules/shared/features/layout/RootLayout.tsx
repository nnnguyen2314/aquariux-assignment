import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {Layout, Typography} from 'antd';
import {HomeFilled} from "@ant-design/icons";
import styled from 'styled-components';
import MainNav from "@modules/shared/features/nav/MainNav";
import {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Weather Forecast",
    description: "Aquarius Coding Test",
};

const { Header, Content } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledLayoutHeader = styled(Header)`
  color: #000;
  background: linear-gradient(90deg, white 0%, #dceaff 100%);
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  justify-content: space-between;

  .branding {
    display: flex;
    align-items: center;

    .branding-logo {
      display: flex;
      font-size: 50px;
      height: 70px;
      img {
        height: 100%;
        display: block;
      }
      .anticon {
        color: #000;
      }
    }
  }

  .ant-menu-light {
    background: transparent;
    border: none;
  }

  .ant-menu-item-active {
    font-weight: 600;

    &&::after {
      border: none;
    }
  }
`;

const StyledContent = styled(Content)`
  height: auto;
  padding: 0;
`;

const RootLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledLayout>
                    <StyledLayoutHeader>
                        <div className="branding">
                            <div className="branding-logo">
                                <Link href="/">
                                    <HomeFilled />
                                </Link>
                            </div>
                            <div className="nav-bar">
                                <MainNav displayMode="horizontal" />
                            </div>
                        </div>
                    </StyledLayoutHeader>
                    <StyledContent className="flex min-h-screen flex-col items-center justify-between p-24">
                        {children}
                    </StyledContent>
                </StyledLayout>
            </body>
        </html>
    );
};

export default RootLayout;
import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import {Metadata} from "next";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Aquariux Coding Test - Weather App</title>
                    <meta name="description" content="Aquariux Coding Test - Weather App" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"/>
                    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAs9J2eTN0IGOqRc_aZXT8dOalJ9cf_sZs&libraries=places"></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => (
                <StyleProvider cache={cache}>
                    <App {...props} />
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                <style dangerouslySetInnerHTML={{ __html: style }} />
            </>
        ),
    };
};

export default MyDocument;
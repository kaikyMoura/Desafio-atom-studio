// src/pages/index.tsx
import '../styles/globals.css';
import React from 'react';
import  Layout  from '../components/Layout/layout';
import { AppProps } from 'next/app';

const App = ({Component, pageProps} : AppProps) => {
    return (
        <>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
    );
};

export default App;
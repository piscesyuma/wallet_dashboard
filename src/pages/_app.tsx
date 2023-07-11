import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
      setReady(true);
    }, []);

    return (
      <>
        {ready? (
          <Component key={router.route} {...pageProps} />
          )
       : null }
      </>
    );
};

export default MyApp;
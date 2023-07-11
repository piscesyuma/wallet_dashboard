// import { Menu, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import useTranslation from 'next-translate/useTranslation';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';

import Footer from '@/components/Footer';
// import HomeChangeLanguageComponent from '@/components/home_language';
// import HomeOutlinkComponent from '@/components/home_outlink';
// import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import Header from '@/components/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  // const { t } = useTranslation('common');
  const router = useRouter();
  const { asPath } = useRouter();

  const [scrollY, setScrollY] = useState(0);
  const [bShowHeader, setShowHeader] = useState(true);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const onScroll = useCallback(() => {
    if (scrollY > window.scrollY) {
      setShowHeader(true);
    } else if (scrollY < window.scrollY) {
      setShowHeader(false);
    }
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    // add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <SectionContainer>
      {props.meta}
      <div className="flex h-screen flex-col justify-between bg-white overflow-x-hidden">
        <header
          className={`fixed top-0 left-0 z-10 w-full duration-500
        ${bShowHeader ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <Header loggedin={false}/>
        </header>
        <motion.main
          initial={`hidden`}
          animate={`enter`}
          exit={`exit`}
          variants={variants}
          transition={{ type: 'linear' }}
          className="content mb-auto text-xl mt-[98px]"
        >
          {props.children}
        </motion.main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export { Main };

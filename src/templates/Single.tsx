// import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import useTranslation from 'next-translate/useTranslation';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/SectionContainer';
import Header from '@/components/Header';
import { title } from 'process';

type ISingleProps = {
  meta: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

const SinglePage = (props: ISingleProps) => {
  // const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <SectionContainer>
      {props.meta}
      <div className="flex min-h-[700px] h-[100vh] flex-row justify-start bg-[#4F4F4F]">
        <div className="flex flex-col min-w-[400px] w-fit max-w-[40%] px-[50px]">
          <div className='w-[600px] pt-[88px]'>
            <button onClick={()=>{router.push("/");}} property={"button"}>
              <Image 
                  alt={'logo'}
                  src={`${router.basePath}/assets/images/logo_white.png`} 
                  width={186}
                  height={43}
              />
            </button>
          </div>
          <div className='flex flex-col w-full pt-[40px]'>
            <h1 className='font-bold text-[72px] text-white leading-tight'>
              {props.title}
            </h1>
            <div className='text-[24px] text-white pt-[40px]'>
              {props.description}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-tl-2xl rounded-bl-2xl w-full pt-[88px] flex flex-col items-center">
          {props.children}
        </div>
      </div>
    </SectionContainer>
  );
};

export { SinglePage };

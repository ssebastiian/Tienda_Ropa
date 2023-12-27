import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../ui/Navbar';
import {SideMenu} from '../ui/SideMenu';

interface Props {
    children: React.ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

const LayoutHome:FC<Props> = ({children, title,pageDescription,imageFullUrl}) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
        </Head>
        <nav>
            <Navbar/>
        </nav>
        <SideMenu/>
        <main style={{
            margin:'80px auto',
            maxWidth: '1440px',
            padding:'0px 30px',
        }}>
            {children}
        </main>
    </>
  )
}

export default LayoutHome

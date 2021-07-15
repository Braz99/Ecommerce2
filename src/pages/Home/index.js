import React from 'react';
import BlackFriday from '../../components/marinefriday_section';
import Header from '../../components/header';
import HomeMain from '../../components/home_main';

export default function Home(){
    return(
        <>
          <Header />
          <BlackFriday />
          <HomeMain />
        </>
    )
}
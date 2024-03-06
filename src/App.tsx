import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {LiveRating} from "./components/Rating/LiveRating";
import {OnOff} from "./components/OnOff/OnOff";
import styled from "styled-components";

export type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}


function App() {


    return (
        <div className="App">
            <Accordion title={'Меню завтрак'}/>
            <Accordion title={'Меню обед'}/>

            <div style={{height: '100px'}}></div>
            <AppTitle title={'This is App component from fragment'}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <LiveRating/>
            <LiveRating/>
            <LiveRating/>
            <LiveRating/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

export default App;

function AppTitle(props: { title: string }) {
    return <div>{props.title}</div>
}






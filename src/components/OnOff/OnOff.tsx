import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Button} from "./Button";


export const OnOff = () => {

    const [isOn, setIsOn] = useState(true)
    const changeStatus = (buttonId: number) => {
        if (buttonId === 2 && isOn) setIsOn(!isOn)
        if (buttonId === 1 && !isOn) setIsOn(!isOn)
    }


    const attributesActiveOn = {
        changeStatus: changeStatus,
        color: 'green'
    }

    const attributesActiveOff = {
        changeStatus: changeStatus,
        color: 'red'
    }

    const attributesInactiveButton = {
        changeStatus: changeStatus,
        color: 'grey'
    }

    const renderIsOn = () => {
        return (
            <StyledOnOff>
                <Button id={1} title={'On'} {...attributesActiveOn}/>
                <Button id={2} title={'Off'} {...attributesInactiveButton}/>
                <StyledIndicator color={'green'}></StyledIndicator>
            </StyledOnOff>
        )
    }

    const renderIsOff = () => {
        return (
            <StyledOnOff>
                <Button id={1} title={'On'} {...attributesInactiveButton}/>
                <Button id={2} title={'Off'} {...attributesActiveOff}/>
                <StyledIndicator color={'red'}></StyledIndicator>
            </StyledOnOff>
        )
    }

    return isOn ? renderIsOn() : renderIsOff()
};

const StyledOnOff = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const StyledIndicator = styled.div`
    background-color: ${props => props.color};
    ${props => props.color === 'green' && css`
        transform: translateX(0);
    `};
    ${props => props.color === 'red' && css`
        transform: translateX(30px);
    `};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: .3s;

`




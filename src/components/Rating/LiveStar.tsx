import React from 'react';
import styled from "styled-components";


export type LiveStarPropsType = {
    id: number
    selected: boolean
    liveRatingValueChanger: (buttonId: number) => void
}


export function LiveStar(props: LiveStarPropsType) {

    const onclickButtonHandler = () => {
        props.liveRatingValueChanger(props.id)
    }


    return (
        <StyledButton onClick={() => onclickButtonHandler()}>
            {props.selected ? <span>★</span> : <span>☆</span>}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width: 40px;
    height: 40px;

    & span {
        font-size: 20px;
    }
`

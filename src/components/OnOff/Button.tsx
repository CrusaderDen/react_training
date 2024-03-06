import React from 'react';
import styled from "styled-components";

type DzButtonPropsType = {
    id: number
    title: string
    changeStatus: (id: number) => void
    color: string
}

export const Button = ({id, title, changeStatus, color}: DzButtonPropsType) => {
    const onclickHandler = () => {
        changeStatus(id)
    }

    return (
        <div>
            <StyledButton onClick={onclickHandler} color={color}>{title}</StyledButton>
        </div>
    );
};

const StyledButton = styled.button`
    padding: 10px 40px;
    margin-right: 10px;
    background-color: ${props => props.color};
    transition: .3s;
`


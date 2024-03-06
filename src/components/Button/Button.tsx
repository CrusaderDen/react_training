import React from 'react';

type ButtonPropsType = {
    onclickHandler: () => void
}


export const Button = ({onclickHandler}: ButtonPropsType) => {
    return (
        <div>
            <button onClick={onclickHandler}>Свернуть-развенуть</button>
        </div>
    );
};
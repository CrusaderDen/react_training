import React, {Fragment} from 'react';

export type StarPropsType = {
    selected: boolean
}

export function Star(props: StarPropsType) {
    return (
        props.selected ? <span>★</span> : <span>☆</span>
    )
}
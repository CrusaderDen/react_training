import React, {useState} from "react";
import {LiveStar} from "./LiveStar";
import styled from "styled-components";


// export type LiveRatingPropsType = {
//     liveValue: number
// }

export function LiveRating(props: any) {

    const [liveRatingValue, setLiveRatingValue] = useState(0)

    const liveRatingValueChanger = (buttonId: number) => {
        setLiveRatingValue(buttonId)
    }


    const livestarParameter = [
        {id: 1, showValue: 0},
        {id: 2, showValue: 1},
        {id: 3, showValue: 2},
        {id: 4, showValue: 3},
        {id: 5, showValue: 4},
    ]

    const mappedLivestarParameter = livestarParameter.map(liveStar => {
        return <LiveStar
            id={liveStar.id}
            selected={liveRatingValue > liveStar.showValue}
            liveRatingValueChanger={liveRatingValueChanger}/>
    })

    return (
        <StyledLiveRating>
            {mappedLivestarParameter}
        </StyledLiveRating>
    )
}

const StyledLiveRating = styled.div`
    margin: 10px;
    display: flex;
    gap: 5px;
`

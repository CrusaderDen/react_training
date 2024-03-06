import React, {useState} from "react";
import {Button} from "../Button/Button";

type AccordionPropsType = {
    title: string
    // collapsed?: boolean
}

export function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    function openMenu() {
        setCollapsed(!collapsed)
    }


    return (
        <div>
            <AccordionTitle title={props.title}/>
            <Button onclickHandler={openMenu}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )


    // collaps
    //     ? <div>
    //         <AccordionTitle title={props.title}/>
    //         <Button onclickHandler={openMenu}/>
    //     </div>
    //
    //     : (
    //         <div>
    //             <AccordionTitle title={props.title}/>
    //             <Button onclickHandler={openMenu}/>
    //             <AccordionBody/>
    //         </div>
    //     )
}

function AccordionTitle(props: { title: string }) {
    return <h3>{props.title}</h3>
}


function AccordionBody() {
    const dishes = ['Блюдо 1', 'Блюдо 2', 'Блюдо 3']
    const dishesMap = dishes.map((dish, index) => <li key={index}>{dish}</li>)
    return (
        <ul>
            {dishesMap}
        </ul>
    )
}

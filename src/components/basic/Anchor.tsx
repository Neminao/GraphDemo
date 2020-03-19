import React from 'react';
import AnchorType from "../../types/AnchorType"

interface AnchorProps extends AnchorType{
    class: string;
    style?: any;
    onClick: any;
}

export default function Anchor(props: AnchorProps){
    return <a href={props.href} className={props.class} style={props.style} id={props.id} onClick={(event: any) => props.onClick(event.target.id)}>{props.displayText}</a>
}
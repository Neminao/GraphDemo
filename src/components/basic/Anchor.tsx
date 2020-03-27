import React from 'react';

interface AnchorProps {
    class: string;
    style?: any;
    onClick: any;
    id: string;
    displayText: string;
}

export default function Anchor(props: AnchorProps){
    return <button 
    className={props.class} 
    style={props.style} 
    id={props.id} 
    onClick={(event: any) => props.onClick(event.target.id)}>{props.displayText}</button>
}
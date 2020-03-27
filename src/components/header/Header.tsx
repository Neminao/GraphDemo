import React from 'react';
import Anchor from '../basic/Anchor';
import "./Header.css";
import AnchorType from '../../types/AnchorType';

export default function Header(props: {setSelected: any, selected: string}) {
    const anchors: AnchorType[] = [
        {
            id: "intro",
            href: "",
            displayText: "Uvod"
        },
        {
            id: "graphdemo",
            href: "",
            displayText: "Demo"
        }
    ]
    return <header className="header">
        <nav className="navigation">
            {
                anchors.map((anchor: AnchorType) => 
                    <Anchor 
                        key={anchor.id}
                        class={props.selected === anchor.id ? "selected anchor" : "anchor"} 
                        displayText={anchor.displayText}
                        onClick={props.setSelected}
                        id={anchor.id}
                    />
                )}
        </nav>
    </header>
}
import React, { useState } from 'react';
import Anchor from '../basic/Anchor';
import "./header.css";
import AnchorType from '../../types/AnchorType';

export default function Header(props: any) {
    const [selected, setSelected] = useState("");
    const anchors: AnchorType[] = [
        {
            id: "1",
            href: "#intro",
            displayText: "Uvod"
        },
        {
            id: "2",
            href: "#intro",
            displayText: "Uvod"
        },
        {
            id: "3",
            href: "#intro",
            displayText: "Uvod"
        },
        {
            id: "4",
            href: "#intro",
            displayText: "Uvod"
        }
    ]
    return <header className="header">
        <nav className="navigation">
            {
                anchors.map((anchor: AnchorType) => 
                    <Anchor 
                        key={anchor.id} 
                        href={anchor.href} 
                        class={selected === anchor.id ? "selected anchor" : "anchor"} 
                        displayText={anchor.displayText}
                        onClick={setSelected}
                        id={anchor.id}
                    />
                )}
        </nav>
    </header>
}
import React from 'react';

export default function Properties() {
    return <div className="flex-vertical-container">
        <h2>Properties</h2>
        <div>
            Sve komponente mogu da imaju svoje props (properties). Props su atributi prosledjeni nekoj komponenti. Props su Read-only
        </div>
        <div>
            Primer
            <div className="code">
                <span className="blue">function</span> <span className="yellow">Welcome</span>
                (props: {"{"} name: <span className="green">string</span>{"}"}) {"{"} <br />
                &emsp;<span className="violet">return</span> <span className="blue">{"<div>"}</span><br />
                &emsp;&emsp;Welcome, {"{"} props.name {"}"}!<br />
                    &emsp;<span className="blue">{"</div>"}</span><br />
                {"}"}
            </div>
            Rezultat
            <div className="result">
                <Welcome name="everyone"/>
            </div>
        </div>
    </div>
}


function Welcome(props: { name: string }) {
    return <div>
        Welcome, {props.name}!
     </div>
}
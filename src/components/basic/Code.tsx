import React from 'react';

export default function Code(props: {text: string}){
    let formatted = props.text.split('\n').map((item, i) => <p style={{ margin: 0 }} key={i}>{item}</p>);
    return <div className="code">
        {formatted}
    </div>
}
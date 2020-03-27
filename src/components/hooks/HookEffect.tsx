import React, { useEffect, useState } from "react";

export default function HookEffect(props: {}) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Broj klikova: ${count}`
    });

    let example = `
    import React, { useState, useEffect } from 'react'\n
    function Hooks(props) {\n
    const [count, setCount] = useState(0);\n
    useEffect(() => {\n
        document.title = "Broj klikova: " + count;\n
    });\n
        return <div>\n
        <p>Klik = {count}</p>\n
        <button onClick={() => setCount(count + 1)}>\n
            Klik\n
        </button>\n
    </div>\n
    }
    `
    let formatted = example.split('\n').map((item, i) => <p style={{ margin: 0 }} key={i}>{item}</p>);

    return (
        <div>
            <div>
                <p>Klik = {count}</p>
                <button onClick={() => setCount(count + 1)}>
                    Klik
                </button>
            </div>

            <div className="code">
                {formatted}
            </div>
        </div>
    );
}
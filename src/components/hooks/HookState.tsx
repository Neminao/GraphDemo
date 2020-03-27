import React, { useState } from 'react';

export default function (props: {}) {
    const [text, setText] = useState("");
    let example = `
    import React, { useState } from 'react'\n
    function Hooks(props) {\n
        const [text, setText] = useState("");\n
        return <div>\n
        {text}<br/>\n
        <input type="text" value={text} onChange={event => setText(event.target.value)} />\n
        </div>\n
    }
    `
    let formatted = example.split('\n').map((item, i) => <p style={{ margin: 0 }} key={i}>{item}</p>);
    return <div>
        <div>
            {text}<br />
            <input type="text" value={text} onChange={event => setText(event.target.value)} />
        </div>
        <div className="code">
            {formatted}
        </div>
    </div>
}
import React, { useState } from 'react';
import Code from '../basic/Code';

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
    return <div>
        <div>
            {text}<br />
            <input type="text" value={text} onChange={event => setText(event.target.value)} />
        </div>
        <Code text={example} />
    </div>
}
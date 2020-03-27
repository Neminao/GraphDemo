import React from 'react';
import ConditionalRendering from './ConditionalRendering';

export default function Conditional(props: {}) {
    let example = `
    export default function ConditionalRendering(props: {}){ \n
        const [condition, setCondition] = useState(false);\n
        return condition ? <div>\n
            Zahtev je poslat\n
        </div> :\n
        <div>\n
            <button onClick={()=> setCondition(!condition)}>Posalji zahtev</button>\n
        </div>\n
    }
    `
    let formatted = example.split('\n').map((item, i) => <p style={{ margin: 0 }} key={i}>{item}</p>);
    return <div>
        <div>
        <div>
            Conditional rendering je mogućnost da se na osnovu nekog uslova (iz state ili properties) prikažu razliciti elementi. Može se odnositi na čitave elemente, ali takođe se mogu menjati i parametri nekog elementa.
        </div>
        <div className="code">
            {formatted}
        </div>
        </div>
        <ConditionalRendering />
    </div>
}
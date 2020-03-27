import React, { useState } from 'react';

export default function ConditionalRendering(props: {}){
    const [condition, setCondition] = useState(false);
    return condition ? <div>
        Zahtev je poslat
    </div> :
    <div>
        <button onClick={()=> setCondition(!condition)}>Pošalji zahtev</button>
    </div>
}
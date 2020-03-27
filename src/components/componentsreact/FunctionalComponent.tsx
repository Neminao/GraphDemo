import React from 'react';

export default function FunctionalComponent(props: any) {
    return <div className="flex-vertical-container">
        <div>
            <h3>Function</h3>
            <div>
                Funkcionalne komponente su komponente koje bi najčešće trebalo upotrebljavati. Kao parametar uzimaju props, dok se state moze realizovati uz pomoć Hooks. Pre uvođenja Hooks ovaj tip komponente je bio stateless.
                Funkcije su bliže obicnom JavaScript-u zbog čega je ova vrsta komponente bolja za korišćenje.
            </div>
        </div>
        <div>
            Primer
            <div className="code">
                <span className="violet">import</span> <span className="green">React</span> <span className="violet">from</span> <span className="orange">'react'</span>;<br />
                <span className="violet">export default</span> <span className="blue">function</span> <span className="yellow">HelloWorld</span>() {"{"} <br />
                &emsp;<span className="violet">return</span> <span className="blue">{"<div>"}</span><br />
                &emsp;&emsp;Hello World!<br />
                    &emsp;<span className="blue">{"</div>"}</span><br />
                {"}"}
            </div>
        </div>
    </div>
}
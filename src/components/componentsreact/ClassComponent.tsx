import React from 'react';

class ClassComponent extends React.Component<{}, {}> {
    render() {
        return <div className="flex-vertical-container">
            <div>
                <h3>Class</h3>
                <div>
                    Class komponente za razliku od Function, imaju i svoj state. Takodje moraju sadzati metodu render koja ce kao povratnu vrenost imati element.
            </div>
            </div>
            <div>
                Primer
            <div className="code">
                    <span className="violet">import</span> <span className="green">React</span> <span className="violet">from</span> <span className="orange">'react'</span>;<br />
                    <span className="violet">export default</span> <span className="blue">class</span> <span className="yellow">HelloWorld</span>
                    <span className="blue"> extends</span> <span className="green">React.Component</span>{"{"} <br />
                    &emsp;<span className="blue">render</span>(){'{'} <br />
                    &emsp;&emsp;<span className="violet">return</span> <span className="blue">{"<div>"}</span><br />
                    &emsp;&emsp;&emsp;Hello World!<br />
                    &emsp;&emsp;<span className="blue">{"</div>"}</span><br />
                    &emsp;{"}"}<br />
                    {"}"}
                </div>
            </div>
        </div>
    }
}

export default ClassComponent
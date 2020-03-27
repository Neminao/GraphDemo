import React from 'react';

export default function State(){
    return <div className="flex-vertical-container">
        <h2>State</h2>
        <div>
            Komponente mogu da imaju svoj state. State su atributi koji pripadaju komponenti u kojoj su definisani, za razliku od props koje roditelj prosleđuje i koji su read-only. Sa uvođenjem Hooks i funkcionalne komponente mogu realizovati state.
            Kod class komponenti definiše se u constructoru, a u funkcionalnim korišćenjem useState() hook-a.
        </div>
        <div>
            Primer
            <div className="code">
                <span className="blue">class</span> <span className="yellow">Welcome</span> 
                <span className="blue"> extends</span> <span className="green">React.Component</span>
                {"< {}, { "} quote: <span className="green">string</span>, author: <span className="green">string</span> {"} >"}
                {"{"}<br />
                &emsp;<span className="blue">constructor</span> (props: <span className="green">any</span>) {"{"} <br/>
                &emsp;&emsp;<span className="blue">super</span> ( props );<br />
                &emsp;&emsp;<span className="blue">this</span>.state = {"{"} <br />
                &emsp;&emsp;&emsp;quote: <span className="orange">"Be yourself; everyone else is already taken."</span>, <br />
                &emsp;&emsp;&emsp;author: <span className="orange">"Oscar Wilde"</span> <br />
                &emsp;&emsp;{"}"}; <br />
                &emsp;{"}"} <br />
                &emsp;<span className="yellow">render</span> (){"{"}<br />
                &emsp;&emsp;<span className="violet">return</span> <span className="blue">{"<div>"}</span><br />
                &emsp;&emsp;&emsp;"{"{"} <span className="blue">this</span>.state.quote {"}"}"<br />
                &emsp;&emsp;&emsp;- {"{"} <span className="blue">this</span>.state.author {"}"}<br />
                &emsp;&emsp;<span className="blue">{"</div>"}</span><br />
                &emsp;{"}"}<br/>
                {"}"}
            </div>
            Rezultat
            <div className="result">
                <Welcome />
            </div>
        </div>
    </div>
}

class Welcome extends React.Component< {}, { quote: string, author: string } >{
     constructor (props: any) {
      super ( props );
      this.state = {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
      };
     }
     render (){
      return <div>
        "{ this.state.quote }" <br />
        - {this.state.author}
      </div>
     }
    }
import React from 'react'
import LifecycleComponent from './LifecycleComponent'

export default class LifecycleDemo extends React.Component<{}, { message: string; visible: boolean; }> {
    constructor(props: any) {
        super(props)
        this.state = {
            message: "",
            visible: false
        }
    }

    handleVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleMessage = (message: string) => {
        this.setState({
            message
        })
    }

    render() {
        return <div>
            <div className="flex-container">
                <div className="flex-vertical-container">
                    <div>
                        Class komponente mogu imati lifecycle metode. Ove metode se same pozivaju u određenim situacijama, nakon što se komponenta renderuje, nakon sto se promene props itd.
                        Neke od ovih metoda su izbačene iz upotrebe ili zamenjene novim, zbog određenih bagova koji su se javljali. 
                        Dve osnovne metode su i contructor i render. <br/>
                        Sa uvođenjem Hooks i funkcionalne komponente ih mogu realizovati uz pomoć useEffect().<br />
                        Najčešće korišćene su
                    </div>
                    <ul>
                        <li>componentDidMount() - poziva se nakon što se komponenta učita</li>
                        <li>componentWillUnmount() - poziva se pre nego što će komponenta biti uništena. Služi da se zaustave timer-i ili uklone event listeneri.</li>
                        <li>componentDidUpdate(prevProps, prevState) - poziva se nakon što se state ili props promene. Prilikom upotrebe trebalo bi dodati neki uslov kako bismo sprečili beskonačno pozivanje metode.</li>
                    </ul>
                    <div>
                        <button onClick={this.handleVisible}>Klik</button>
                    </div>
                    <div>
                        {this.state.message}
                    </div>
                </div>
                {this.state.visible ? <LifecycleComponent setMessage={this.handleMessage} setVisible={this.handleVisible} /> : <div className="flex-vertical-container"></div>}
            </div>
        </div>
    }
}
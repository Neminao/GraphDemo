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
                        Class komponente mogu imati lifecycle metode.
                        Najcesce koriscene su
                    </div>
                    <ul>
                        <li>componentDidMount() - poziva se nakon sto se komponenta ucita</li>
                        <li>componentWillUnmount() - poziva se pre nego sto ce komponenta biti unistena</li>
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
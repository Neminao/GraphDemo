import React from 'react';

export default class LifecycleComponent extends React.Component<{ setMessage: any, setVisible: any }, {}> {

    componentDidMount() {
        this.props.setMessage("Hello!");
    }

    componentWillUnmount() {
        this.props.setMessage("Goodbye!");
    }

    render() {
        return <div className="flex-vertical-container code">
            <div>
                <button onClick={this.props.setVisible}>X</button>
            </div>
            <div>
                componentDidMount(){"{"}<br />
                this.props.setMessage("Hello!");<br />
            }
            </div>
            <div>
                componentWillUnmount(){"{"}<br />
                this.props.setMessage("Goodbye!");<br />
                }
            </div>
        </div>
    }


}
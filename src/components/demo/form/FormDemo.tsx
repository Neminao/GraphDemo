import React from 'react';
import SingleInputForm from '../../basic/SingleInputForm';

export default class FormDemo extends React.Component<{}, { submitValues: string[] }> {
    constructor(props: {}){
        super(props);
        this.state = {
            submitValues: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value: string){
        this.setState(
            { submitValues: [...this.state.submitValues, this.stylize(value)] }
          )
    }

    stylize = (value: string) => {
        return value.toUpperCase();
    }

    render() {
        return <div>
            <div>
                
            </div>
            <ul>
            {this.state.submitValues.map(value => <li>{value}</li>)}
            </ul>
            <SingleInputForm buttonLabel="Add" handleSubmit={this.handleSubmit}/>
        </div>
    }
}
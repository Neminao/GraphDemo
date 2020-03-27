import React from 'react';
import SingleInputForm from '../basic/SingleInputForm';

export default class FormDemo extends React.Component<{}, { submitValues: string[] }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            submitValues: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value: string) {
        if (value)
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
                Forme u React-u se mogu ponašati kao obične HTML forme, ali one se često obrađuju uz pomoc metoda koje napišemo. <br />
                Ukoliko koristimo class komponente metode moramo da bind za "this" kome pripada u konstruktoru,
                 ali ukoliko se koriste arrow metode to nije potrebno jer vec u sebi sadrže "this".<br></br>
                 Primer:
            </div>

            <div className="code">
                {"constructor(props) {"} <br />
                {"super(props);"} <br />
                {"this.handleSubmit = this.handleSubmit.bind(this);"} <br />
                {"}"}<br /><br />
                {"handleSubmit(event) {"} <br />
                {"alert(event.target.value);"}<br />
                {"event.preventDefault(); //sprecava refresh stranice"}
                {"}"}<br />
                <br />
                {"setValue = (event) => {"} <br />
                {"this.setState({value: event.target.value});"}<br />
                {"}"}<br />
                <br />
                {"render() {"} <br />
                {"return <form onSubmit={this.handleSubmit}>"} <br />
                {'<input type="text" value={this.state.value} onChange={this.setValue}/>'}<br />
                {"<button>Dodaj</button>"}<br />
                {"</form>"}<br />
                {"}"}<br />
            </div>



            <ul>
                {this.state.submitValues.map(value => <li>{value}</li>)}
            </ul>
            <SingleInputForm buttonLabel="Add" handleSubmit={this.handleSubmit} />
        </div>
    }
}
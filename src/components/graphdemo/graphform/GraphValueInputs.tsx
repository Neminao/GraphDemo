import React from 'react'
import Input from '../../basic/Input'

export default class GraphValueInputs extends React.Component<{ labels: string[], handleSubmit: any }, { inputValues: any, valuesID: string }> {
    constructor(props: any) {
        super(props)
        this.state = {
            inputValues: {},
            valuesID: ""
        };
    }


    handleChange = (value: string, id: string) => {
        this.setState(prevState => {
            let inputValues = {...prevState.inputValues};
            inputValues[id] = +value;
            return {
                inputValues
            }
        })
    }

    handleValuesID = (valuesID: any) => {
        this.setState({
            valuesID
        })
    }

    handleSubmit = () => {
        const { valuesID, inputValues } = this.state;
        let inputArray = [];
        for (let v in inputValues) {
            if(inputValues[v])
            inputArray.push({
                value: inputValues[v],
                name: v
            });
        }
        let data = {
            label: valuesID,
            array: inputArray
        }
        this.clearValues()
        this.props.handleSubmit(data);

    }

    clearValues = () => {
        this.setState(prevState => {
            let inputValues = {...prevState.inputValues};
            for (let key in inputValues) {
                inputValues[key] = ""
            }
            return {
                inputValues,
                valuesID: ""
            }
        })
    }

    render() {
        const { inputValues, valuesID } = this.state;
        const { labels } = this.props
        return <tr className="graph-form-row">
            <td>
                <Input type="text" value={valuesID} onChange={this.handleValuesID} id="valuesID" class="graph-input" placeholder="naziv grupe kolona" />
            </td>
            {labels.map(label => <td key={label}>
                <Input
                    class="graph-input"
                    type='number'
                    value={inputValues[label] || 0}
                    onChange={this.handleChange}
                    id={label}
                    placeholder="vrednost za labelu" />
            </td>)}
            {labels[0] && valuesID ?
                <td >
                    <button onClick={this.handleSubmit} className="graph-button">
                        Dodaj grupu
                        </button>
                </td> :
                <td>
                </td>}
        </tr>
    }
}
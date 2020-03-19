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
            prevState.inputValues[id] = value;
            return {
                inputValues: prevState.inputValues
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
            for (let key in prevState.inputValues) {
                prevState.inputValues[key] = ""
            }
            return {
                inputValues: prevState.inputValues,
                valuesID: ""
            }
        })
    }

    render() {
        const { inputValues, valuesID } = this.state;
        const { labels } = this.props
        return <tr>
            <td>
                <Input type="text" value={valuesID} onChange={this.handleValuesID} id="valuesID" class="graph-input" placeholder="naziv kolone grafikona" />
            </td>
            {labels.map(label => <td>
                <Input
                    class="graph-input"
                    type='text'
                    value={inputValues[label]}
                    onChange={this.handleChange}
                    id={label}
                    placeholder="vrednost za labelu" />
            </td>)}
            {labels[0] && valuesID ?
                <td >
                    <button onClick={this.handleSubmit} className="graph-button">
                        Dodaj
                        </button>
                </td> :
                <td>
                </td>}
        </tr>
    }
}
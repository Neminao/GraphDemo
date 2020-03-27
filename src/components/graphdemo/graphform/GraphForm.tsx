import React from "react";
import SingleInputForm from "../../basic/SingleInputForm";
import GraphValueInputs from "./GraphValueInputs";

interface GFState {
    labels: string[],
    graphData: any
}

export default class GraphForm extends React.Component<{ setGraphData: any }, GFState> {
    constructor(props: any) {
        super(props)
        this.state = {
            labels: [],
            graphData: {}
        };
    }

    handleLabelSubmit = (label: string) => {
        if (!this.state.labels.includes(label) && this.state.labels.length < 10) {
            this.setState({ labels: [...this.state.labels, label] });
        }
    }

    deleteLabel = (event: any) => {
        let labels = [...this.state.labels];
        const id = +event.target.id;
        const label = labels.splice(id, 1);
        
        this.setState(prevState => {
            let graphData = {...prevState.graphData};
            for (let key in graphData) {
                if (graphData[key])
                   graphData[key].array = graphData[key].array.filter((data: number, index: number) => index != id)
            }
            return {
                labels,
                graphData
            }
        })
    }

    handleSubmit = (data: any) => {
        this.setState(prevState => {
            let graphData = {...prevState.graphData};
            if (!graphData[data.label])
                graphData[data.label] = data;
            return {
                graphData
            }
        });
    }

    deleteData = (key: any) => {
        this.setState(prevState => {
            let graphData = {...prevState.graphData};
            graphData[key] = null;
            return {
                graphData
            }
        });
    }

    setGraphData = () => {
        const { graphData } = this.state;
        let data = [];
        for (let key in graphData) {
            if (graphData[key])
                data.push(graphData[key])
        }
        this.props.setGraphData(data, this.state.labels)
    }

    render() {
        const { labels, graphData } = this.state;
        let display = [];
        for (let key in graphData) {
            if (graphData[key])
                display.push(<tr className="graph-form-row" key={graphData[key].label}>
                    <td>{graphData[key].label}</td>
                    {graphData[key].array.map((value: any, index: number) => <td key={index}>{value.value}</td>)}
                    <td><button className="graph-button" id={graphData[key].label} onClick={(e: any) => this.deleteData(e.target.id)}>Obriši grupu</button></td>
                </tr>)
        }
        return <div>
            <table className="graph-table">
                <tbody>

                    <tr className="graph-form-row">
                        <td>Naziv kolona</td>
                        {labels.map((label, index) => {
                            return <td key={label}>
                                <div className='graph-label' >
                                    <div >{label}</div>
                                    {<button id={index + ""} onClick={this.deleteLabel} >X</button>}
                                </div>
                            </td>
                        })}
                        {labels.length < 10 ? <td>
                            <SingleInputForm
                                handleSubmit={this.handleLabelSubmit}
                                buttonLabel="Dodaj"
                                hideButton={false}
                                buttonClass="graph-button"
                                placeholder="dodaj labelu"
                                inputClass="graph-input" />
                        </td> : <td></td>}
                    </tr>
                    {display}
                    <GraphValueInputs labels={labels} handleSubmit={this.handleSubmit} />
                </tbody>
            </table>
            <div className="graph-footer">
                <button onClick={this.setGraphData} className="graph-button">Prikaži grafikon</button>
            </div>
        </div>
    }
}
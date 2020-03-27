import React from "react";
import SingleInputForm from "../../basic/SingleInputForm";
import GraphValueInputs from "./GraphValueInputs";

interface GFState {
    labels: string[],
    graphData: any[]
}

export default class GraphForm extends React.Component<{ setGraphData: any }, GFState> {
    constructor(props: any) {
        super(props)
        this.state = {
            labels: [],
            graphData: []
        };
    }

    handleLabelSubmit = (label: string) => {
        if (!this.state.labels.includes(label) && this.state.labels.length<10) {
            this.setState({ labels: [...this.state.labels, label] });
        }
    }

    deleteLabel = (event: any) => {
        let labels = [...this.state.labels];
        labels.splice(+event.target.id, 1);
        this.setState({
            labels
        })
    }

    handleSubmit = (data: any) => {
        this.setState({ graphData: [...this.state.graphData, data] });
    }

    setGraphData = () => {
        this.props.setGraphData(this.state.graphData, this.state.labels)
    }

    render() {
        const { labels, graphData } = this.state;
        return <div>
            <table className="graph-table">
                <tbody>

                <tr className="graph-form-row">
                    <td>Naziv kolona</td>
                    {labels.map((label, index) => {
                        return <td key={label}>
                            <div className='graph-label' >
                                <div >{label}</div>
                                {/*<button id={index + ""} onClick={this.deleteLabel} >X</button>*/}
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
                {graphData.map(data => <tr className="graph-form-row" key={data.label}>
                    <td>{data.label}</td>
                    {data.array.map((value: any, index: number) => <td key={index}>{value.value}</td>)}
                    <td></td>
                </tr>)}
                <GraphValueInputs labels={labels} handleSubmit={this.handleSubmit} />
                </tbody>
            </table>
            <div className="graph-footer">
            <button onClick={this.setGraphData} className="graph-button">Prikaži grafikon</button>
            </div>
        </div>
    }
}
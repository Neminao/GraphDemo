import React from "react";
import SingleInputForm from "../../basic/SingleInputForm";
import GraphValueInputs from "./GraphValueInputs";

interface GFState {
    labels: string[],
    graphData: any[]
}

export default class GraphForm extends React.Component<{setGraphData: any}, GFState> {
    constructor(props: any) {
        super(props)
        this.state = {
            labels: [],
            graphData: []
        };
    }

    handleLabelSubmit = (label: string) => {
        if (!this.state.labels.includes(label)) {
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
        this.props.setGraphData(this.state.graphData)
    }

    render() {
        const { labels, graphData } = this.state;
        return <div>
            <div className="graph-form-labels">
                <div className="graph-label"></div>
                {labels.map((label, index) => {
                    return <div className="graph-label" >
                        <div >{label}</div>
                        <button id={index + ""} onClick={this.deleteLabel} className="graph-label-button">X</button>
                    </div>
                })}
                <SingleInputForm
                    handleSubmit={this.handleLabelSubmit}
                    buttonLabel=""
                    hideButton={true}
                    placeholder="dodaj labelu"
                    inputClass="graph-input" />
            </div>
            <div >
                { graphData.map(data => <div className="graph-form-labels">
                    <div className="graph-label" >{data.label}</div>{data.array.map((value: any) => <div className="graph-label" >{value.value}</div>)}
                </div>)}
            </div>
            <div>
                <GraphValueInputs labels={labels} handleSubmit={this.handleSubmit}/>
            </div>
            <div>
            <button onClick={this.setGraphData}>Prikazi grafikon</button>
            </div>

        </div>
    }
}
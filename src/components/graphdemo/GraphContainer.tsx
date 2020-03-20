import React from 'react';
import Canvas from './canvas/Canvas';
import './graph.css'
import GraphForm from './graphform/GraphForm';
import Input from '../basic/Input';

export default class GraphContainer extends React.Component<{}, { 
    graphData: any[], 
    colors: string[], 
    labels: string[],
    graphName: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            graphData: [],
            colors: [],
            labels: [],
            graphName: ""
        }
    }

    setGraphData = (graphData: any, labels: string[]) => {
        this.setState({graphData, labels})
    }

    handleChange = (graphName: any) => {
        this.setState({graphName})
    }

    render() {
        return <div className="graph-container">
            <h1>Generisanje grafikona</h1>
            <div>
                Naziv grafikona: 
                <Input 
                type="text"
                id="graphname"
                value={this.state.graphName}
                onChange={this.handleChange}
                class={"graph-input"}/>
            </div>
            <GraphForm setGraphData={this.setGraphData}/>
            <Canvas graphData={this.state.graphData} labels={this.state.labels} graphName={this.state.graphName}/>
        </div>
    }
}
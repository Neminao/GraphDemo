import React from 'react';
import Canvas from './canvas/Canvas';
import './graph.css'
import GraphForm from './graphform/GraphForm';

export default class GraphContainer extends React.Component<{}, { graphData: any[], colors: string[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            graphData: [],
            colors: []
        }
    }

    setGraphData = (graphData: any) => {
        this.setState({graphData})
    }

    render() {
        return <div className="graph-container">
            <GraphForm setGraphData={this.setGraphData}/>
            <Canvas graphData={this.state.graphData} />
        </div>
    }
}
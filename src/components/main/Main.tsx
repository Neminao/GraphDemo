import React, { Component } from 'react';
import Intro from '../intro/Intro';
import "./main.css";
import Components from '../componentsreact/Components';
import Properties from '../stateprops/Properties';
import State from '../stateprops/State';
import FormDemo from '../demo/form/FormDemo';
import Accordion from '../accordion/Accordion';
import LifecycleDemo from '../demo/lifecycle/LifecycleDemo';
import GraphContainer from '../graphdemo/GraphContainer';
import Header from '../header/Header';


class Main extends Component<{}, {selected: any, pages: any}> {
    constructor(props: any){
        super(props);
        this.state = {
            selected: "intro",
            pages: {}
        };
    }

    componentDidMount(){
        const pages = {
            intro: <div>
            <Intro />

            <Accordion title="Komponente">
                <Components />
            </Accordion>
            <Accordion title="Properties i State">
                <Properties />
                <State />
            </Accordion>
            <Accordion title="Forma">
                <FormDemo />
            </Accordion>
            <Accordion title="Lifecycle metode">
                <LifecycleDemo />
            </Accordion>
            </div>,
            graphdemo: <GraphContainer />
        }
        this.setState({
            pages
        })
    }

    setSelected = (selected: string) => {
        this.setState({
            selected
        })
    }
    render() {
        return <div className="main">
            <Header setSelected={this.setSelected} selected={this.state.selected}/>
            {this.state.pages[this.state.selected]}
        </div>
    }
}

export default Main
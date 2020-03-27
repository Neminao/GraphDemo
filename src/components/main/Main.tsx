import React, { Component } from 'react';
import Intro from '../intro/Intro';
import "./Main.css";
import Components from '../componentsreact/Components';
import Properties from '../stateprops/Properties';
import State from '../stateprops/State';
import FormDemo from '../form/FormDemo';
import Accordion from '../accordion/Accordion';
import LifecycleDemo from '../lifecycle/LifecycleDemo';
import GraphContainer from '../graphdemo/Graph';
import Header from '../header/Header';
import Hooks from '../hooks/Hooks';
import Conditional from '../conditionalrendering/Conditional'
import Standards from '../standards/Standards';


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
            <Accordion title="Forme">
                <FormDemo />
            </Accordion>
            <Accordion title="Lifecycle metode">
                <LifecycleDemo />
            </Accordion>
            <Accordion title="Hooks">
                <Hooks />
            </Accordion>
            <Accordion title="Conditional Rendering">
                <Conditional />
            </Accordion>
            <Accordion title="Standardi">
                <Standards />
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
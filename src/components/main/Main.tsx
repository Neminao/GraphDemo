import React, { Component } from 'react';
import Intro from '../intro/Intro';
import "./main.css"
import Components from '../componentsreact/Components';
import Properties from '../stateprops/Properties';
import State from '../stateprops/State';
import FormDemo from '../demo/form/FormDemo';
import Accordion from '../accordion/Accordion';
import LifecycleDemo from '../demo/lifecycle/LifecycleDemo';
import GraphContainer from '../graphdemo/GraphContainer';


class Main extends Component<{}, {}> {

    render() {
        return <div className="main">
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
            <GraphContainer />

        </div>
    }
}

export default Main
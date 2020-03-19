import React from "react";
import "./accordion.css"

export default class Accordion extends React.Component<{ children: any, title: string }, { visible: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false
        }
    }

    handleVisible = () => {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        const { title, children } = this.props;
        const { visible } = this.state;
        return <div className={visible ? "accordion-container accordion-border" : "accordion-container"}>
            <div onClick={this.handleVisible} className={visible ? "accordion-header accordion-active" : "accordion-header"}>
                <h2>{title}</h2>
                <button
                    className={visible ? "accordion-button accordion-active" : "accordion-button"}
                    onClick={this.handleVisible}>
                    {visible ? <span>&#8722;</span> : <span>&#43;</span>}
                </button>
            </div>
            {visible ? <div className="flex-container">{children}</div> : null}
        </div>
    }
}
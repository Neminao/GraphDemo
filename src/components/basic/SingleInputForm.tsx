import React, { useState } from 'react'
import Input from './Input'

interface FormProps {
    handleSubmit: any;
    buttonLabel: string;
    hideButton? : boolean;
    placeholder? : string;
    inputClass?: string;
    buttonClass?: string;
}
export default function SingleInputForm(props: FormProps){
    const [value, setValue] = useState("")
    function submit(event: any) {
        event.preventDefault();
        props.handleSubmit(value);
        setValue("")
    }
    return <form onSubmit={submit}>
        <div className="flex-container">
        <Input type="text" value={value} onChange={setValue} id="form" placeholder={props.placeholder} class={props.inputClass}/>
        {!props.hideButton && <button className={props.buttonClass}>{props.buttonLabel}</button>}
        </div>
    </form>
}
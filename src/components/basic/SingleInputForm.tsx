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
        <Input type="text" value={value} onChange={setValue} id="form" placeholder={props.placeholder} class={props.inputClass}/>
        {props.hideButton ? null : <button className={props.buttonClass}>{props.buttonLabel}</button>}
    </form>
}
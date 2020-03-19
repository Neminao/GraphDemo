import React from 'react';

interface InputProps {
    onChange: any;
    value: string;
    id: string;
    class?: string;
    type: string;
    placeholder?: string;
}

export default function Input(props: InputProps) {
    return <input
        type={props.type}
        className={props.class}
        value={props.value}
        id={props.id}
        onChange={(event: any) => props.onChange(event.target.value, props.id)}
        placeholder={props.placeholder} />
}
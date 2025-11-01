import { ReactEventHandler, useState } from "react"

type InputProps = {
    onBlur: (value: string) => void; 
};

export function Input({ onBlur }: InputProps) {
    const [value, setValue] = useState('');
    const handleOnBlur = () => {
        onBlur?.(value);
    }
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleOnBlur}
            placeholder="Enter task title..."
            className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
        />
    )
}
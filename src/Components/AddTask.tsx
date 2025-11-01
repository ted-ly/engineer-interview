import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

type AddTaskProps = {
    onSubmit?: (task: string) => void;
}

export function AddTask({ onSubmit }: AddTaskProps) {
    const [task, setTask] = useState('');
    const handleSubmit = () => {
        onSubmit?.(task);
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <Input onBlur={value => setTask(value)} />
            <Button type="submit" label={'+'} />
        </form>
    )
}
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

type AddTaskProps = {
    onSubmit?: (task: string) => void;
}

export function AddTask({ onSubmit }: AddTaskProps) {
    const [task, setTask] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim()) {
            onSubmit?.(task.trim());
            setTask('')
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <Input defaultValue={task} type='text' onBlur={value => setTask(value)} />
            <Button type="submit" label={'+'} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition" />
        </form>
    )
}
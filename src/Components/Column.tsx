import { useMemo } from "react";
import { Task } from "../types";
import { TaskCard } from "./TaskCard";
import { COLUMNS } from './Board';

type ColumnProps = {
    tasks: Task[];
    columnName: string;
    columnIndex: number;
    onMove: (taskId: number, columnDirection: number) => void;
};
export function Column({ columnName, tasks, columnIndex, onMove }: ColumnProps) {
    const tasksLayout = useMemo(() => {
        if (tasks?.length === 0) {
            return <div>No tasks</div>
        }

        return tasks.map(task => <TaskCard onMove={onMove} task={task} key={task.title} isFirstColumn={columnIndex === 0} isLastColumn={columnIndex === COLUMNS.length - 1} />)
    }, [tasks]);
    return (
        <div className="grid grid-cols-1 gap-6 mb-8 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 pb-2 border-b-2 border-slate-200">{columnName}</h2>
            {tasksLayout}
        </div>
    )
}
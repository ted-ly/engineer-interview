import { useMemo } from "react";

type ColumnProps = {
    tasks: string[];
    columnName: string;
};
export function Column({ columnName, tasks }: ColumnProps) {
    const tasksLayout = useMemo(() => {
        if (tasks?.length === 0) {
            return <div>No tasks</div>
        }
    }, [tasks]);
    return (
        <div className="grid grid-cols-1 gap-6 mb-8">
            <h2>{columnName}</h2>
            {tasksLayout}
        </div>
    )
}
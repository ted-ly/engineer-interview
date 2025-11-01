import { useState } from "react";
import { AddTask } from "./AddTask";
import { Column } from "./Column";
import { Task } from "../types";

export const COLUMNS = ['Todo', 'In Progress', 'Done'];

const INITIAL_TASKS = [
  { id: 1, title: 'Mow The lawn', column: 0 },
  { id: 2, title: 'Pull Weeds', column: 1 },
  { id: 3, title: 'Rake the leaves', column: 2 },
];

export function Board() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    const getTasks = (columnIndex: number): Task[] => {
        return tasks.filter(task => task.column === columnIndex);
    }
    
    const handleOnMove = (taskId: number, columnDirection: number) => {

    }

    return (
        <div className="p-8">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mb-8">
                {COLUMNS.map((columnName, columnIndex) => <Column onMove={handleOnMove} key={columnName} columnName={columnName} tasks={getTasks(columnIndex)} columnIndex={columnIndex} />)}
            </div>
            <div>
                <AddTask />
            </div>
        </div>
        
    )
}
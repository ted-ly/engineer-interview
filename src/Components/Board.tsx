import { AddTask } from "./AddTask";
import { Column } from "./Column";

const COLUNNS = ['Todo', 'In Progress', 'Done'];

export function Board() {
    return (
        <div className="p-8">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mb-8">
                {COLUNNS.map(columnName => <Column key={columnName} columnName={columnName} tasks={[]} />)}
            </div>
            <div>
                <AddTask />
            </div>
        </div>
        
    )
}
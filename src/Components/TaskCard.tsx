import { Task } from "../types"
import { Button } from "./Button";

type TaskCardProps = {
    task: Task;
    onMove: (id: number, num: number) => void;
    isFirstColumn: boolean;
    isLastColumn: boolean;
}
export function TaskCard({ task, onMove, isFirstColumn, isLastColumn }: TaskCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Button className={`p-1.5 rounded transition ${
              isFirstColumn
                ? 'bg-red-200 text-slate-400 cursor-not-allowed'
                : 'bg-red-300 text-slate-700 hover:bg-red-400'
            }`} type='button' label='<-' onClick={() => onMove(task.id, -1)} isDisabled={isFirstColumn} />
            <p>{task.title}</p>
            <Button className={`p-1.5 rounded transition ${
              isLastColumn
                ? 'bg-green-200 text-slate-400 cursor-not-allowed'
                : 'bg-green-300 text-slate-700 hover:bg-green-400'
            }`} type='button' label='->' onClick={() => onMove(task.id, +1)} isDisabled={isLastColumn}/>
        </div>
    )
}
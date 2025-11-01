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
            <Button type='button' label='<-' onClick={() => onMove(task.id, -1)} isDisabled={isFirstColumn} />
            <p>{task.title}</p>
            <Button type='button' label='->' onClick={() => onMove(task.id, +1)} isDisabled={isLastColumn}/>
        </div>
    )
}
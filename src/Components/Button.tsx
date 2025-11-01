import { ReactEventHandler, ReactNode } from "react";

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    onClick?: ReactEventHandler<HTMLButtonElement>;
    label: string | ReactNode;
    isDisabled?: boolean;
    className?: string;
}
export function Button({ type, onClick, label, isDisabled, className }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={isDisabled}
        >
            {label}
        </button>
    );
}
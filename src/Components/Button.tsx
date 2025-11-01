import { ReactEventHandler, ReactNode } from "react";

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    onClick?: ReactEventHandler<HTMLButtonElement>;
    label: string | ReactNode;
    isDisabled: boolean;
}
export function Button({ type, onClick, label, isDisabled }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            disabled={isDisabled}
        >
            {label}
        </button>
    );
}
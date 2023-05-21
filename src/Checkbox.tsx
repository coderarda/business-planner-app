import React, { useState } from 'react';
import "./Checkbox.css";

interface CheckboxProps {
    label: string,
}

export default function Checkbox(props: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-container">
            <label>
                <input type="checkbox" className={isChecked ? "checked": ""} checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
                <span>{props.label}</span>
            </label>
        </div>
    );
}
import "./Checkbox.css";

interface CheckboxProps {
    label: string,
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <div style={{ display:"inline-flex", flexDirection:"row" }}>
            <div className="checkbox-container">
                <div className="round">
                    <input type="checkbox" id="checkbox-18" />
                    <label htmlFor="checkbox-18"></label>
                </div>
            </div>
            {props.label}
        </div>
    );
}
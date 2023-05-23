import "./Checkbox.css";

interface CheckboxProps {
    label: string,
    description?: string,
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <div style={{ display:"inline-flex", flexDirection: "row", justifyContent: "center", }}>
            <div className="checkbox-container">
                <div className="round">
                    <input type="checkbox" id="checkbox-18" />
                    <label htmlFor="checkbox-18"></label>
                </div>
            </div>
            <span style={{ padding: 0, fontWeight:"bold", }}>{props.label}</span>
        </div>
    );
}
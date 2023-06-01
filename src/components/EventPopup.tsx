import React, { useState } from "react";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CalendarEvent } from "../../../business-planner-shared/src/CalendarEvent";
import "./EventPopup.css";
import Checkbox from "./Checkbox";

interface EventPopupProps {
    events: CalendarEvent[],
    open: boolean,
    onPopupClose: any,
}

export default function EventPopup(props: EventPopupProps) {
    return (
        <Popup contentStyle={{
            background: "#232323",
        }} open={props.open} onClose={props.onPopupClose}>
            <ul className="popup-list">
                {props.events.map((ev) => {
                    return (
                        <li className="popup-list-item">
                            <Checkbox label={ev.title} />
                        </li>
                    );
                })}
            </ul>
        </Popup>
    );
}
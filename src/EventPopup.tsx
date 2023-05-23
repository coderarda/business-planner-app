import React, { Ref } from "react";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CalendarEvent } from "../../business-planner-shared/src/CalendarEvent";
import { PopupActions } from "reactjs-popup/dist/types";
import "./EventPopup.css";

interface EventPopupProps {
    events: CalendarEvent[],
    open: boolean,
}

export default function EventPopup(props: EventPopupProps) {
    return (
        <Popup contentStyle={{
            background: "#232323",
        }} open={props.open}>
            <ul className="popup-list">
                {props.events.map((ev) => {
                    return (
                        <li className="popup-list-item">
                            <div className="round">
                                <input style={{
                                    height: "18px",
                                    width: "18px",
                                }} type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox"></label>
                            {ev.title}
                            </div>     
                        </li>
                    );
                })}
            </ul>
        </Popup>
    );
}
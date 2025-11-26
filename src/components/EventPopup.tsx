import React, { useState } from "react";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CalendarEvent } from "../../../business-planner-shared/src/CalendarEvent";
import "./EventPopup.css";
import { Checkbox, ListItem, UnorderedList } from "@chakra-ui/react";

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
            <UnorderedList className="popup-list">
                {props.events.map((ev) => {
                    return (
                        <ListItem className="popup-list-item">
                            <Checkbox>{ev.title}</Checkbox>
                        </ListItem>
                    );
                })}
            </UnorderedList>
        </Popup>
    );
}

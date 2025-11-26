import React, { useEffect, useState } from "react";
import { CalendarEvent } from "../../../business-planner-shared/src/CalendarEvent";
import axios from "axios";
import EventPopup from "./EventPopup";
import { DayProps } from "./CalendarUI";
import { UnorderedList, ListItem, Td, Text } from "@chakra-ui/react";

export default function CalendarDay(props: DayProps) {
    const [events, setEvents] = useState(new Array<CalendarEvent>());
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:3000");
            const data: CalendarEvent = res.data;
            if (new Date(data.date).getDate() == props.dayIndex && !events.includes(data))
                setEvents([...events, data]);
        })();
    }, []);

    return (
        <Td key={props.key} onClick={() => (events.length != 0) ? setIsOpen(true) : setIsOpen(false)}>
            <Text>{props.dayIndex.toString()}</Text>
            <EventPopup events={events} open={isOpen} onPopupClose={() => setIsOpen(!isOpen)} />
            <UnorderedList>
                {events.map((el) => <ListItem key={el.id}>{el.title}</ListItem>)}
            </UnorderedList>
        </Td>
    );
}

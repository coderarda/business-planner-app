import React, { useEffect, useState } from "react";
import { CalendarEvent } from "../../../business-planner-shared/src/CalendarEvent";
import axios from "axios";
import EventPopup from "./EventPopup";
import { DayProps } from "./CalendarUI";

export default function CalendarDay(props: DayProps) {
	const [events, setEvents] = useState(new Array<CalendarEvent>);
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
		<td key={props.key} onClick={() => (events.length != 0) ? setIsOpen(true) : setIsOpen(false)}>
			<span className="day-text">{props.dayIndex.toString()}</span>
			<EventPopup events={events} open={isOpen} onPopupClose={() => setIsOpen(!isOpen)}/>
            <ul className="event-list-small">
                {events.map((el) => <li className="event-text" key={el.id}>{el.title}</li>)}
            </ul>
		</td>
	);
}

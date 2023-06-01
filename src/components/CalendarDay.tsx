import React, { useEffect, useState } from "react";
import { CalendarEvent } from "../../../business-planner-shared/src/CalendarEvent";
import axios from "axios";
import EventPopup from "./EventPopup";
import { DayProps } from "../pages/Calendar";

export default function CalendarDay(props: DayProps) {
	const [events, setEvents] = useState(new Array<CalendarEvent>);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://localhost:3000");
			const data: CalendarEvent = res.data;
			if (new Date(data.date).getDate() == props.dayIndex && !events.includes(data))
				setEvents([...events, data]);
		};
		fetchData();
	}, []);
	return (
		<td key={props.key} onClick={() => setIsOpen(true)}>
			<span className="day-text">{props.dayIndex.toString()}</span>
			<EventPopup events={events} open={isOpen} onPopupClose={() => setIsOpen(!isOpen)}/>
			{events.map((el) => <span key={el.id}>{el.title}</span>)}
		</td>
	);
}

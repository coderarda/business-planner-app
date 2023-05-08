import React, { ReactElement, useEffect, useState } from "react";
import "./Calendar.css";
import { CalendarEvent } from "../../business-planner-shared/src/CalendarEvent";
import axios from "axios";

interface MonthUIElements {
	days: Array<ReactElement[]>,
	weeks: Array<ReactElement>
}

interface DayProps {
	dayIndex: number;
	key: number;
}


function Day(props: DayProps) {
	const [events, setEvents] = useState(new Array<CalendarEvent>);
	
	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://localhost:3000");
			const data: CalendarEvent = res.data;
			if(new Date(data.date).getDate() == props.dayIndex && !events.includes(data))
				setEvents([...events, data]);
		};
		fetchData();
	}, []);
	return (
		<td key={props.key}>
			<span className="day-text">{props.dayIndex.toString()}</span>
			{events.map((el) => <span key={el.id}>{el.title}</span>)}
		</td>
	);
}


function renderDays(): MonthUIElements {
	const weeks: ReactElement[] = [];
	const days: Array<ReactElement<DayProps>[]> = [];
	const date = new Date();
	const staticDate = new Date(date.getFullYear(), date.getUTCMonth(), 0);
	let a = 1;
	let tmp = staticDate.getDate();
	while (tmp > 0) {
		const arr = [];
		for (let j = a; j < a + 7; j++) {
			if (j <= staticDate.getDate()) {
				arr.push(
					Day({
						dayIndex: j,
						key: j,
					})
				);
			}
		}
		tmp -= 7;
		a += 7;
		days.push(arr);
	}
	for (let i = 0; i < days.length; i++) {
		const week = React.createElement(
			"tr",
			{ key: i },
			days[i]
		);
		weeks.push(week);
	}

	return {
		days: days,
		weeks: weeks,
	}
}

function CalendarUI() {
	const days = renderDays();
	return (
		<>
			{days.weeks.map((el) => {
				return el;
			})}
		</>
	)
}

export default function Calendar() {
	return (
		<table cellSpacing={0} cellPadding={0} className="calendar-table">
			<tbody>
				<CalendarUI />
			</tbody>
		</table>
	);
}


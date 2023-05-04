import React, { ReactElement, useState } from "react";
import "./Calendar.css";
import { CalendarEvent } from "../../business-planner-shared/src/CalendarEvent";
import Axios from "axios";

interface MonthUIElements {
	days: Array<ReactElement[]>,
	weeks: Array<ReactElement>
}

interface DayProps {
	dayIndex: number;
	events: Array<CalendarEvent>;
	key?: number;
}

function Day(props: DayProps) {
	const [events, setEvents] = useState(new Array<CalendarEvent>);
	Axios.get("localhost:5000").then((res) => console.log(res)).catch((err) => console.log(err));
	return (
		<td key={props.key}>
			<span className="day-text">{props.dayIndex.toString()}</span>
			{props.events.map((el) => <span key={el.id}>{el.title}</span>)}
		</td>
	);
}

function renderDays(): MonthUIElements {
	const weeks: ReactElement[] = [];
	const days: Array<ReactElement<DayProps>[]> = [];
	const date = new Date();
	const month = new MonthData(date, date.getMonth());
	let a = 1;
	let tmp = month.dayCount;
	for (let i = 0; i <= tmp + 1; i++) {
		const arr = [];
		for (let j = a; j < a + 7; j++) {
			if (j <= month.dayCount) {
				arr.push(
					Day({
						dayIndex: j,
						events: new Array<CalendarEvent>,
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

class MonthData {
	private _dayCount: number;
	private _monthNum: number;
	constructor(dateObj: Date, currMonth: number) {
		this._monthNum = currMonth;
		if (this._monthNum == 2) {
			if (
				dateObj.getFullYear() % 4 == 0 &&
				dateObj.getFullYear() % 400 == 0 &&
				dateObj.getFullYear() % 100 != 0
			) {
				this._dayCount = 29;
			} else this._dayCount = 28;
		} else if (this._monthNum % 2 == 0 && this._monthNum != 2) {
			this._dayCount = 30;
		} else this._dayCount = 31;
	}
	
	public get dayCount() : number {
		return this._dayCount;
	}
}

function CalendarUI() {
	const days = renderDays();
	return (
		<div>
			{days.weeks.map((el) => {
				return el;
			})}
		</div>
	)
}

export default function Calendar() {
	return (
		<div className="root-calendar">
			<table cellSpacing={0} cellPadding={0} className="calendar-table">
				<tbody>
					<CalendarUI />	
				</tbody>
			</table>
		</div>
	);
}


function addEvent(date: Date, index: number): CalendarEvent {
	return new CalendarEvent(date, "default", "desc", index);
}


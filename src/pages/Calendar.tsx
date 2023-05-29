import React, { ReactElement } from "react";
import "./Calendar.css";
import CalendarDay from "../components/CalendarDay";

interface MonthUIElements {
	days: Array<ReactElement[]>,
	weeks: Array<ReactElement>
}

export interface DayProps {
	dayIndex: number,
	key: number,
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
					CalendarDay({
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
	const dayData = renderDays();
	return (
		<>
			{dayData.weeks.map((el) => {
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


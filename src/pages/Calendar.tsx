import "./Calendar.css";
import { CalendarUI } from "../components/CalendarUI";


export default function Calendar() {
	return (
		<table cellSpacing={0} className="calendar-table">
			<tbody>
				<CalendarUI />
			</tbody>
		</table>
	);
}


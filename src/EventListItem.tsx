import { CalendarEvent } from "../../business-planner-shared/src/CalendarEvent";

export default function EventListItem(props: CalendarEvent) {
    const date = new Date(props.date);
    console.log(props);
    return (
        <li className="event-item">
            {"Title: " + props.title}
            <br></br>
            {"Date: " + props.date}
            <br></br>
            {"Description : " + props.description}
            <br></br>
            {"Time of plan: " + date.getHours() + ":" + date.getMinutes()}
        </li>
    );
}
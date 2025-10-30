import { useEffect, useState } from "react";
import "./Home.css";
import { Axios } from "axios";
import { CalendarEvent } from "../../../business-planner-shared/src/CalendarEvent";
import EventListItem from "../components/EventListItem";
import { Heading } from "@chakra-ui/react";


export default function Home() {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const ax = new Axios({
        baseURL: "http://localhost:3000/",
    });
    useEffect(() => {
        const fetchData = async () => {
            const resp = await ax.get("/");
            console.log(resp.data);
            setEvents([resp.data]);
        }
        fetchData();
    }, []);
    return (
        <>
            <div className="event-list">
                <Heading>Welcome!</Heading>
                <ul>
                    {events.map((it) => {
                        const newItem = JSON.parse(String(it));
                        console.log(events);
                        return <EventListItem {...newItem}></EventListItem>;
                    })}
                </ul>
            </div>
        </>
    );
}



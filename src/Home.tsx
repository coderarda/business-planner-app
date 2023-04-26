import React from "react";
import "./Home.css";
import { Axios } from "axios";

interface Plan {
    PlanID: number;
    PlanName: string;
    PlanDesc: string;
    PlanDate: Date;
    PlanTime: number;
}

const events: Plan[] = [
    {
        PlanID: 0,
        PlanDate: new Date(),
        PlanTime: 22.33,
        PlanDesc: "Default desc",
        PlanName: "Default Event",
    },
];

const ax = new Axios({
    baseURL: "http://localhost:5000",
});
ax.get("/").then((resp) => {
    const data = JSON.parse(resp.data) as Plan[];
    data.forEach((plan) => {
        console.log(plan);
        events.push(plan);
    });
});

export default function Home() {
    return (
        <div>
            <h1>Welcome!</h1>
            <div className="event-list">
                <h3>Tasks for today: </h3>
                <ul>
                    {events.map((it) => (
                        <EventListItem
                            key={it.PlanID}
                            PlanDate={it.PlanDate}
                            PlanDesc={it.PlanDesc}
                            PlanID={it.PlanID}
                            PlanName={it.PlanName}
                            PlanTime={it.PlanTime}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function EventListItem(props: Plan) {
    return (
        <li className="event-item">
            {"Title: " + props.PlanName}
            <br></br>
            {"Date: " + props.PlanDate.toLocaleDateString()}
            <br></br>
            {"Description : " + props.PlanDesc}
            <br></br>
            {"Time of plan: " + props.PlanTime}
        </li>
    );
}

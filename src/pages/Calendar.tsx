import "./Calendar.css";
import { CalendarUI } from "../components/CalendarUI";
import { Table, Tbody } from "@chakra-ui/react";


export default function Calendar() {
    return (
        <Table cellSpacing={0} className="calendar-table">
            <Tbody>
                <CalendarUI />
            </Tbody>
        </Table>
    );
}

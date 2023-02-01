import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`api/events`).then(function (response) {
      setEvents([...response.data]);
      console.log(response);
    });
  }, []);

  console.log("events", events);

  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>{event.title[0].value}</div>
      ))}
    </div>
  );
}

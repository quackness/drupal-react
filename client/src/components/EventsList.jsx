import axios from "axios";
import { useEffect, useState } from "react";

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
    .get(`api/events`)
    .then(function (response) {
      setEvents([...response.data]);
      console.log(response);
    })
  },[]);

  console.log("events", events)

  // const titles = [];
  // events.data.forEach((event) => {
  //   titles.push(<p>{event.title.value}</p>);

  // })

  return (
    <div>
      {events.map(event => (
        <div>{event.title[0].value}</div>
      ))}

    </div>
  );
}

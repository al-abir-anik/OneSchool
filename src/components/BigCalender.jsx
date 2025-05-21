"use client"

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/library/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "97%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 4, 19, 8, 0, 0)}
      max={new Date(2025, 4, 19, 17, 0, 0)}
    />
  );
};

export default BigCalendar;

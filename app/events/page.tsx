import React from "react";
import EventCard from "../components/EventCard";
import { eventsData } from "./EventsData";
import Background from "../components/Background";

export default function EventsPage() {
  return (
    
    
    <div className=" p-6 relative min-h-screen ">
      <Background/>
      
      <h1 className="text-white text-4xl font-bold text-center mb-10">Our Events</h1>
      <EventCard events={eventsData} />
    </div>

   
  );
}

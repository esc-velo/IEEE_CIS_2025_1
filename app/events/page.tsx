import React from "react";
import EventCard from "../components/EventCard";
import { eventsData } from "./EventsData";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

export default function EventsPage() {
  return (
    
    
    <div className=" p-6 relative min-h-screen ">
      <Background/>
      <Navbar/>
      <div className="flex flex-col gap-6 mt-30">
        <h2 className='mb-6 text-4xl font-bold leading-tight md:text-5xl'>
           Our Events
          </h2>
        <EventCard events={eventsData} />
      </div>
      
    </div>

   
  );
}

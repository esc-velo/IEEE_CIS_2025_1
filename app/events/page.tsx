import React from "react";
import EventCard from "../components/EventCard";
import { eventsData } from "./EventsData";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer4Col from "../components/Footer";

export default function EventsPage() {
  return (
    
    
    <div className=" relative min-h-screen ">
      <Background/>
      <Navbar/>
      <div className="flex p-10 flex-col items-center gap-6 mt-30 text-center">
  <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
    Our Events
  </h2>
  <EventCard events={eventsData} />
</div>
<Footer4Col/>
      
    </div>

   
  );
}


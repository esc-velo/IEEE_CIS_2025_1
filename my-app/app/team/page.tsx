import TeamGrid from "../components/Team";
import { ccdata } from "./CCdata";
import { ecdata } from "./ECdata";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

export default function TeamPage() {
  return (
    <div className=" relative min-h-screen  text-white">
      {/* Grid Overlay */}
      <Background />
      <Navbar/>
      <TeamGrid
        title="Executive Committee"
        subtitle="The people who get things done"
        teamMembers={ecdata}
      />
      <TeamGrid
        title="Core Committee"
        subtitle="The masterminds behind the operations"
        teamMembers={ccdata}
      />
    </div>
  );
}

import TeamGrid from "../components/Team";
import { ccdata } from "./CCdata";
import { ecdata } from "./ECdata";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer4Col from "../components/Footer";
import { webdevTeamData } from "./WebDevTeam";

export default function TeamPage() {
  return (
    <div className=" relative min-h-screen  text-white">
      {/* Grid Overlay */}
      <Background />
      <Navbar/>
      <div className="mt-30 text-center py-6">
      <h2 className=' text-4xl font-bold leading-tight md:text-5xl'>Meet our team </h2>
      </div>
      <div className="">
        

      <TeamGrid
        title="Executive Committee"
        subtitle="The people who get things done"
        teamMembers={ecdata}
      />
      <TeamGrid
        title="Website Development Team"
        subtitle="Bringing ideas to life through code"
        teamMembers={webdevTeamData}
      />
      <TeamGrid
        title="Core Committee"
        subtitle="The masterminds behind the operations"
        teamMembers={ccdata}
      />
      </div>
<Footer4Col/>
    </div>
  );
}

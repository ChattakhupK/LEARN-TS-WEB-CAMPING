import { LandmarkCardProps } from "@/utils/types";
import LandmarkCard from "../card/LandmarkCard";

const LandmarkList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {landmarks.map((Landmark) => {
        return <LandmarkCard key={Landmark.id} Landmark={Landmark} />;
      })}
    </section>
  );
};
export default LandmarkList;

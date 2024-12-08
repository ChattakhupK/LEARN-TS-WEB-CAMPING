import { fetchLandmarkDetail } from "@/actions/actions";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumbs";
import Description from "@/components/landmark/Description";
import ImageContainer from "@/components/landmark/ImageContainer";
import ShareButton from "@/components/landmark/ShareButton";
import MapLandmark from "@/components/map/MapLandmark";
import { redirect } from "next/navigation";

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const landmark = await fetchLandmarkDetail({ id });
  // console.log(landmark);

  if (!landmark) redirect("/");
  return (
    <section>
      <div>
        <Breadcrumbs name={landmark.name} />
        <header className="flex justify-between mt-6 items-center">
          <h1 className="text-4xl font-bold">{landmark.name}</h1>
          <div className="flex items-center gap-x-2">
            <ShareButton LandmarkId={landmark.id} name={landmark.name} />
            <FavoriteToggleButton landmarkId={landmark.id} />
          </div>
        </header>
        {/* Image */}
        <ImageContainer mainImage={landmark.image} name={landmark.name} />
        {/* Detail */}
        <section>
          <div className="mb-6">
            <h2 className="mt-4 font-semibold text-xl">{landmark.name}</h2>
            <Description description={landmark.description} />
            <MapLandmark Location={{ lat: landmark.lat, lng: landmark.lng }} />
          </div>
        </section>
      </div>
    </section>
  );
};
export default LandmarkDetail;

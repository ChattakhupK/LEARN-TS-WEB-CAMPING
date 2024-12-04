import { fetchFavorits } from "@/actions/actions";
import EmptyList from "@/components/home/EmptyList";
import LandmarkList from "@/components/home/LandmarkList";

const favoritePage = async () => {
  const favorites = await fetchFavorits();
  if (favorites.length === 0) {
    return <EmptyList heading="Empty favorites" />;
  }
  console.log(favorites);
  return <LandmarkList landmarks={favorites} />;
};
export default favoritePage;

import LoadingCard from "@/components/card/LoadingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
const page = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  const { search, category } = await searchParams;
  // console.log(search);
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer category={category} search={search} />
      </Suspense>
    </section>
  );
};
export default page;

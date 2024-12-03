import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <div>
        <SkeletonCardHero />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md mb-2" />
      <Skeleton className="h-4 rounded-md mb-2 " />
      <Skeleton className="h-4 rounded-md mb-2 " />
      <div className="flex justify-between">
        <Skeleton className="h-4 w-1/6 rounded-md " />
        <Skeleton className="h-4 w-1/2 rounded-md " />
      </div>
    </div>
  );
};

export const SkeletonCardHero = () => {
  return (
    <div>
      <Skeleton className="h-[600px] rounded-md mb-2" />
      <Skeleton className="h-14 mt-4 w-full rounded-md mb-2 " />
    </div>
  );
};

export default LoadingCard;

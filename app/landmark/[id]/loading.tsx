import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <Skeleton className="h-4 w-2/6 mb-6" />
      <Skeleton className="h-12 w-4/6 mb-6" />
      <Skeleton className="h-[300px] md:h-[500px]" />
      <Skeleton className="h-4 w-full mt-4 " />
      <Skeleton className="h-4 w-full mt-4 " />
      <Skeleton className="h-4 w-full mt-4 " />
    </>
  );
};
export default loading;

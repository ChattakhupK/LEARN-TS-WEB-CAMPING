import { categories } from "@/utils/categories";
import Link from "next/link";

const CategoriesList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div>
      <div className="flex justify-center my-4 font-semibold gap-x-4 ">
        {categories.map((item) => {
          const isActive = item.label === category;
          return (
            <Link
              key={item.label}
              href={`/?category=${item.label}${searchTerm}`}
            >
              <article
                className={`p-3 gap-2 flex flex-col justify-center items-center hover:text-primary hover:scale-105 duration-200 ${
                  isActive ? "text-primary" : ""
                } `}
              >
                <item.icon />
                <p className="uppercase">{item.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesList;

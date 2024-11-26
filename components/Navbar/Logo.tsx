import { Button } from "@/components/ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size={"sm"} asChild>
      <Link href={"/"} className="text-2xl">
        LOGO
      </Link>
    </Button>
  );
};
export default Logo;

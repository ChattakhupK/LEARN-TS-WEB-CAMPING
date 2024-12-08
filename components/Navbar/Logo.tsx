"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import imgLogoW from "@/public/tmgLogow.png";
import imgLogoB from "@/public/tmgLogob.png";
import Image from "next/image";
const Logo = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <Button variant={'ghost'} size={''} asChild>
      <Link href={"/"} className="text-2xl">
        {isDarkMode ? (
          <Image width={150} height={50} alt="" src={imgLogoW} />
        ) : (
          <Image width={150} height={50} alt="" src={imgLogoB} />
        )}
      </Link>
    </Button>
  );
};
export default Logo;

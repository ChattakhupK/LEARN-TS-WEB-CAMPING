"use client";
import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button"

const SignOutLinks = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "Logout Successfully!!" });
  };

  return (
    <SignOutButton redirectUrl="/">
      <Button variant="destructive" className="w-full text-center" onClick={() => handleLogout()}>
        Logout
      </Button>
    </SignOutButton>
  );
};
export default SignOutLinks;

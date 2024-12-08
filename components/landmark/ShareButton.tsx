"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  TwitterShareButton,
  XIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Share } from "lucide-react";
import { Button } from "../ui/button";

const ShareButton = ({
  LandmarkId,
  name,
}: {
  LandmarkId: string;
  name: string;
}) => {
  const url = process.env.NEXT_PUBLIC_SHARE_URL;
  const shareLink = url + "/landmark/" + LandmarkId;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          <Share />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="flex w-full gap-x-2 items-center"
        side="bottom"
        align="end"
      >
        <FacebookShareButton url={shareLink} name={name}>
          <FacebookIcon size={"38px"} />
        </FacebookShareButton>
        <TwitterShareButton url={shareLink} name={name}>
          <XIcon size={"38px"} />
        </TwitterShareButton>
        <LineShareButton url={shareLink} name={name}>
          <LineIcon size={"38px"} />
        </LineShareButton>
        <LinkedinShareButton url={shareLink} name={name}>
          <LinkedinIcon size={"38px"} />
        </LinkedinShareButton>
      </PopoverContent>
    </Popover>
  );
};
export default ShareButton;

import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface StoryCardPropsType {
  type: "even" | "odd";
  img: StaticImageData;
  content: string;
  title?: string;
  date?: string;
}

const StoryCard: FC<StoryCardPropsType> = ({
  type,
  img,
  content,
  title,
  date,
}) => {
  return (
    <div
      className={`w-full flex flex-col ${
        type === "odd" ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-start items-stretch gap-3`}
    >
      <Image
        alt="story image"
        src={img.src}
        width={img.width}
        height={img.height}
        className="w-full sm:w-[500px] lg:w-[calc((100%-12px)/2)]"
      />
      <div className="bg-blog-bg p-14 flex flex-col justify-around items-start w-full sm:w-[500px] lg:w-[calc((100%-12px)/2)] space-y-4 sm:space-x-0">
        <h3 className="text-primary border-b-[3px] border-b-story-title-border sm:text-2xl">
          {title}
        </h3>
        <p className="text-mobile-primary sm:text-primary">{content}</p>
        <p className="text-mobile-primary sm:text-primary font-semibold">
          {date}
        </p>
      </div>
    </div>
  );
};
export default StoryCard;

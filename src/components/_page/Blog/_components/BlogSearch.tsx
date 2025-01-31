import { Button } from "@/components/_basic";
import { BlogIptIcon } from "@/components/_basic/icon";
import { FC } from "react";

const BlogSearch: FC = () => {
  return (
    <div className="absolute -bottom-8 flex justify-between items-center rounded-full w-[90%] max-w-[1010px] bg-white shadow-search-ipt-box p-1 z-20">
      <div className="flex justify-start items-center pl-6 space-x-4 w-full">
        <BlogIptIcon />
        <input
          type="text"
          placeholder="Enter Your Title, Content, Category..."
          className="bg-transparent w-full"
        />
      </div>
      {/* search btn */}
      <Button
        text="Search"
        icon="search"
        className="rounded-full px-4 4m:px-10"
      />
    </div>
  );
};

export default BlogSearch;

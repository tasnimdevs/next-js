import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const topQuestions = [
  {
    _id: 1,
    title: "how do i use expresshohow do i use expressw do i use express",
  },
  { _id: 2, title: "how do i use expresshow do i use express" },
  {
    _id: 3,
    title: "how do i usehow do i use expresshow do i use express express",
  },
  {
    _id: 4,
    title: "how do i use how do i use expresshow do i use expressexpress",
  },
];

const poulerTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "react", totalQuestions: 3 },
  { _id: 3, name: "php", totalQuestions: 2 },
  { _id: 4, name: "nextJs", totalQuestions: 7 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px] custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Populer Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {poulerTags.map((tag) => (
            <RenderTag
            key={tag._id}
            _id={tag.id}
            name={tag.name}
            totalQuestions={tag.totalQuestions}
            showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

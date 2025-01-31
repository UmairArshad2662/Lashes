"use client";

import Image from "next/image";
import { logoLight } from "@/utils/images";
import Button from "@/components/_basic/Button";
import Link from "next/link";
import Container from "@/components/_container/Container";
import { ArrowDownIcon, BarsIcon } from "@/components/_basic/icon";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [dropdownCourseView, setDropDownCourseView] = useState<boolean>(false);
  const [menuDetailsView, setMenuDetailsView] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<
    "home" | "blog" | "faq" | "contact-us"
  >("home");

  // const dropdownRef = useRef<HTMLDivElement>(null);
  // const outSideClickHandler = (e: any) => {
  //   if (dropdownRef.current && !dropdownRef.current?.contains(e.target)) {
  //     setDropDownCourseView(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", outSideClickHandler);
  //   return () => document.removeEventListener("mousedown", outSideClickHandler);
  // }, []);

  const router = useRouter();

  return (
    <div className="bg-main-dark h-[110px] flex justify-center items-center w-full sticky top-0 left-0 z-50 px-8">
      <Container>
        <Link href={"/"}>
          <Image
            src={logoLight}
            width={logoLight.width}
            height={logoLight.height}
            alt="light logo"
            className="hover:cursor-pointer"
          />
        </Link>
        <div className="flex justify-start items-center space-x-4 max-[660px]:hidden">
          <Link
            href={"/"}
            className={`${
              currentTab === "home" ? "text-btn-primary" : "text-white"
            } hover:text-btn-primary`}
            onClick={() => setCurrentTab("home")}
          >
            Home
          </Link>
          <div
            className="relative py-2"
            onMouseEnter={() => setDropDownCourseView(true)}
            onMouseLeave={() => setDropDownCourseView(false)}
          >
            <div className="text-white flex justify-start items-center space-x-1 hover:cursor-pointer">
              <span className="hover:text-btn-primary">Our Course</span>{" "}
              <span
                className={`custom-transition ${
                  dropdownCourseView ? "rotate-180" : ""
                }`}
              >
                <ArrowDownIcon />
              </span>
            </div>
            {/* course dropdown menu */}
            {dropdownCourseView && (
              <ul
                onClick={() => setDropDownCourseView(false)}
                className="flex flex-col justify-start items-stretch rounded-lg absolute top-8 left-0 shadow-navbar-dropdown bg-main-light text-main-text text-[14px] w-[14rem] hover:cursor-pointer"
              >
                <Link
                  href={"/courses/ultimate"}
                  className="pt-4 pb-3 px-4 rounded-t-lg hover:bg-main-dark hover:text-main-light"
                >
                  <li>Ultimate Lash Course</li>
                </Link>
                <Link
                  href={"/courses/advanced"}
                  className="px-4 py-3 hover:bg-main-dark hover:text-main-light"
                >
                  <li>Advanced Lash Styling Course</li>
                </Link>
                <Link
                  href={"/courses/tint"}
                  className="pt-3 pb-4 px-4 rounded-b-lg hover:bg-main-dark hover:text-main-light"
                >
                  <li>Lashing Lift & Tint Course</li>
                </Link>
              </ul>
            )}
          </div>
          <Link
            href={"/blog"}
            className={`${
              currentTab === "blog" ? "text-btn-primary" : "text-white"
            } hover:text-btn-primary`}
            onClick={() => setCurrentTab("blog")}
          >
            Blog
          </Link>
          <Link
            href={"#faq"}
            className={`${
              currentTab === "faq" ? "text-btn-primary" : "text-white"
            } hover:text-btn-primary`}
            onClick={() => setCurrentTab("faq")}
          >
            FAQ
          </Link>
        </div>

        <Button
          text="Contact Us"
          className="max-[660px]:hidden"
          onClick={() => {
            router.push("/contact-us");
            setCurrentTab("contact-us");
          }}
        />

        {/* responsive navbar menu */}

        <span
          onClick={() => setMenuDetailsView(!menuDetailsView)}
          className="hidden max-[660px]:flex"
        >
          <BarsIcon />
        </span>
        {menuDetailsView && (
          <div className="justify-start items-start hidden fixed top-[110px] left-0 max-[660px]:flex flex-col border-t border-white bg-navbar-dark-100 w-full py-4 px-12 space-y-4">
            <Link href={"/"} className="text-white">
              Home
            </Link>
            <div className="w-full flex justify-center items-start flex-col">
              <div
                className="w-full text-white flex justify-between items-center space-x-1 hover:cursor-pointer"
                onClick={() => setDropDownCourseView(!dropdownCourseView)}
              >
                <span>Our Course</span>{" "}
                <span
                  className={`custom-transition ${
                    dropdownCourseView ? "rotate-180" : ""
                  }`}
                >
                  <ArrowDownIcon />
                </span>
              </div>
              {/* course dropdown menu */}
              {dropdownCourseView && (
                <ul className="flex flex-col justify-start items-stretch rounded-lg bg-navbar-dark-200 text-white text-mobile-primary w-full hover:cursor-pointer mt-2">
                  <Link
                    href={"/courses/ultimate"}
                    className="pt-4 pb-3 px-4 rounded-t-lg w-full"
                  >
                    <li>Ultimate Lash Course</li>
                  </Link>
                  <Link href={"/courses/advanced"} className="px-4 py-3 w-full">
                    <li>Advanced Lash Styling Course</li>
                  </Link>
                  <Link
                    href={"/courses/tint"}
                    className="pt-3 pb-4 px-4 rounded-b-lg w-full"
                  >
                    <li>Lashing Lift & Tint Course</li>
                  </Link>
                </ul>
              )}
            </div>
            <Link href={"/blog"} className="text-white">
              Blog
            </Link>
            <Link href={"#faq"} className="text-white">
              FAQ
            </Link>
            <Link href={"/contact-us"} className="text-white">
              Contact Us
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;

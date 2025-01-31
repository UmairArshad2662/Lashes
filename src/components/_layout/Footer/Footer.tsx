"use client";

import {
  ContactEmailIcon,
  ContactFacebookIcon,
  ContactInstagramIcon,
  ContactPhoneIcon,
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterTiktokIcon,
} from "@/components/_basic/icon";
import { Container } from "@/components/_container";
import TermsAndConditions from "@/components/_essential/terms-conditions";
import { TermsAndConditionsContext } from "@/contexts/terms-and-conditions";
import { footer_pattern, logoLight } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext, useState } from "react";

const Footer: FC = () => {
  const { modalVisible, setModalVisible } = useContext(
    TermsAndConditionsContext
  );

  return (
    <div className="relative w-full flex justify-center items-center bg-main-dark text-main-light pt-14 pb-2 px-8">
      {/* footer pattern */}
      <Image
        alt="footer pattern"
        src={footer_pattern.src}
        width={footer_pattern.width}
        height={footer_pattern.height}
        className="absolute right-0 bottom-0"
      />
      {/* main content */}
      <Container className="flex-col space-y-4">
        <div className="flex justify-between items-start w-full max-[500px]:flex-col max-[500px]:space-y-4">
          <div className="flex flex-col justify-start items-start space-y-6">
            <Image
              alt="footer logo"
              src={logoLight.src}
              width={logoLight.width}
              height={logoLight.height}
              className=""
            />
            <div className="flex justify-start items-center space-x-4">
              <FooterInstagramIcon />
              <FooterFacebookIcon />
              <FooterTiktokIcon />
            </div>
          </div>
          <div className="flex justify-between items-start w-[50%] max-[796px]:w-[60%] max-[686px]:flex-col max-[686px]:w-auto max-[686px]:space-y-4">
            <div className="flex flex-col justify-start items-start space-y-1">
              <span className="uppercase font-semibold">Contact Us</span>
              <div className="flex flex-col justify-start items-start">
                <div className="flex justify-start items-center space-x-2">
                  <ContactPhoneIcon />
                  <span className="text-[14px]">0473 378 953</span>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <ContactEmailIcon />
                  <Link
                    href={"mailto:info@modernlashtraining.com.au"}
                    className="text-[14px]"
                  >
                    info@modernlashtraining.com.au
                  </Link>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <ContactFacebookIcon />
                  <span className="text-[14px]">Modern Lash Training</span>
                </div>
                <div className="flex justify-start items-center space-x-2">
                  <ContactInstagramIcon />
                  <span className="text-[14px]">@modernlashtraining</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-1">
              <span className="uppercase font-semibold">SITEMAP</span>
              <div className="flex flex-col justify-start items-start">
                <Link href={"/"} className="text-[14px]">
                  Home
                </Link>
                <Link href={"/contact-us"} className="text-[14px]">
                  Contact Us
                </Link>
                <Link href={"/blog"} className="text-[14px]">
                  Blog
                </Link>
                <Link href={"#faq"} className="text-[14px]">
                  FAQ
                </Link>
                <span
                  className="text-[14px]"
                  onClick={() => setModalVisible(true)}
                >
                  Terms & Conditions
                </span>
                {modalVisible && <TermsAndConditions />}
              </div>
            </div>
          </div>
        </div>
        <p className="text-[14px] text-center">
          Copyright © 2024. Modern Lash Training. All Rights Reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;

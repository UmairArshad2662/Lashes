import { FC, MouseEventHandler, useContext } from "react";
import { H2 } from "../_basic";
import { CloseIcon } from "../_basic/icon";
import { TermsAndConditionsContext } from "@/contexts/terms-and-conditions";

const TermsAndConditions: FC = () => {
  const { setModalVisible } = useContext(TermsAndConditionsContext);
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-50">
      <div className="relative w-full max-w-terms-conditions space-y-8 rounded-2xl bg-review-bg z-50 py-6 px-8">
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setModalVisible(false)}
        >
          <CloseIcon />
        </span>
        <H2
          text="Modern Lash Training Terms & Conditions"
          className="w-full text-center"
        />
        <div className="flex flex-col justify-start items-center space-y-4 opacity-80">
          <p>
            All course fees must be paid in full via your chosen payment method
            before your course commencement date. deposits & course fees are
            strictly non refundable. If using a buy now/pay later option or our
            in house payment plan option additional fees may apply.{" "}
          </p>
          <p>
            You are permitted one course date transfer only in the event of
            sickness or an emergency. You may incur a $200 transfer fee.{" "}
          </p>
          <p>
            All course materials, including but not limited to videos, texts,
            images, and any other content provided as part of the eyelash
            extension course, are the intellectual property of Modern Lash
            Training. These materials are protected by copyright law and may not
            be reproduced, distributed, transmitted, displayed, or otherwise
            used without the express permission of Modern Lash Training.{" "}
          </p>
          <p>
            Free further in person training is offered only for students who
            need additional help learning the process of applying eyelash
            extensions. This is only required in extreme cases and your trainer
            will assess if you are a suitable candidate in need of further in
            person training. You will be required to practice on a minimum of 3
            people at home before coming back in for additional training.
          </p>
        </div>
        <p className="flex justify-start items-center space-x-2">
          <input type="checkbox" id="ipt-agree" name="ipt-agree" />
          <label>I agree, proceed</label>
        </p>
      </div>
      <div
        onClick={() => setModalVisible(false)}
        className="w-full h-full bg-black opacity-30 backdrop-blur absolute top-0 left-0"
      ></div>
    </div>
  );
};
export default TermsAndConditions;

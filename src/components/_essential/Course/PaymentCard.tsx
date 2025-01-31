import { PaymentCardPropsType } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";

const PaymentCard: FC<PaymentCardPropsType> = ({ icon, title }) => {
  return (
    <div className="flex flex-col justify-start items-center space-y-6 p-10 border border-review-border rounded-xl bg-review-bg w-full max-w-[420px]">
      <Image
        alt="payment cover image"
        src={icon.src}
        width={icon.width}
        height={icon.height}
        className="w-[66px] h-[66px] rounded-full"
      />
      <span className="text-primary 4m:text-xl font-semibold text-main-light text-center">
        {title}
      </span>
    </div>
  );
};

export default PaymentCard;

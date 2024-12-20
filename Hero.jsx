/**
 * This code was generated by Builder.io.
 */
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-start px-20 pt-44 pb-7 mt-7 w-full bg-violet-200 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[994px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-full text-4xl text-black w-[896px]">
          <h2 className="self-start mt-2.5">
            <span className="text-blue-600">Bridging the Gap</span>
            <span>: Empowering Conversations Between </span>
            <span className="text-red-500">Leaders</span>
            <span> and </span>
            <span className="text-blue-600">Citizens</span>
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/500e801495b95aa1be32f959b9cf6d37a45aeb3379fde93d9194605bd383a052?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
            className="object-contain w-full aspect-[1.12]"
            alt="Illustration of leaders and citizens"
          />
        </div>
        <p className="mt-20 ml-20 text-4xl text-red-500 max-md:mt-10 max-md:max-w-full">
          "A Platform for Progress: Direct Dialogue with Policymakers"
        </p>
      </div>
    </section>
  );
}

export default Hero;

/**
 * This code was generated by Builder.io.
 */
import React from "react";

const steps = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/695a478401a970325db258f4a58f6b7df9fd1508eda97cf7a29a127473d2c364?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
    title: "Sign Up/Log In",
    description:
      "Citizens can sign up to report issues, while politicians sign up to address them",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/31d5f3bbdb7c9c720642c215e1ff5680a1c5c46ee81f201444782719888bab66?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
    title: "Report an issue",
    description:
      "Citizens can easily report problems in their community by submitting details such as the issue category, location, and a brief description",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b1222acf288d38d6ccd6af96d733d29bad25dae8b88dc55d21e067d66d4c8409?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
    title: "Track Progress",
    description:
      'Citizens can monitor the progress of their reported issues in real-time. Politicians or their teams will update the status from "Received" to "In Progress" and "Resolved."',
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/13c75a26544694115ff6b183c97c088487d03dab5cbb13ecd191824dd9b512fc?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48",
    title: "Feedback & Collaboration",
    description:
      "Citizens can communicate directly with their representatives, provide suggestions, and collaborate to enhance their community.",
  },
];

function HowItWorks() {
  return (
    <section className="self-center mt-44 w-full max-w-[1232px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl text-black text-center mb-32 max-md:mb-10">
        How It Works!
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col text-black max-md:mt-10">
            <img
              loading="lazy"
              src={step.image}
              className="object-contain max-w-full aspect-[0.86] w-[164px]"
              alt={`Step ${index + 1}: ${step.title}`}
            />
            <div className="flex flex-col pl-5 mt-10">
              <h3 className="text-2xl">{step.title}</h3>
              <p className="mt-14 text-2xl max-md:mt-10">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
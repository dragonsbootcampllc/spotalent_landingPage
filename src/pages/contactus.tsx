import React from "react";

export default function ContactUs(props: any) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow border border-blue-800 lg:p-40 md:p-20 p-10 flex flex-col md:flex-row gap-12 justify-center items-center">
        <div className="md:w-1/2 space-y-8 border border-gray-600 rounded-ss-[375%] rounded-br-[185%] rounded-bl-[190%] rounded-tr-[250%]">
          <div className="w-full border flex flex-col p-10 gap-8 border-gray-500 rounded-ss-[145%] rounded-br-[125%] rounded-bl-[110%] rounded-tr-[210%]">
            <h1 className="text-4xl text-center w-full lg:text-6xl font-bold leading-none ">
              {props.mainHeader}
            </h1>
            <p className="text-base lg:text-lg text-center">
              {props.subHeader}
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
          <form className="space-y-6">
            {props.formInputs.map((input: any, index: number) => {
              if (input.type === "textarea") {
                return (
                  <textarea
                    key={index}
                    className={input.className}
                    id={input.id}
                    placeholder={input.label}
                  ></textarea>
                );
              } else if (input.type === "submit") {
                return (
                  <button key={index} className={input.className}>
                    {input.text}
                  </button>
                );
              } else {
                return (
                  <input
                    key={index}
                    className={input.className}
                    type={input.type}
                    id={input.id}
                    placeholder={input.label}
                  />
                );
              }
            })}
          </form>
        </div>
      </main>
    </div>
  );
}

ContactUs.defaultProps = {
  mainHeader: "Contact Us",
  subHeader:
    "It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!",
  formInputs: [
    {
      label: "Your Name",
      type: "text",
      id: "name",
      className: "w-full px-4 py-2 bg-black border border-gray-700 rounded",
    },
    {
      label: "Your Email",
      type: "email",
      id: "email",
      className: "w-full px-4 py-2 bg-black border border-gray-700 rounded",
    },
    {
      label: "Share your thoughts",
      type: "textarea",
      id: "message",
      className: "w-full px-4 py-2 bg-black border border-gray-700 rounded",
    },
    {
      label: "Share your feedback",
      type: "submit",
      className:
        "w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-blue-500 text-black font-bold rounded",
      text: "SHARE YOUR FEEDBACK",
    },
  ],
};

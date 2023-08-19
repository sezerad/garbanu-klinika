// Slide.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SlideProps {
  title: string;
  content?: string;
  image?: string;
  contents?: {
    serviceName: string;
    productName: string;
    price: string;
    image: string;
  }[];
  buttons?: { label: string; action: string }[];
}

const Slide: React.FC<SlideProps> = ({
  title,
  content,
  image,
  contents,
  buttons,
}) => (
  <div
    className="h-screen w-full flex flex-col items-center justify-center bg-cover bg-center p-4"
    style={{ backgroundImage: image ? `url(${image})` : undefined }}
  >
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        contents ? "" : "mt-96"
      }`}
    >
      <h1
        className={`text-4xl md:text-8xl font-extrabold ${
          contents ? "text-primary" : "text-secondary shadow-text"
        }`}
      >
        {title}
      </h1>

      {content && (
        <p className="text-2xl md:text-6xl text-secondary shadow-text text-center pt-5 ">
          {content}
        </p>
      )}
      {contents && (
        <div className="flex flex-wrap justify-center my-2 md:my-8 w-screen">
          {contents.slice(0, 5).map((contentItem, index) => (
            <div
              key={contentItem.serviceName}
              className="relative mx-2 my-2 w-2/5 h-24 md:w-1/6 md:h-60"
            >
              <div className="shadow-lg relative overflow-hidden rounded-lg h-full w-full">
                <Image
                  src={contentItem.image}
                  alt={`Product ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 font-semibold p-1 md:p-2">
                  {" "}
                  {/* Adjusted padding for mobile */}
                  <p className="text-xs md:text-base text-white">
                    {contentItem.serviceName}
                  </p>{" "}
                  {/* Adjusted font size for mobile */}
                  <p className="text-xs md:text-base text-white">
                    {contentItem.productName}
                  </p>{" "}
                  {/* Adjusted font size for mobile */}
                  <p className="text-xs md:text-base text-white">
                    {contentItem.price}
                  </p>{" "}
                  {/* Adjusted font size for mobile */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-4">
        {buttons &&
          buttons.map((button, index) => (
            <Link key={index} href={button.action}>
              <button className="border border-secondary bg-red-950 font-semibold bg-opacity-50 text-secondary shadow-text text-xl px-4 py-2 rounded mt-4 inline-block hover:bg-primary hover:text-secondary transition-colors duration-300">
                {button.label}
              </button>
            </Link>
          ))}
      </div>
    </div>
  </div>
);

export default Slide;

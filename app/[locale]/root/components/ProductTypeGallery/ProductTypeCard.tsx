// ProductTypeCards.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductType {
  id: string; // Unique identifier for each product type
  imageUrl: string; // URL of the product type image
  buttonText: string; // Text for the button
  url: string; // URL for the product type page
}

const ProductTypeCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link
      href={product.url}
      passHref
      className="flex flex-col relative rounded-lg shadow-md overflow-hidden h-40 md:h-80 w-[45%] md:w-[22%] cursor-pointer"
    >
      <Image
        src={product.imageUrl}
        alt={product.buttonText}
        fill
        className="object-cover"
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute bottom-4 left-0 w-full text-center">
        <span className="inline-block bg-secondary w-[85%] text-l text-primary font-semibold py-2 px-8 rounded-xl">
          {product.buttonText}
        </span>
      </div>
    </Link>
  );
};

export default ProductTypeCard;
// ProductTypeGallery.tsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import ProductTypeCard from "./ProductTypeCard"; // Updated import
import useProductTypes from "@/hooks/useProductTypes";
import ErrorComponent from "@/app/[locale]/components/ErrorComponent";
import LoadingComponent from "@/app/[locale]/components/LoadingComponent";

const ProductTypeGallery: React.FC = () => {
  const t = useTranslations("ProductTypesPanel");
  const { productTypes, loading, error } = useProductTypes();

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle text={t("productTypesTitle")} />
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-4 md:my-8">
        {productTypes.map((product) => (
          <ProductTypeCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTypeGallery;

"use client";
import React from "react";
import { useLocale } from "next-intl";
import { useFirestoreData } from "@hooks/useFirestoreData"; // Adjust the import path accordingly
import { FIRESTORE_COLLECTIONS } from "@lib/firebase/firebaseConfig"; // Adjust the import path accordingly
import LoadingComponent from "@components/common/LoadingComponent";
import ErrorComponent from "@components/common/ErrorComponent";

interface BannerData {
  id: string;
  text_en: string;
  text_lt: string;
}

const PromotionalBanner: React.FC = () => {
  const currentLocale = useLocale();
  const { data, loading, error } = useFirestoreData<BannerData>(
    FIRESTORE_COLLECTIONS.promotionalBanners
  );

  const getTextForLocale = (item: BannerData) => {
    return currentLocale === "en" ? item.text_en : item.text_lt;
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <div className="flex justify-center items-center bg-primary text-secondary py-2 px-4 md:px-8">
      {data?.map((item) => (
        <p key={item.id}>{getTextForLocale(item)}</p>
      ))}
    </div>
  );
};

export default PromotionalBanner;

// components/HeaderImage.tsx

import Image from "next/image";

const HeaderImage: React.FC = () => {
  return (
    <div>
      <Image
        src="/headers/banner-curly-hair-women.jpg"
        alt="Header Image"
        width={100} // Adjust these values based on your image dimensions
        height={40}
      />
    </div>
  );
};

export default HeaderImage;

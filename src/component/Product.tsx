import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Wind from "@/assets/wind.jpg";

export type Props = {
  imageSrc?: string;
  title?: string;
  description?: string;
  price?: number;
  oldPrice?: number;
  rating?: number;
  variant: "grid" | "list";
};

const Product: React.FC<Props> = ({
  imageSrc,
  title,
  description,
  price,
  oldPrice,
  rating,
  variant,
}) => {
  const isList = variant === "list";

  return (
    <article
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300
        ${isList ? "flex h-[180px]" : "flex flex-col h-[390px]"}`}
    >
      {/* Product Image */}
      <img
        className={`object-cover ${
          isList ? "w-[180px] h-full" : "w-full h-[210px]"
        }`}
        src={ Wind}
        alt={title || "Product"}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-5 h-5 text-yellow-500"
              />
            ))}
            <span className="text-sm font-semibold text-gray-700">
              {rating || 4.5}
            </span>
          </div>

          {/* Title + Description */}
          <h4 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            {title || "Product Title"}
          </h4>
          <p
            className={`text-gray-500 text-sm mb-3 ${
              isList ? "line-clamp-2" : "truncate"
            }`}
          >
            {description ||
              "Short product description goes here. Highlight key features."}
          </p>
        </div>

        {/* Price + Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-sky-600">{price || 0}</h3>
            <span className="text-gray-400 text-xs">
              <del>{oldPrice || 0}</del>
            </span>
          </div>

          <div className="flex items-center">
            <button className="bg-primary hover:bg-orange-300 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Add to Cart
            </button>
            <button
              className="ml-2 p-2 rounded-full hover:bg-red-100 transition-colors"
              title="Save Product"
            >
              <HeartIcon className="w-7 h-7 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;

import Image from "next/image";

type DishCardProps = {
  name: string;
  status: string;
  order: string;
  price: string;
  image: string;
};

export default function DishCard({ name, status, order, price, image }: DishCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-4">
      {/* Image Section */}
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="rounded-md object-cover"
      />

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-white">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-400">{order}</p>
        <p
          className={`text-xs sm:text-sm font-semibold ${
            status === "In Stock" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      </div>

      {/* Price */}
      <div className="text-sm sm:text-base font-bold text-white whitespace-nowrap">
        ${price}
      </div>
    </div>
  );
}

import Image from "next/image";

interface Dish {
  id: number;
  name: string;
  status: string;
  order: string;
  price: string;
  image?: string; 
}

interface PopularDishesProps {
  dishes: Dish[];
}

export default function PopularDishes({ dishes }: PopularDishesProps) {
  console.log("Dishes data passed to PopularDishes:", dishes); 
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Popular Dishes</h2>
        <a href="#" className="text-sm text-pink-500">
          See All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="flex items-center bg-gray-800 p-4 rounded-2xl shadow-md"
          >
            {dish.image && (
              <Image
                src={dish.image}
                alt={dish.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              
            )}
            <div className="ml-4 flex-1">
              <h3 className="text-white font-medium">{dish.name}</h3>
              <p
                className={`text-sm ${
                  dish.status === "In stock"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {dish.status}
              </p>
              <p className="text-sm text-gray-400">Order: {dish.order}</p>
            </div>
            <p className="text-white font-semibold">${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

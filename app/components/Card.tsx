type CardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
  };
  
  export default function Card({ title, value, icon }: CardProps) {
    return (
      <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md flex items-center justify-between">
        <div>
          <h3 className="text-sm sm:text-lg font-semibold">{title}</h3>
          <p className="text-lg sm:text-2xl font-bold">{value}</p>
        </div>
        <div>{icon}</div>
      </div>
    );
  }
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Card from "../components/Card";
import { DollarSign, BarChart, Table } from "lucide-react";
import PopularDishes from "../components/PopularDishes";

// Interface for the API response
interface DashboardData {
  dailySales: string;
  monthlyRevenue: string;
  tableOccupancy: number;
  popularDishes: Array<{
    id: number; // Add this
    name: string;
    status: string; // "In stock" or "Out of stock"
    order: string; // Add this
    price: string; // Ensure it's a string
    image?: string; // Add optional image
  }>;
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/dashboard");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err); // Log the error
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <Card 
          title="Daily Sales" 
          value={data?.dailySales || 'N/A'} 
          icon={<DollarSign className="w-6 h-6 text-pink-500" />} 
        />
        <Card 
          title="Monthly Revenue" 
          value={data?.monthlyRevenue || 'N/A'} 
          icon={<BarChart className="w-6 h-6 text-pink-500" />} 
        />
        <Card 
          title="Table Occupancy" 
          value={`${data?.tableOccupancy || 0} Tables`} 
          icon={<Table className="w-6 h-6 text-pink-500" />} 
        />
      </div>
      <PopularDishes dishes={data?.popularDishes || []} />
    </div>
  );
}

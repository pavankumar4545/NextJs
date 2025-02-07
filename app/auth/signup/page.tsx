"use client";
import { useState } from 'react';
import axios from 'axios';
import { Card } from '@/app/components/ui/Card';
import { CardContent } from '@/app/components/ui/Card';
import { Input } from '@/app/components/ui/Input';
import { Button } from '@/app/components/ui/Button'; 
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/auth/signup', formData);
      router.push('/auth/signin'); 
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message || 'Signup failed. User might already exist.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Signup</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input 
              name="username" 
              placeholder="Username" 
              onChange={handleChange} 
              required 
              className="mb-2 text-black" 
            />
            <Input 
              name="email" 
              type="email" 
              placeholder="Email" 
              onChange={handleChange} 
              required 
              className="mb-2 text-black" 
            />
            <Input 
              name="password" 
              type="password" 
              placeholder="Password" 
              onChange={handleChange} 
              required 
              className="mb-4 text-black" 
            />
            <Button type="submit" className="w-full">Signup</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

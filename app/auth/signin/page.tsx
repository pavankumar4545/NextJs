"use client";
import { useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/ui/Card';
import { CardContent } from '../../components/ui/CardContent';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'next/navigation';

export default function Signin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/signin', formData);
      router.push('/dashboard');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('Invalid credentials.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-96">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Signin</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="mb-2 text-cyan-400"
               
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="mb-4 text-cyan-400"
            />
            <Button type="submit" className="w-full">Signin</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import AuthFormContainer from '@/components/AuthFormContainer';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle the API call to the backend here.
    console.log("Password reset requested for email:", event.currentTarget.email.value);
    // Optionally, navigate the user or show a success message (e.g., using a toast).
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          title="Forgot Your Password?"
          description="No problem. Enter your email address and we'll send you a link to reset your password."
          footerContent={
            <p>
              Remembered your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Back to Login
              </Link>
            </p>
          }
        >
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
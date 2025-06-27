import React from 'react';
import { Link } from 'react-router-dom';

// Import Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to your Dashboard</CardTitle>
            <CardDescription>
              You have successfully logged in to SwiftLogin.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-center">
              This is your secure area. You can manage your account settings and
              access application features from here.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1529539795054-3c162a4afc9a?q=80&w=2070&auto=format&fit=crop" 
              alt="Secure Digital Interface"
              className="mt-4 rounded-lg object-cover w-full h-48"
            />
            <Link to="/" className="w-full mt-4">
              <Button className="w-full" variant="destructive">
                Log Out
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
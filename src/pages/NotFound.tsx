import React from 'react';
import { Link } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center bg-background text-center px-4">
        <TriangleAlert className="h-16 w-16 text-destructive mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Button asChild>
          <Link to="/">Go Back Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
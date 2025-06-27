import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footerContent: React.ReactNode;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ title, description, children, footerContent }) => {
  console.log('AuthFormContainer loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {description && (
            <CardDescription>{description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center text-sm">
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormContainer;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Chrome } from 'lucide-react';

const SocialLoginButtons: React.FC = () => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // In a real application, this would initiate the OAuth flow.
    console.log(`Attempting to log in with ${provider}...`);
    // Example: window.location.href = `/auth/${provider}`;
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={() => handleSocialLogin('google')}>
          <Chrome className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" onClick={() => handleSocialLogin('github')}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;
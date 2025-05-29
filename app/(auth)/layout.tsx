import React, { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}
const AuthLayout = ({ children }: AuthProps) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
};

export default AuthLayout;

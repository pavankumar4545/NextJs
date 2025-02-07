import React from "react";

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={`rounded-2xl shadow-lg p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};

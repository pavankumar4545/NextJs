import React from "react";

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

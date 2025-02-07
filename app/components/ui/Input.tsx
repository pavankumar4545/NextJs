import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

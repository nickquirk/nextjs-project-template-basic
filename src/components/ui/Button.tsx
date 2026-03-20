import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline' | 'dashed';
  size?: 'sm' | 'md' | 'icon';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  isLoading, 
  className = '', 
  disabled,
  ...props 
}) => {
  const base = "font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-blue-500",
    secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
    outline: "border border-gray-300 text-gray-600 hover:bg-gray-50",
    dashed: "w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-400 text-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all",
  };

  const sizes = {
    md: 'px-4 py-2 rounded-md',
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    icon: 'p-1.5 rounded',
  };

  const isDashed = variant === 'dashed';
  const sizeClasses = isDashed ? '' : sizes[size];

  return (
    <button 
      className={`${base} ${variants[variant]} ${sizeClasses} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

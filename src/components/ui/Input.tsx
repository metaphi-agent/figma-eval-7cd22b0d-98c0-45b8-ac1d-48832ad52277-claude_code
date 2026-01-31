import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-semibold text-secondary-500">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 bg-bg-primary rounded-lg
          text-secondary-500 placeholder:text-secondary-300
          border border-transparent
          focus:outline-none focus:border-primary-500
          transition-colors duration-150
          ${error ? 'border-error' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-sm text-error">{error}</span>
      )}
    </div>
  );
};

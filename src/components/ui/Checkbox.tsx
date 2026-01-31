import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  count?: number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  count,
  className = '',
  ...props
}) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className="w-5 h-5 border-2 border-secondary-300 rounded peer-checked:border-primary-500 peer-checked:bg-primary-500 transition-colors duration-150">
          <svg
            className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="absolute inset-0 w-5 h-5 border-2 border-primary-500 rounded opacity-0 peer-checked:opacity-100">
          <svg
            className="w-full h-full text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-xl font-semibold text-secondary-400 group-hover:text-secondary-500 transition-colors">
        {label}
      </span>
      {count !== undefined && (
        <span className="text-xl font-semibold text-secondary-300">({count})</span>
      )}
    </label>
  );
};

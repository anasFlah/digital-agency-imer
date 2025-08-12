import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'primary', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    warning: 'border-warning',
    error: 'border-error',
    info: 'border-info'
  };

  return (
    <div className="loading-spinner flex flex-col items-center justify-center gap-4">
      <div className={`spinner ${sizeClasses[size]} ${colorClasses[color]}`}></div>
      {text && <p className="text-sm text-secondary">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;

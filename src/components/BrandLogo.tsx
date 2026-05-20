import React from 'react';

interface BrandLogoProps {
  href?: string;
  ariaLabel?: string;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  href, 
  ariaLabel = 'PENSQuiz', 
  className = '' 
}) => {
  const wrapperClass = `inline-flex shrink-0 items-center focus:outline-none ${className}`;

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={wrapperClass}>
        <img src="/img_logo.png" alt={ariaLabel} className="block h-auto w-full object-contain" />
      </a>
    );
  }

  return (
    <span aria-label={ariaLabel} className={wrapperClass}>
      <img src="/img_logo.png" alt={ariaLabel} className="block h-auto w-full object-contain" />
    </span>
  );
};

export default BrandLogo;

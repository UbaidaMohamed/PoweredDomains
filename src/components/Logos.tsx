import React, { useState } from 'react';

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt?: string;
};

export const HomePageLogo: React.FC<ImgProps> = ({ alt = 'Homepage logo', className = '', ...rest }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    // fallback to text if image fails to load
    return <div className={`${className} text-3xl font-bold text-gray-900`}>{alt}</div>;
  }

  return (
    <img
      src="/homepage-logo.png"
      alt={alt}
      className={className}
      onError={() => setVisible(false)}
      {...rest}
    />
  );
};

export const TitleLogo: React.FC<ImgProps> = ({ alt = 'Title logo', className = '', ...rest }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <div className={`${className} text-sm font-semibold text-gray-900`}>PD</div>;
  }

  return (
    <img
      src="/title-logo.png"
      alt={alt}
      className={className}
      onError={() => setVisible(false)}
      {...rest}
    />
  );
};

export default HomePageLogo;

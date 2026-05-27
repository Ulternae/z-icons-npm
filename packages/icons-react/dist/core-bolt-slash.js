import React from 'react';

export const CoreBoltSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zm-257.1-76.1L256.3 544l-15.5-201.2c-.3-3.9-3.4-7.1-7.4-7.4L32.2 319.9l108.1-108.1 224 224zm35.3-266.7c.3 3.9 3.4 7.1 7.4 7.4L608.3 192 500.1 300.1l-224-224L384.3-32z"})
);

export default CoreBoltSlash;

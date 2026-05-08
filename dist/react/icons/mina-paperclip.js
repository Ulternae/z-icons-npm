import React from 'react';

export const MinaPaperclip = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m3.845 10.224 5.739-5.53c5.429-5.237 14.246 2.843 8.596 8.294l-7.112 6.862c-3.684 3.554-9.667-1.929-5.833-5.628l7.01-6.763c1.939-1.87 5.087 1.015 3.07 2.962L9.492 16"})
);

export default MinaPaperclip;

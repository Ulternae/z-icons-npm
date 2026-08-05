import React from 'react';

export function LanOilCan({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64H48c-26.5 0-48 21.5-48 48v62.7c0 20 12.4 37.9 31.1 44.9L96 340v28c0 26.5 21.5 48 48 48h259.1c18.4 0 35.8-7.9 48-21.7l182.4-206.6c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H272V96zm97.7 124.6c6.5 3.2 13.9 4.2 21 2.7l129.1-27.7-156.6 177.5c-6.1 6.9-14.8 10.8-24 10.8L144 384c-8.8 0-16-7.2-16-16V192h240.9c5 0 9.9 1.2 14.3 3.4zM96 305.8l-53.6-20.1c-6.2-2.3-10.4-8.3-10.4-15V208c0-8.8 7.2-16 16-16h48z"})
  );
}

export default LanOilCan;

import React from 'react';

export const LanEscalatorRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 40a56 56 0 1 1 112 0 56 56 0 1 1-112 0m134 201.5c14.2-11.3 31.8-17.5 50-17.5h96c44.2 0 80 35.8 80 80s-35.8 80-80 80h-67.9L226 494.5c-14.2 11.3-31.8 17.5-50 17.5H80c-44.2 0-80-35.8-80-80s35.8-80 80-80h67.9zm50 30.5c-7.3 0-14.3 2.5-20 7L171.3 394.7c-4.3 3.4-9.5 5.3-15 5.3H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c7.3 0 14.3-2.5 20-7l144.6-115.7c4.3-3.4 9.5-5.3 15-5.3H432c17.7 0 32-14.3 32-32s-14.3-32-32-32zM208 128c32.1 0 59.8 18.9 72.5 46.2-4.1 3.3-54.9 43.9-152.5 122V208c0-44.2 35.8-80 80-80"})
);

export default LanEscalatorRegular;

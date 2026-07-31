import React from 'react';

export const LanBrazilianRealSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M392 16c4.4 0 8 3.6 8 8v40h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-69.6c-45.5 0-82.4 36.9-82.4 82.4 0 40.7 29.7 75.3 69.9 81.5l54.7 8.4c48 7.4 83.5 48.7 83.5 97.3 0 54.4-44.1 98.4-98.4 98.4h-13.6v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h93.6c45.5 0 82.4-36.9 82.4-82.4 0-40.7-29.7-75.3-69.9-81.5l-54.6-8.4c-48-7.4-83.5-48.7-83.5-97.3 0-53.5 42.8-97.1 96-98.4V24c0-4.4 3.6-8 8-8zM0 40c0-4.4 3.6-8 8-8h112c75.1 0 136 60.9 136 136 0 63.6-43.7 117-102.6 131.9l46.4 170c1.2 4.3-1.4 8.7-5.6 9.8s-8.7-1.4-9.8-5.6l-46.8-171.2c-5.8.7-11.6 1.1-17.6 1.1H16v168c0 4.4-3.6 8-8 8s-8-3.6-8-8zm16 248h104c66.3 0 120-53.7 120-120S186.3 48 120 48H16z"})
);

export default LanBrazilianRealSignThin;

import React from 'react';

export const LanLariSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 0c8.8 0 16 7.2 16 16v50.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7V16c0-8.8 7.2-16 16-16s16 7.2 16 16v58.9c62.8 22.2 110.7 76.2 124.2 142.7 1.8 8.7-3.8 17.1-12.5 18.9s-17.1-3.8-18.9-12.5c-10.5-51.6-45.7-94.1-92.8-114.7V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V99.2c-10.3-2.1-21-3.2-32-3.2s-21.7 1.1-32 3.2V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V109.3C71.5 134 32 190.4 32 256c0 88.4 71.6 160 160 160h176c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h69.8C34.1 381.6 0 322.8 0 256c0-83.6 53.4-154.7 128-181.1V16c0-8.8 7.2-16 16-16"})
);

export default LanLariSign;

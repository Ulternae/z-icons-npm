import React from 'react';

export const LanLeaf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M485.8 3.2c4.5-3.3 10.4-4.1 15.7-1.9 6 2.5 9.9 8.3 9.9 14.8v194.1c0 127.4-100.8 231.3-226.5 237.7l-12.2.3c-89.3 0-163.7-66.6-175.1-153-40 32.3-65.5 81.6-65.5 137v32c0 8.8-7.2 16-16 16S0 472.8 0 464v-32c0-73.9 38.6-138.8 96.7-175.7C104.7 166.5 180.1 96 272 96c60.1 0 113-22.5 151.4-45.7 19.1-11.5 34.4-23.1 44.8-31.7 5.2-4.3 9.2-7.9 11.9-10.3 1.3-1.2 2.3-2.2 3-2.8l.8-.8 1.8-1.6zm-6.4 47.6c-10.5 8.1-23.8 17.6-39.4 27-38.7 23.3-92.7 47.1-155.3 50l-12.6.3-7.4.2C200 131.6 146.6 177.5 132 238.5c23.6-9.3 49.2-14.4 76.1-14.4h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-28.8 0-55.9 6.9-79.9 19.2 1.7 78 66 140.8 144.5 140.8l10.6-.2c108.9-5.5 196.2-95.6 196.2-205.7V50.9z"})
);

export default LanLeaf;

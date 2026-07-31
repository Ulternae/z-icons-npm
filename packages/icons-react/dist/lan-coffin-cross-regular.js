import React from 'react';

export const LanCoffinCrossRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M140.1 464h103.8l91.9-318.2L250.2 48H133.8l-85.6 97.8zM11.5 114.9l91-104c6-6.9 14.8-10.9 24-10.9h131c9.2 0 18 4 24.1 10.9l91 104c7.4 8.5 11.5 19.3 11.5 30.6q0 6.6-1.8 12.9l-95.6 330.5c-4 13.7-16.5 23.1-30.7 23.1H128.1c-14.3 0-26.8-9.4-30.7-23.1L1.8 158.3Q0 152 0 145.4c0-11.2 4.1-22.1 11.5-30.6zM216 120v40h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V208h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-40c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanCoffinCrossRegular;

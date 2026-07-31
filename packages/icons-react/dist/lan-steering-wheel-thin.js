import React from 'react';

export const LanSteeringWheelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 496c-16.4 0-32.5-1.7-48-4.8V464c0-88.4-71.6-160-160-160H20.8c-3.1-15.5-4.8-31.6-4.8-48 0-19.3 2.3-38 6.6-56h466.9c4.3 18 6.6 36.7 6.6 56 0 16.4-1.7 32.5-4.8 48H464c-88.4 0-160 71.6-160 160v27.2c-15.5 3.1-31.6 4.8-48 4.8m231.4-176C465 401.1 401.1 465 320 487.4V464c0-79.5 64.5-144 144-144zM27 184C57.6 86.6 148.5 16 256 16s198.4 70.6 229 168zm165 303.4C110.9 465 47 401.1 24.6 320H48c79.5 0 144 64.5 144 144zm64 24.6a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-32-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanSteeringWheelThin;

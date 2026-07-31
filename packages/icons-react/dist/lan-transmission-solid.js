import React from 'react';

export const LanTransmissionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 0c35.3 0 64 28.7 64 64 0 23.7-12.9 44.3-32 55.3V256c0 17.7-14.3 32-32 32H288v104.6c19.1 11.1 32 31.7 32 55.4 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-23.7 12.9-44.3 32-55.4V288H96v104.6c19.1 11.1 32 31.7 32 55.4 0 35.3-28.7 64-64 64S0 483.3 0 448c0-23.7 12.9-44.3 32-55.4V119.3C12.9 108.3 0 87.7 0 64 0 28.7 28.7 0 64 0s64 28.7 64 64c0 23.7-12.9 44.3-32 55.3V224h128V119.3c-19.1-11.1-32-31.7-32-55.3 0-35.3 28.7-64 64-64s64 28.7 64 64c0 23.7-12.9 44.3-32 55.3V224h128V119.3c-19.1-11.1-32-31.7-32-55.3 0-35.3 28.7-64 64-64"})
);

export default LanTransmissionSolid;

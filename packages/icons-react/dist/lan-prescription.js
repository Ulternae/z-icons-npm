import React from 'react';

export const LanPrescription = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M31.1 0C13.9 0 0 13.9 0 31.1V304c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h105.4l128 128-132.7 132.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L288 374.6l132.7 132.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L310.6 352l132.7-132.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L288 329.4 182.4 223.8C241.3 220.5 288 171.7 288 112 288 50.1 237.9 0 176 0zM144 192H32V32h144c44.2 0 80 35.8 80 80s-35.8 80-80 80z"})
);

export default LanPrescription;

import React from 'react';

export const LanMalaysianRinggitSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 432c0 8.8 7.2 16 16 16s16-7.2 16-16V132.8l98.7 148c3 4.5 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l98.7-148V432c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-7.1-4.6-13.3-11.4-15.3s-14 .6-17.9 6.4L432 243.2 317.3 71.1c-3.9-5.9-11.2-8.5-17.9-6.4S288 73 288 80zM0 80v352c0 8.8 7.2 16 16 16s16-7.2 16-16V304h97.9L177 437.3c2.9 8.3 12.1 12.7 20.4 9.8s12.7-12.1 9.8-20.4L162.7 301c53.4-12.2 93.3-59.9 93.3-117 0-66.3-53.7-120-120-120H16C7.2 64 0 71.2 0 80m32 192V96h104c48.6 0 88 39.4 88 88s-39.4 88-88 88z"})
);

export default LanMalaysianRinggitSign;

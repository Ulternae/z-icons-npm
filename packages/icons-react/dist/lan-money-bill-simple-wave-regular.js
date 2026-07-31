import React from 'react';

export const LanMoneyBillSimpleWaveRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 97.2c0-17.4 18.1-29 34.5-23.4 94 31.8 158.7 10.2 223.9-11.5 65.7-21.9 131.7-43.9 228.4-11.4 15.4 5.2 25.2 20 25.2 36.2v327.7c0 17.4-18.1 29-34.5 23.4-94-31.8-158.7-10.2-223.9 11.5-65.7 21.9-131.7 43.9-228.4 11.4C9.8 455.9 0 441.1 0 424.9zm237.6 307.3 2.2-.7c60-20 129.8-43.3 224.2-19.5V94c-76.3-23.5-127.7-7-189.6 13.6l-2.2.7c-60 20-129.8 43.3-224.2 19.5v290.3c76.3 23.5 127.7 7 189.6-13.6M256 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96"})
);

export default LanMoneyBillSimpleWaveRegular;

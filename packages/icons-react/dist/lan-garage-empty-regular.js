import React from 'react';

export const LanGarageEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M535.2 96.1c20.9 8.1 35.7 26.4 39.7 47.9.7 3.8 1.1 7.8 1.1 11.8V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V192H48v296c0 13.3-10.7 24-24 24S0 501.3 0 488V155.8c0-4 .4-7.9 1.1-11.8 4-21.5 18.8-39.8 39.7-47.9L270.6 6.8c11.2-4.4 23.6-4.4 34.8 0zM522.8 144c-1.4-1.3-3.1-2.4-5-3.1L288 51.5 58.2 140.9c-1.9.7-3.6 1.8-5 3.1h469.7z"})
);

export default LanGarageEmptyRegular;

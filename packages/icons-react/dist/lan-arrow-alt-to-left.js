import React from 'react';

export const LanArrowAltToLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 448c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16S0 71.2 0 80v352c0 8.8 7.2 16 16 16m119-209c-9.4 9.4-9.4 24.6 0 33.9L279 417c6.9 6.9 17.2 8.9 26.2 5.2S320 409.7 320 400v-80h144c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48H320v-80c0-9.7-5.8-18.5-14.8-22.2S285.9 88.2 279 95zm249-15h80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H304c-8.8 0-16 7.2-16 16v76.7L163.3 256 288 131.3V208c0 8.8 7.2 16 16 16z"})
);

export default LanArrowAltToLeft;

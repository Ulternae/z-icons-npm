import React from 'react';

export const LanBinRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h9.5l25.3 277.8c3 33 30.6 58.2 63.7 58.2h331.1c33.1 0 60.7-25.2 63.7-58.2L542.6 112h9.5c13.3 0 24-10.7 24-24s-10.7-24-24-24zm470.3 48-24.8 273.4c-.7 8.2-7.7 14.6-15.9 14.6H122.5c-8.3 0-15.2-6.3-15.9-14.6L81.7 112z"})
);

export default LanBinRegular;

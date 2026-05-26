import React from 'react';

export const LanLeftLongToLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24S0 437.3 0 424zm272 78.6L182.6 256l89.4 89.4V312c0-13.3 10.7-24 24-24h296v-64H296c-13.3 0-24-10.7-24-24zm-134.6 112c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v48h272c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-272v48c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"})
);

export default LanLeftLongToLineRegular;

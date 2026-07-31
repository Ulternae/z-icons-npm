import React from 'react';

export const LanLongArrowAltLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m54.6 256 89.4 89.4V312c0-13.3 10.7-24 24-24h360v-64H168c-13.3 0-24-10.7-24-24v-33.4zM9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v48h336c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-336v48c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"})
);

export default LanLongArrowAltLeftRegular;

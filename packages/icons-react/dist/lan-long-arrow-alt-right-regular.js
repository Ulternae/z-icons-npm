import React from 'react';

export const LanLongArrowAltRightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M521.4 256 432 166.6V200c0 13.3-10.7 24-24 24H48v64h360c13.3 0 24 10.7 24 24v33.4zm45.3-22.6c12.5 12.5 12.5 32.8 0 45.3l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S384 397 384 384v-48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h336v-48c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128z"})
);

export default LanLongArrowAltRightRegular;

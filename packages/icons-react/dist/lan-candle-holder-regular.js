import React from 'react';

export const LanCandleHolderRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 112c0-3.2 3.6-14.8 17.4-33.6 4.7-6.4 9.8-12.5 14.6-18.1 4.9 5.5 9.9 11.7 14.6 18.1C252.4 97.1 256 108.8 256 112c0 17.7-14.3 32-32 32s-32-14.3-32-32m32 80c44.2 0 80-35.8 80-80 0-39.6-49.1-90.1-66.2-106.6C234.1 1.8 229.1 0 224 0s-10.1 1.9-13.8 5.4C193.1 21.8 144 72.4 144 112c0 44.2 35.8 80 80 80m216 224c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v-24c0-13.3 10.7-24 24-24m-48 96h48c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72v24h-32V288c0-26.5-21.5-48-48-48H160c-26.5 0-48 21.5-48 48v176H88c-13.3 0-24 10.7-24 24s10.7 24 24 24zm-232-48V288h128v176z"})
);

export default LanCandleHolderRegular;

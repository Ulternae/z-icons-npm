import React from 'react';

export const LanCandleHolderSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M144 112c0-39.6 49.1-90.1 66.2-106.6C213.9 1.8 218.9 0 224 0s10.1 1.9 13.8 5.4C254.9 21.8 304 72.4 304 112c0 44.2-35.8 80-80 80s-80-35.8-80-80m-16 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v192h48v-24c0-39.8 32.2-72 72-72s72 32.2 72 72-32.2 72-72 72H88c-13.3 0-24-10.7-24-24s10.7-24 24-24h40zm288 168v24h24c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24"})
);

export default LanCandleHolderSolid;

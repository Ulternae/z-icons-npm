import React from 'react';

export const LanJugDetergentRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120 0c-13.3 0-24 10.7-24 24v24h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V24c0-13.3-10.7-24-24-24zm136 176c44.2 0 80 35.8 80 80v192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V256c0-44.2 35.8-80 80-80zm-128-48C57.3 128 0 185.3 0 256v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V256c0-70.7-57.3-128-128-128zm128 96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32"})
);

export default LanJugDetergentRegular;

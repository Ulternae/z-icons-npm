import React from 'react';

export const LanToiletPortable = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 32c-13.3 0-24 10.7-24 24v40h256V56c0-13.3-10.7-24-24-24zM32 448h256V336h-24c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h24v-80H32zm256-144v-64h-24c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm32 32v160c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V56C0 25.1 25.1 0 56 0h208c30.9 0 56 25.1 56 56z"})
);

export default LanToiletPortable;

import React from 'react';

export const LanWalkerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192.8 16H320c30.9 0 56 25.1 56 56v120H101.8l37-134.8c6.7-24.3 28.8-41.2 54-41.2M376 208v192.6c-27.1 3.9-48 27.2-48 55.4 0 30.9 25.1 56 56 56s56-25.1 56-56c0-28.2-20.9-51.6-48-55.4V72c0-39.8-32.2-72-72-72H192.8c-32.4 0-60.8 21.7-69.4 53L.3 501.9c-1.2 4.3 1.3 8.7 5.6 9.8s8.7-1.3 9.8-5.6L97.5 208zm8 288c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40"})
);

export default LanWalkerThin;

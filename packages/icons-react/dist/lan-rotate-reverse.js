import React from 'react';

export const LanRotateReverse = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 43.3 132.8 144H32zM0 152c0 13.3 10.7 24 24 24h128.1c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-53.5-53.4c88-71 217.2-65.7 298.9 16.1 39.9 39.9 61.6 91.2 65.1 143.5.6 8.8 8.2 15.5 17 14.9s15.5-8.2 14.9-17c-4-59.7-28.8-118.3-74.4-164-94.3-94.3-243.7-99.6-344.3-16.2L41 7C34.1.2 23.8-1.9 14.8 1.8S0 14.3 0 24zm32.6 118.9c-.6-8.8-8.2-15.5-17-14.9S.1 264.2.7 273.1c4 59.7 28.8 118.3 74.4 164 94.3 94.3 243.7 99.6 344.3 16.2l51.8 51.7c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V360c0-13.3-10.7-24-24-24H360.1c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l53.5 53.5c-88 71-217.2 65.7-298.9-16.1-39.9-39.9-61.6-91.2-65.1-143.4zM480.2 368v100.7L379.4 368z"})
);

export default LanRotateReverse;

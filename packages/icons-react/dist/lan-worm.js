import React from 'react';

export const LanWorm = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 192v-27.8c-17.7-2.5-37.2-5.3-58.6-8.4-30.7-4.4-53.4-30.6-53.4-61.6 0-34.4 27.9-62.3 62.3-62.3h40.1c31.8.1 57.6 25.9 57.6 57.7V356c0 68.5-55.5 124-124 124s-124-55.5-124-124v-36c0-44.2-35.8-80-80-80-39.8 0-72 32.2-72 72v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-66.3 53.7-120 120-120 70.7 0 128 57.3 128 128v36c0 42 34 76 76 76s76-34 76-76zM382.3 0C330.2 0 288 42.2 288 94.3c0 46.9 34.5 86.7 80.9 93.3L400 192v164c0 24.3-19.7 44-44 44s-44-19.7-44-44v-36c0-88.4-71.6-160-160-160C68.1 160 0 228.1 0 312v144c0 30.9 25.1 56 56 56s56-25.1 56-56V312c0-22.1 17.9-40 40-40 26.5 0 48 21.5 48 48v36c0 86.2 69.8 156 156 156s156-69.8 156-156V89.6C512 40.1 471.9 0 422.4 0zM408 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanWorm;

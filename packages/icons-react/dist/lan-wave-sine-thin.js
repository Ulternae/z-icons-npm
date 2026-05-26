import React from 'react';

export const LanWaveSineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M46.1 133.7C63.3 91.5 104.4 64 149.9 64c47.7 0 90.3 30.2 105.9 75.3l79.3 228.1c13.4 38.7 49.9 64.6 90.8 64.6 39.1 0 74.2-23.6 89-59.8L560.6 261c1.7-4.1 6.3-6 10.4-4.4s6 6.3 4.4 10.4l-45.5 111.3c-17.2 42.2-58.3 69.7-103.8 69.7-47.7 0-90.3-30.2-105.9-75.3l-79.4-228.1C227.4 105.9 190.9 80 150 80c-39.1 0-74.2 23.6-89 59.8L15.4 251c-1.7 4.1-6.3 6-10.4 4.4S-1 249.1.6 245z"})
);

export default LanWaveSineThin;

import React from 'react';

export const LanRedoAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 43.3V144H379.3zm8 132.7c13.3 0 24-10.7 24-24V24c0-9.7-5.8-18.5-14.8-22.2S477.9.2 471 7l-51.7 51.8C318.7-24.7 169.3-19.3 75 75 29.4 120.6 4.5 179.3.6 239c-4 58.8 12.3 119.3 50.3 170.2 84.6 113.3 245 136.5 358.3 51.9 31.5-23.5 56.1-53 73.3-85.7 4.1-7.8 1.1-17.5-6.7-21.6s-17.5-1.1-21.6 6.7c-15 28.6-36.5 54.3-64.1 74.9-99.1 74-239.5 53.7-313.5-45.5-33.3-44.6-47.5-97.5-44-149 3.4-52.1 25.1-103.3 65-143.3 81.8-81.7 211-87.1 298.9-16.1L343 135c-6.9 6.9-8.9 17.2-5.2 26.2S350.3 176 360 176z"})
);

export default LanRedoAlt;

import React from 'react';

export const LanLocationArrowSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-167-167L509.8 75.5c4.5-11.8 1.7-25.2-7.2-34.1s-22.3-11.8-34.1-7.2L194.2 139.6zm191.6 191.6L480 64 379.6 325.1zM52.5 194.1C39.9 199 31.7 211.2 32 224.7s9.1 25.4 21.9 29.6l176.8 58.9L289.6 490c4.3 12.8 16.1 21.6 29.6 21.9s25.7-7.9 30.6-20.5l23.1-60-24.8-24.8-28.2 73.3-50.7-152.2-53-53L64 224l73.3-28.2-24.8-24.8z"})
);

export default LanLocationArrowSlash;

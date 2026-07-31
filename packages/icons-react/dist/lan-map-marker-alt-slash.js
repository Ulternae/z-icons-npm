import React from 'react';

export const LanMapMarkerAltSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-153-153c34.2-55.6 61.7-118.1 61.7-175.2C480 84.4 394 0 288 0c-64 0-120.6 30.7-155.5 78zm128.1 128.1C184.1 59.4 232.6 32 288 32c88.9 0 160 70.6 160 156.6 0 46.2-21.9 99.9-53 151.9l-75.1-75.1c28.3-12.3 48.1-40.5 48.1-73.4 0-44.2-35.8-80-80-80-32.8 0-61.1 19.8-73.4 48.1zm138.7 138.7-53.8-53.8c3-23.6 23.2-41.9 47.6-41.9 26.5 0 48 21.5 48 48 0 24.4-18.2 44.6-41.9 47.6zM96 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.5 12.8 43.3 0 15.9-17.2 38.7-43.3 62.6-74.7l-22.8-22.8c-23 30.6-45.4 56.3-61.4 73.8-24.6-26.9-64.6-73.7-98.6-127.4-35.5-56.2-61.4-115.3-61.4-165.6v-2l-29.4-29.5C97 167.4 96 177.9 96 188.6"})
);

export default LanMapMarkerAltSlash;

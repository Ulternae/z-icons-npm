import React from 'react';

export const LanPenSwirlRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M441.3 59.1 453.2 71c9.4 9.4 9.4 24.6 0 33.9L432.1 126l-45.7-45.7 20.8-21.1c9.4-9.5 24.6-9.5 34.1-.1M232 236.8l120.7-122.3 45.5 45.5-121.5 121.6c-3.3 3.3-7.5 5.6-12 6.5l-49.5 10.4 10.4-49.7c.9-4.5 3.2-8.7 6.4-11.9zM373.1 25.5 197.8 203.1c-9.7 9.8-16.4 22.3-19.2 35.8l-18 85.7c-1.7 7.9.8 16.2 6.5 21.9s14 8.2 21.9 6.5l85.5-17.9c13.7-2.9 26.2-9.7 36.1-19.6l176.6-176.6c28.1-28.1 28.1-73.7 0-101.8l-11.9-11.9c-28.3-28.3-74.1-28.1-102.2.3M307 13.2C290.6 9.8 273.5 8 256.1 8 119.2 8 8.1 119 8.1 256s111 248 248 248c13.3 0 24-10.7 24-24s-10.7-24-24-24c-110.5 0-200-89.5-200-200s89.5-200 200-200c2.9 0 5.7.1 8.5.2l42.3-43zm149 236.1c.1 2.2.1 4.4.1 6.7 0 57.4-46.6 104-104 104-13.3 0-24 10.7-24 24s10.7 24 24 24c83.9 0 152-68.1 152-152 0-17.1-1.7-33.7-5-49.8z"})
);

export default LanPenSwirlRegular;

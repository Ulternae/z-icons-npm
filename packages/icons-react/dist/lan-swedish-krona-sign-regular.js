import React from 'react';

export const LanSwedishKronaSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 40c0-13.3-10.7-24-24-24S48 26.7 48 40v416c0 13.3 10.7 24 24 24s24-10.7 24-24v-93.1l44.4-38.6 104 145.7c7.7 10.8 22.7 13.3 33.5 5.6s13.3-22.7 5.6-33.5L176.8 292.7l94.9-82.5c10-8.7 11.1-23.9 2.4-33.9s-23.9-11.1-33.9-2.4L96 299.3zm352 168h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16c-26.3 0-51.5 8.6-72 24 0-13.3-10.7-24-24-24s-24 10.7-24 24v272c0 13.3 10.7 24 24 24s24-10.7 24-24V280c0-15.6 5.1-30.7 14.4-43.2C404 218.7 425.3 208 448 208"})
);

export default LanSwedishKronaSignRegular;

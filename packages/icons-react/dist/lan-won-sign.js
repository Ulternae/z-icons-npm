import React from 'react';

export const LanWonSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M47.3 43.3c-2.6-8.4-11.6-13.2-20-10.6s-13.2 11.6-10.6 20L79.3 256H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h57.1l55.6 180.7c2.1 6.9 8.6 11.5 15.9 11.3s13.4-5.3 15-12.4L217 288h78l41.4 179.6c1.6 7 7.8 12.1 15 12.4s13.7-4.4 15.9-11.3L422.9 288H480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-47.3l62.6-203.3c2.6-8.4-2.1-17.4-10.6-20s-17.4 2.1-20 10.6L399.3 256h-78.8L271.7 44.4C269.9 37.1 263.5 32 256 32s-13.9 5.1-15.6 12.4L191.6 256h-78.9zM122.6 288h61.6l-26.4 114.4zm101.8-32L256 119.2 287.6 256zm103.4 32h61.6l-35.2 114.4z"})
);

export default LanWonSign;

import React from 'react';

export const LanRoadSpikesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 352H64V116.8c0-15.8 20.5-22 29.3-8.9 3.3 5 8.5 12.7 15.5 23.2l3.2 4.8 80 120V116.7c0-15.8 20.5-22 29.3-8.9 3.3 5 8.5 12.7 15.5 23.2l3.2 4.8 80 120V116.6c0-15.8 20.5-22 29.3-8.9 3.3 5 8.5 12.7 15.5 23.2l3.2 4.8 80 120V116.5c0-15.8 20.5-22 29.3-8.9 3.3 5 8.5 12.7 15.5 23.2l3.2 5.2 110.8 166.2c14.2 21.3-1.1 49.8-26.6 49.8zm-25.7-48L112 222.5V304zM0 424c0-13.3 10.7-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m240-201.5V304h54.3zM422.3 304 368 222.5V304zm73.7-81.5V304h54.3z"})
);

export default LanRoadSpikesRegular;

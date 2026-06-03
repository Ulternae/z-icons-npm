import React from 'react';

export const LanFileTexSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 580 548',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 380c11 0 20 9 20 20s-9 20-20 20h-12v108c0 11-9 20-20 20s-20-9-20-20V420h-12c-11 0-20-9-20-20s9-20 20-20zm128 0c11 0 20 9 20 20s-9 20-20 20h-44v24h28c11 0 20 9 20 20s-9 20-20 20h-28v24h44c11 0 20 9 20 20s-9 20-20 20h-64c-11 0-20-9-20-20V400l.4-4c1.9-9.1 9.9-16 19.6-16zm128 0c11 0 20 9 20 20 0 14.4-4.2 28.4-12.2 40.4L552 464l15.8 23.6c8 12 12.2 26 12.2 40.4 0 11-9 20-20 20s-20-9-20-20c0-6.5-1.9-12.8-5.5-18.2l-6.5-9.7-6.5 9.7c-3.6 5.4-5.5 11.7-5.5 18.2 0 11-9 20-20 20s-20-9-20-20c0-14.4 4.2-28.4 12.2-40.4l15.7-23.6-15.7-23.6c-8-12-12.2-26-12.2-40.4 0-11 9-20 20-20s20 9 20 20c0 6.5 1.9 12.8 5.5 18.2l6.5 9.7 6.5-9.7c3.6-5.4 5.5-11.7 5.5-18.2 0-11 9-20 20-20M245.5 0c17 0 33.2 6.8 45.2 18.8l106.6 106.4c12 12 18.7 28.3 18.7 45.2v165.5H240c-35.3 0-64 28.7-64 64v112H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0zM240 152c0 13.3 10.7 24 24 24h93.5L240 58.5z"})
);

export default LanFileTexSolid;

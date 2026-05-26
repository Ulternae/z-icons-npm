import React from 'react';

export const LanTransformerBoltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136 24c0-13.3-10.7-24-24-24S88 10.7 88 24v8H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24zm160 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v8h-24c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24zM48 112c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-8.8 0-16 7.2-16 16m160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16M24 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v256h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V208h8c13.3 0 24-10.7 24-24s-10.7-24-24-24zm56 304V208h224v256zm153.4-220.9c-5.9-4.3-14-4-19.6.7l-96 80c-5.2 4.3-7.1 11.4-4.8 17.7s8.3 10.6 15 10.6h40.4l-23.2 58.1c-2.7 6.8-.5 14.6 5.5 18.9s14 4 19.6-.7l96-80c5.2-4.3 7.1-11.4 4.8-17.7S262.7 320 256 320h-40.4l23.2-58.1c2.7-6.8.5-14.6-5.4-18.9z"})
);

export default LanTransformerBoltRegular;

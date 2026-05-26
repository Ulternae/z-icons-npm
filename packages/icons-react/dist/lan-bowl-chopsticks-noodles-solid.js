import React from 'react';

export const LanBowlChopsticksNoodlesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 78 13.1 93.6C5.5 95 0 101.6 0 109.3c0 9.8 8.8 17.3 18.5 15.8L96 113v28l-80.3 2.5C7 143.8 0 151 0 159.7c0 9 7.3 16.3 16.2 16.3H96v48H33.6C15.4 224 .9 239.3 2 257.5c5.4 91.8 59.6 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5H240V40c0-13.3-10.7-24-24-24s-24 10.7-24 24v184h-48V56c0-13.3-10.7-24-24-24S96 42.7 96 56zm192 57v41h200.4c13 0 23.6-10.6 23.6-23.6 0-13.3-11-24-24.4-23.6zm0-93v41l204.3-31.9c11.3-1.8 19.7-11.5 19.7-23 0-14.6-13.3-25.6-27.6-22.9z"})
);

export default LanBowlChopsticksNoodlesSolid;

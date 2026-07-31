import React from 'react';

export const LanBowlHotSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 512 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152.1-16c-13.3 0-24 10.7-24 24v8c0 32.7 15.4 63.6 41.6 83.2 14.1 10.6 22.4 27.2 22.4 44.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-32.7-15.4-63.6-41.6-83.2-14.1-10.6-22.4-27.2-22.4-44.8V8c0-13.3-10.7-24-24-24M33.7 224C15.4 224 1 239.3 2.1 257.5c5.4 91.8 59.6 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5zM304.1 8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 32.7 15.4 63.6 41.6 83.2 14.1 10.6 22.4 27.2 22.4 44.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-32.7-15.4-63.6-41.6-83.2-14.1-10.6-22.4-27.2-22.4-44.8z"})
);

export default LanBowlHotSolid;

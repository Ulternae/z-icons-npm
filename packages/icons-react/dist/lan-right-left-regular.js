import React from 'react';

export const LanRightLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M377 0c-22.6 0-41 18.3-41 41v63H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h312v63c0 22.6 18.3 41 41 41 10.9 0 21.3-4.3 29-12l99-99c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17l-99-99c-7.7-7.7-18.1-12-29-12m7 57.9 70.1 70.1-70.1 70.1V58zM176 360v-63c0-22.6-18.3-41-41-41-10.9 0-21.3 4.3-29 12L7 367c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l99 99c7.7 7.7 18.1 12 29 12 22.6 0 41-18.3 41-41v-63h312c13.3 0 24-10.7 24-24s-10.7-24-24-24zM57.9 384l70.1-70.1V454l-70.1-70.1z"})
);

export default LanRightLeftRegular;

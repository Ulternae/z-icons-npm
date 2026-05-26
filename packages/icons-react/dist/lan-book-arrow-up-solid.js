import React from 'react';

export const LanBookArrowUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 512h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-66.7c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H96C43 0 0 43 0 96v320c0 53 43 96 96 96m-32-96c0-17.7 14.3-32 32-32h256v64H96c-17.7 0-32-14.3-32-32M241 95l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V272c0 13.3-10.7 24-24 24s-24-10.7-24-24V169.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0z"})
);

export default LanBookArrowUpSolid;

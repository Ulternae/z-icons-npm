import React from 'react';

export const LanSquareDashedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88 32c13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40 0 13.3-10.7 24-24 24S0 133.3 0 120c0-48.6 39.4-88 88-88M24 192c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24S0 309.3 0 296v-80c0-13.3 10.7-24 24-24m400 0c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24m0-48c-13.3 0-24-10.7-24-24 0-22.1-17.9-40-40-40-13.3 0-24-10.7-24-24s10.7-24 24-24c48.6 0 88 39.4 88 88 0 13.3-10.7 24-24 24m24 248c0 48.6-39.4 88-88 88-13.3 0-24-10.7-24-24s10.7-24 24-24c22.1 0 40-17.9 40-40 0-13.3 10.7-24 24-24s24 10.7 24 24m-400 0c0 22.1 17.9 40 40 40 13.3 0 24 10.7 24 24s-10.7 24-24 24c-48.6 0-88-39.4-88-88 0-13.3 10.7-24 24-24s24 10.7 24 24m136 88c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24zM160 56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24"})
);

export default LanSquareDashedRegular;

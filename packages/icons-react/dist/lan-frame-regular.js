import React from 'react';

export const LanFrameRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 88c0-13.3-10.7-24-24-24h-40V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v40H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24v40H24C10.7 64 0 74.7 0 88s10.7 24 24 24h40v288H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h288v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V112h40c13.3 0 24-10.7 24-24M112 400V112h288v288z"})
);

export default LanFrameRegular;

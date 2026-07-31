import React from 'react';

export const LanCircleGfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c39.8 0 72 32.2 72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24v32c0 39.8-32.2 72-72 72s-72-32.2-72-72V200c0-39.8 32.2-72 72-72m104 24c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v64h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
);

export default LanCircleGfSolid;

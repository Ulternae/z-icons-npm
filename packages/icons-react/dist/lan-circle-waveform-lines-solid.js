import React from 'react';

export const LanCircleWaveformLinesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-360v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24s24 10.7 24 24m96 48v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V200c0-13.3 10.7-24 24-24s24 10.7 24 24m-192 16v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24m288 16v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanCircleWaveformLinesSolid;

import React from 'react';

export const LanGifSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm56 152v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-32c0-13.3 10.7-24 24-24s24 10.7 24 24v32c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c-4.4 0-8 3.6-8 8m144-56c13.3 0 24 10.7 24 24v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24m88 0h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v32h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24"})
);

export default LanGifSolid;

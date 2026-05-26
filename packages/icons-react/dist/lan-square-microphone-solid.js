import React from 'react';

export const LanSquareMicrophoneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm112 112c0-26.5 21.5-48 48-48s48 21.5 48 48v96c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-72 64c13.3 0 24 10.7 24 24v8c0 53 43 96 96 96s96-43 96-96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 71.4-51.9 130.6-120 142v26c0 13.3-10.7 24-24 24s-24-10.7-24-24v-26c-68.1-11.4-120-70.6-120-142v-8c0-13.3 10.7-24 24-24"})
);

export default LanSquareMicrophoneSolid;

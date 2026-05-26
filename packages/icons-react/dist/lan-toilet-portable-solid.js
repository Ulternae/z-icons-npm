import React from 'react';

export const LanToiletPortableSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64v16h320V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64m24 64H0v360c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h224v8c0 13.3 10.7 24 24 24s24-10.7 24-24V128zm224 96h24v96h-24c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24"})
);

export default LanToiletPortableSolid;

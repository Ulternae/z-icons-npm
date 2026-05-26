import React from 'react';

export const LanBookAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M56 0C25.1 0 0 25.1 0 56v400c0 30.9 25.1 56 56 56h384c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-80.8c18.3-3.7 32-19.8 32-39.2V40c0-22.1-17.9-40-40-40zm344 416v80H56c-22.1 0-40-17.9-40-40s17.9-40 40-40zM56 400c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40h352c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24z"})
);

export default LanBookAltThin;

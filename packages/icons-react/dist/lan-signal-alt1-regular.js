import React from 'react';

export const LanSignalAlt1Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 384c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24S8 469.3 8 456v-48c0-13.3 10.7-24 24-24"})
);

export default LanSignalAlt1Regular;

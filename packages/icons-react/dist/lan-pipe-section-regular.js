import React from 'react';

export const LanPipeSectionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v272c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h544v8c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H48zm0 56h544v160H48z"})
);

export default LanPipeSectionRegular;

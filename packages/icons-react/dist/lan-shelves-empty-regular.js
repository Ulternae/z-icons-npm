import React from 'react';

export const LanShelvesEmptyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h416v16c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v144H48zm0 192h416v208H48z"})
);

export default LanShelvesEmptyRegular;

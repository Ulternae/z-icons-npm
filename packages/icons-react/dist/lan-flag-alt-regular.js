import React from 'react';

export const LanFlagAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V384h376c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L352 224l91.2-121.6c3.1-4.2 4.8-9.2 4.8-14.4 0-13.3-10.7-24-24-24H48zm0 88h328l-62.4 83.2a48 48 0 0 0 0 57.6L376 336H48z"})
);

export default LanFlagAltRegular;

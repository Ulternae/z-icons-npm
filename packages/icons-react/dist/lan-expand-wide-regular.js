import React from 'react';

export const LanExpandWideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M136 64c13.3 0 24 10.7 24 24s-10.7 24-24 24H48v88c0 13.3-10.7 24-24 24S0 213.3 0 200V88c0-13.3 10.7-24 24-24zM0 312c0-13.3 10.7-24 24-24s24 10.7 24 24v88h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM488 64c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88h-88c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-24 248c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24h88z"})
);

export default LanExpandWideRegular;

import React from 'react';

export function LanFootWingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M245.9-32c94.6 0 171.2 76.7 171.2 171.2 0 39.7-13.8 78.1-38.9 108.7l-3.9 4.7L448 399.9l46.9 5.9c46.3 5.8 81.1 45.2 81.1 91.8 0 25.6-20.8 46.3-46.3 46.3H387.5c-23.2 0-46-6.3-65.8-18.2L111.3 399.6c-41.5-24.9-57.6-76.4-39-120l4.2-8.6 25.6-46.6C79.1 208.6 64 182.1 64 152v-27.4C27.1 114.1 0 80.3 0 40V13.7C0-11.5 20.5-32 45.7-32zM48 40c0 22.1 17.9 40 40 40h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H112v24c0 22.1 17.9 40 40 40h61.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-1.2 0-2.4-.1-3.5-.2l-18.7 34 53.5 32.1c32.8 19.7 75.1 12.4 99.4-17.2l58.5-71.3c18.1-22.1 28-49.7 28-78.3C369.2 71 314 15.9 246 15.9L48 16z"})
  );
}

export default LanFootWingSolid;

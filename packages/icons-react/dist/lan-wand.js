import React from 'react';

export const LanWand = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M446.8 9.9c7.2-6.4 16.4-9.9 26-9.9C494.5 0 512 17.5 512 39.2v.5c0 9-3.1 17.8-8.7 24.8L448 133.6V160c0 17.7-14.3 32-32 32h-24.9L119 494.4A53.34 53.34 0 0 1 79.4 512c-14.1 0-27.7-5.6-37.6-15.6l-26.2-26.2C5.6 460.2 0 446.7 0 432.6c0-15.1 6.5-29.5 17.7-39.6L96 323.1V296c0-22.1 17.9-40 40-40h33.9zm26 22.1c-1.8 0-3.5.6-4.8 1.8L186.6 284c-2.9 2.6-6.7 4-10.6 4h-40c-4.4 0-8 3.6-8 8v34.3c0 4.6-1.9 8.9-5.3 11.9l-83.6 74.7c-4.5 4-7.1 9.7-7.1 15.8 0 5.6 2.2 11 6.2 14.9l26.2 26.2c4 4 9.4 6.2 15 6.2 6 0 11.8-2.6 15.8-7l276.9-307.7c3-3.4 7.4-5.3 11.9-5.3h32v-32c0-3.6 1.2-7.2 3.5-10l58.8-73.5c1.1-1.4 1.7-3.1 1.7-4.8v-.5c0-4-3.2-7.2-7.2-7.2"})
);

export default LanWand;

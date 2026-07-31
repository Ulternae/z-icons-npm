import React from 'react';

export const LanPipeSmokingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M561.4 0c-58.3 0-112.5 30.3-143.1 80L288 291.7v-61.8c0-20.9-17-37.8-37.9-37.6l-212.8 1.8c-20.7.2-37.3 17-37.3 37.6v113.6C0 437.4 74.6 512 166.7 512c58.2 0 112.3-30.4 142.5-80.2l207-340.9C526.3 74.2 544.4 64 564 64h44c17.7 0 32-14.3 32-32S625.7 0 608 0zM432 88.3C459.6 43.4 508.6 16 561.4 16H608c8.8 0 16 7.2 16 16s-7.2 16-16 16h-44c-25.2 0-48.5 13.1-61.5 34.6L436.1 192h-67.9zM358.3 208h68L295.5 423.5c-27.3 45-76.2 72.5-128.8 72.5C83.5 496 16 428.5 16 345.3V231.7c0-11.9 9.6-21.5 21.4-21.6l212.8-1.9c12-.1 21.8 9.6 21.8 21.6v90.1c0 3.6 2.4 6.7 5.8 7.7s7.1-.5 9-3.5z"})
);

export default LanPipeSmokingThin;

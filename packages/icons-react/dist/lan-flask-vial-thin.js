import React from 'react';

export const LanFlaskVialThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 0h208c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v352c0 44.2-35.8 80-80 80s-80-35.8-80-80V16H24c-4.4 0-8-3.6-8-8s3.6-8 8-8m168 16H64v144h128zM64 368c0 35.3 28.7 64 64 64s64-28.7 64-64V176H64zm179.8 76.2c-2.5 5-3.8 10.4-3.8 16 0 19.8 16 35.8 35.8 35.8h280.4c19.8 0 35.8-16 35.8-35.8 0-5.6-1.3-11-3.8-16L534.1 336H297.9zM526.1 320l-43.6-87.2c-1.7-3.3-2.5-7-2.5-10.7V16H352v206.1c0 3.7-.9 7.4-2.5 10.7L305.9 320zM496 16v206.1c0 1.2.3 2.5.8 3.6l105.7 211.4c3.6 7.2 5.5 15.1 5.5 23.2 0 28.6-23.2 51.8-51.8 51.8H275.8c-28.6 0-51.8-23.2-51.8-51.8 0-8 1.9-16 5.5-23.2l105.7-211.4c.6-1.1.8-2.3.8-3.6V16h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanFlaskVialThin;

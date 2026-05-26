import React from 'react';

export const LanEraser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M285.7 39.6c4.9-4.9 11.5-7.6 18.3-7.6s13.5 2.7 18.3 7.6l182.1 182.1c4.9 4.9 7.6 11.5 7.6 18.3s-2.7 13.5-7.6 18.3L416.7 346 198 127.3zM175.3 149.9 394 368.6l-69.9 69.9c-6 6-14.1 9.4-22.6 9.4h-123c-8.5 0-16.6-3.4-22.6-9.4L39.6 322.3c-4.9-4.8-7.6-11.4-7.6-18.3s2.7-13.5 7.6-18.3zM304 0c-15.4 0-30.1 6.1-41 17L17 263C6.1 273.9 0 288.6 0 304s6.1 30.1 17 41l116.3 116.3c12 12 28.3 18.7 45.3 18.7h349.5c8.8 0 16-7.2 16-16s-7.2-16-16-16h-168l167-167c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L345 17C334.1 6.1 319.4 0 304 0"})
);

export default LanEraser;

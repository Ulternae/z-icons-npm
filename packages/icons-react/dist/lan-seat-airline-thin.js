import React from 'react';

export const LanSeatAirlineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 0c4.4 0 8 3.6 8 8v139c0 7.7 1.2 15.4 3.7 22.8L37.8 224H288c4.4 0 8 3.6 8 8s-3.6 8-8 8H43.1L73 329.7c7.6 22.9 29 38.3 53.1 38.3H376c4.4 0 8 3.6 8 8s-3.6 8-8 8H126.1c-31 0-58.5-19.8-68.3-49.2L24.5 234.7c0-.1-.1-.2-.1-.4L4.5 174.8c-3-9-4.5-18.4-4.5-27.8V8c0-4.4 3.6-8 8-8m24 488c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8"})
);

export default LanSeatAirlineThin;

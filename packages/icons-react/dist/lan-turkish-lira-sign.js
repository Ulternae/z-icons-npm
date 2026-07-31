import React from 'react';

export const LanTurkishLiraSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 32c8.8 0 16 7.2 16 16v77.1l155.6-44.5c8.5-2.4 17.4 2.5 19.8 11s-2.5 17.4-11 19.8l-164.4 47v62.7l155.6-44.5c8.5-2.4 17.4 2.5 19.8 11s-2.5 17.4-11 19.8l-164.4 47V448h80c79.5 0 144-64.5 144-144 0-8.8 7.2-16 16-16s16 7.2 16 16c0 97.2-78.8 176-176 176h-96c-8.8 0-16-7.2-16-16V263.5l-27.6 7.9c-8.5 2.4-17.4-2.5-19.8-11s2.5-17.4 11-19.8L96 230.2v-62.7l-27.6 7.9c-8.5 2.4-17.4-2.5-19.8-11s2.5-17.4 11-19.8L96 134.2V48c0-8.8 7.2-16 16-16"})
);

export default LanTurkishLiraSign;

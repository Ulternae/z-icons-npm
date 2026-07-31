import React from 'react';

export const LanTromboneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M445.5-32c-30.4 0-59.5 12.1-81 33.5l-84.9 84.9c-37.9 37.9-87.7 61.5-141 66.8L80.9 159c-24.6 2.5-35.4 32.5-17.8 50L191 337c17.5 17.5 47.5 6.8 50-17.8l5.8-57.8c3.3-33.4 13.9-65.4 30.6-94l88.7 88.6L139 483.1c-8.2 8.2-19.4 12.9-31 12.9-24.2 0-43.9-19.6-43.9-43.9 0-11.6 4.6-22.8 12.9-31l65.2-65.2-33.9-33.9-65.2 65.2c-17.2 17.2-26.9 40.6-26.9 65 0 50.7 41.1 91.9 91.9 91.9 24.4 0 47.7-9.7 65-26.9L353 337l16-16 157.5-157.5c21.4-21.5 33.5-50.6 33.5-81C560 19.3 508.7-32 445.5-32M400 222.1l-93.9-93.9q3.6-4.05 7.5-7.8L352 81.9l94.1 94.1zM385.9 48l12.5-12.5C410.9 23 427.8 16 445.4 16c36.7 0 66.5 29.8 66.5 66.5 0 17.6-7 34.6-19.5 47L480 142.1z"})
);

export default LanTromboneSolid;

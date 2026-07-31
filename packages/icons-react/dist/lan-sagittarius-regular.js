import React from 'react';

export const LanSagittariusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M424 32c13.3 0 24 10.7 24 24v176c0 13.3-10.7 24-24 24s-24-10.7-24-24V113.9L225.9 288l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-151 151c-9.4 9.4-24.6 9.4-33.9 0S-2.3 448.4 7 439l151-151-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55.1 55L366.1 80H248c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanSagittariusRegular;

import React from 'react';

export const LanCheckDoubleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M247.5 58c7.7-10.8 5.3-25.8-5.5-33.5s-25.8-5.3-33.5 5.5L93 191l-48-48c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6-.1 34l68 68c5 5 11.9 7.5 18.9 6.9s13.4-4.2 17.5-9.9l132-184zm130 134c7.7-10.8 5.3-25.8-5.5-33.5s-25.8-5.3-33.5 5.5L157 417l-82-82c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L143 471c5 5 11.9 7.5 18.9 7s13.4-4.2 17.5-9.9l198-276z"})
);

export default LanCheckDoubleRegular;

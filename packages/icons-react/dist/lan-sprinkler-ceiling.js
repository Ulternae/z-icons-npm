import React from 'react';

export const LanSprinklerCeiling = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 0h32v83.8l96 26.2v33.2L11.8 111.5C4.8 109.5 0 103.2 0 96zm256 110 96-26.2V0h32v96c0 7.2-4.8 13.5-11.8 15.4L256 143.1zm-64-78c8.8 0 16 7.2 16 16v176h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h96V48c0-8.8 7.2-16 16-16m-48 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 96c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m144-80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-32 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m-32 48c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16m80 16c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16m144-16c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16m-80-48c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16M32 464c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16"})
);

export default LanSprinklerCeiling;

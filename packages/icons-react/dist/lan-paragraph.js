import React from 'react';

export const LanParagraph = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 0C71.6 0 0 71.6 0 160s71.6 160 160 160h96v176c0 8.8 7.2 16 16 16s16-7.2 16-16V32h64v464c0 8.8 7.2 16 16 16s16-7.2 16-16V32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 32v256h-96c-70.7 0-128-57.3-128-128S89.3 32 160 32z"})
);

export default LanParagraph;

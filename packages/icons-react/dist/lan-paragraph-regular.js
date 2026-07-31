import React from 'react';

export const LanParagraphRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 0C71.6 0 0 71.6 0 160s71.6 160 160 160h64v168c0 13.3 10.7 24 24 24s24-10.7 24-24V48h64v440c0 13.3 10.7 24 24 24s24-10.7 24-24V48h40c13.3 0 24-10.7 24-24S437.3 0 424 0zm64 48v224h-64c-61.9 0-112-50.1-112-112S98.1 48 160 48z"})
);

export default LanParagraphRegular;

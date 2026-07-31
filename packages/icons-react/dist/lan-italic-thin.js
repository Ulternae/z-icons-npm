import React from 'react';

export const LanItalicThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 40c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H269.8L131.1 464H248c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h106.2L252.9 48H136c-4.4 0-8-3.6-8-8"})
);

export default LanItalicThin;

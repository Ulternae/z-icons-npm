import React from 'react';

export const LanHighlighterLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M229 229 444.1 70.6l29.3 29.3L315 315zm-101 91-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0L224 416h71.7c15.3 0 29.6-7.2 38.6-19.5l201.3-273.1c5.5-7.4 8.4-16.4 8.4-25.6 0-11.4-4.5-22.4-12.6-30.5l-54.8-54.7C468.5 4.5 457.6 0 446.2 0 437 0 428 2.9 420.6 8.4L147.5 209.6c-12.3 9-19.5 23.4-19.5 38.6v71.7zm-69.3 94.6L7 466.3c-4.5 4.5-7 10.6-7 17v4.7c0 13.3 10.7 24 24 24h68.7c6.4 0 12.5-2.5 17-7l19.7-19.7-70.6-70.6zM248 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanHighlighterLineSolid;

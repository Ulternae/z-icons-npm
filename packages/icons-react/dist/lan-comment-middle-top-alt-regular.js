import React from 'react';

export const LanCommentMiddleTopAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 432c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48h68.8c14.2 0 27.8-6.3 36.9-17.3L256 29.5l54.4 65.2c9.1 10.9 22.6 17.3 36.9 17.3h68.8c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48zM0 384c0 53 43 96 96 96h320c53 0 96-43 96-96V160c0-53-43-96-96-96h-68.8l-72.8-87.4c-4.5-5.4-11.3-8.6-18.4-8.6s-13.9 3.2-18.4 8.6L164.8 64H96c-53 0-96 43-96 96z"})
);

export default LanCommentMiddleTopAltRegular;

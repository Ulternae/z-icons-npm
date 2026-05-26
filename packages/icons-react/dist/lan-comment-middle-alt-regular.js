import React from 'react';

export const LanCommentMiddleAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 80c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-68.8c-14.2 0-27.8 6.3-36.9 17.3l-54.4 65.2-54.4-65.2c-9-11-22.5-17.3-36.7-17.3H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm96 48c0-53-43-96-96-96H96C43 32 0 75 0 128v224c0 53 43 96 96 96h68.8l72.8 87.4c4.6 5.5 11.3 8.6 18.4 8.6s13.9-3.2 18.4-8.6l72.8-87.4H416c53 0 96-43 96-96z"})
);

export default LanCommentMiddleAltRegular;

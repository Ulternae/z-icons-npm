import React from 'react';

export const LanCommentMiddleTopAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 384c0 53-43 96-96 96H96c-53 0-96-43-96-96V160c0-53 43-96 96-96h68c2.5 0 4.9-1.2 6.4-3.2l60-80c6-8.1 15.5-12.8 25.6-12.8s19.6 4.7 25.6 12.8L344 64h72c53 0 96 43 96 96zm-96 64c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-76c-7.6 0-14.7-3.6-19.2-9.6L256 0l-60 80c-7.6 10.1-19.4 16-32 16H96c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64z"})
);

export default LanCommentMiddleTopAlt;

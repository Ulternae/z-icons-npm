import React from 'react';

export const LanSquareRupeeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 64h64c35.3 0 64 28.7 64 64 0 28.8-19.1 53.2-45.3 61.2l28.7 71.8c1.6 4.1-.4 8.8-4.5 10.4s-8.8-.4-10.4-4.5l-30-75c-.9 0-1.7.1-2.6.1h-56v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8zm64 112c26.5 0 48-21.5 48-48s-21.5-48-48-48h-56v96zm96-20.8c0-23.8 19.3-43.2 43.2-43.2H344c4.4 0 8 3.6 8 8s-3.6 8-8 8h-36.8c-15 0-27.2 12.2-27.2 27.2 0 12.9 9.1 24.1 21.8 26.6l23.5 4.7c20.2 4 34.7 21.8 34.7 42.3 0 23.8-19.3 43.2-43.2 43.2H280c-4.4 0-8-3.6-8-8s3.6-8 8-8h36.8c15 0 27.2-12.2 27.2-27.2 0-13-9.1-24.1-21.8-26.6l-23.5-4.7c-20.2-4-34.7-21.8-34.7-42.3"})
);

export default LanSquareRupeeThin;

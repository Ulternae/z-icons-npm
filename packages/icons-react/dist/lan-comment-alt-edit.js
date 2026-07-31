import React from 'react';

export const LanCommentAltEdit = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 128c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H296c-8.7 0-17.1 2.8-24 8l-112 84v-68c0-13.3-10.7-24-24-24H96c-35.3 0-64-28.7-64-64zm64-96C43 32 0 75 0 128v224c0 53 43 96 96 96h32v68c0 15.5 12.5 28 28 28 6.1 0 12-2 16.8-5.6l118.4-88.8c1.4-1 3.1-1.6 4.8-1.6h120c53 0 96-43 96-96V128c0-53-43-96-96-96zm206.1 120.6c5.5-5.5 12.9-8.6 20.7-8.6 16.2 0 29.3 13.1 29.3 29.3 0 7.8-3.1 15.2-8.6 20.7L222.1 315.3c-4.1 4.1-9.2 7-14.9 8.4l-46.6 11.6 11.6-46.6c1.4-5.6 4.3-10.8 8.4-14.9zm20.6-40.6c-16.2 0-31.8 6.5-43.3 17.9L158.1 251.3c-8.2 8.2-14 18.5-16.8 29.7l-12.4 49.4c-.6 2.4-.9 4.9-.9 7.3 0 16.7 13.5 30.2 30.2 30.2 2.5 0 4.9-.3 7.3-.9l49.5-12.3c11.3-2.8 21.5-8.6 29.7-16.8l121.4-121.3c11.5-11.5 17.9-27.1 17.9-43.3 0-33.8-27.4-61.3-61.3-61.3"})
);

export default LanCommentAltEdit;

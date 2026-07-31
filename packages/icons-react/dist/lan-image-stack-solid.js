import React from 'react';

export const LanImageStackSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96-8c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C106.7 16 96 5.3 96-8M48 88c0-13.3 10.7-24 24-24h368c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24M0 224c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32c-7.4 0-14.3 3.4-18.9 9.2l-42.6 54.3-14.8-21.2c-4.5-6.4-11.8-10.2-19.7-10.2s-15.2 3.8-19.7 10.2l-56 80c-5.1 7.3-5.8 16.9-1.6 24.8S159.1 416 168 416h240c9.2 0 17.6-5.2 21.6-13.5s3-18.1-2.7-25.3l-88-112c-4.6-5.8-11.5-9.2-18.9-9.2"})
);

export default LanImageStackSolid;

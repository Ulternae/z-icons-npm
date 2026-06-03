import React from 'react';

export const LanUserHardHatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M216-32c-13.3 0-24 10.7-24 24v72h-8c-13.3 0-24-10.7-24-24V-6.9C123.9 14 99 52 96.2 96H96c-13.3 0-24 10.7-24 24s10.7 24 24 24c0 70.7 57.3 128 128 128s128-57.3 128-128c13.3 0 24-10.7 24-24s-10.7-24-24-24h-.2C349 52 324.1 14 288-6.9V40c0 13.3-10.7 24-24 24h-8V-8c0-13.3-10.7-24-24-24zm88 176c0 44.2-35.8 80-80 80s-80-35.8-80-80zM48 488c0-66.3 53.7-120 120-120h112c66.3 0 120 53.7 120 120 0 13.3 10.7 24 24 24s24-10.7 24-24c0-92.8-75.2-168-168-168H168C75.2 320 0 395.2 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24"})
);

export default LanUserHardHatRegular;

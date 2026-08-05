import React from 'react';

export function LanUserCrownRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 448 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 224c-44.2 0-80-35.8-80-80h160c0 44.2-35.8 80-80 80M96 16v128c0 70.7 57.3 128 128 128s128-57.3 128-128V16c0-8.8-7.2-16-16-16h-3.2c-3.2 0-6.2.9-8.9 2.7l-20 13.3-2.2 1.4c-12.7 8.5-29.6 6.8-40.4-4l-23.6-23.7C234-14 229.1-16 224-16s-10 2-13.7 5.7l-23.7 23.7c-10.8 10.8-27.7 12.5-40.4 4L144 16 124 2.7C121.4.9 118.3 0 115.2 0H112c-8.8 0-16 7.2-16 16M48 488c0-66.3 53.7-120 120-120h112c66.3 0 120 53.7 120 120 0 13.3 10.7 24 24 24s24-10.7 24-24c0-92.8-75.2-168-168-168H168C75.2 320 0 395.2 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24"})
  );
}

export default LanUserCrownRegular;

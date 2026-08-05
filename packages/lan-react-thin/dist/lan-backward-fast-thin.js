import React from 'react';

export function LanBackwardFastThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 480c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8v187.6L235.2 39.7c9.5-8.1 22.8-10 34.2-4.8S288 51.5 288 64v122.4L459.2 39.7c9.5-8.1 22.8-10 34.2-4.8S512 51.5 512 64v384c0 12.5-7.3 23.8-18.6 29.1s-24.7 3.4-34.2-4.8L288 325.6V448c0 12.5-7.3 23.8-18.6 29.1s-24.7 3.4-34.2-4.8L16 284.4V472c0 4.4-3.6 8-8 8m264-168.1V64c0-6.2-3.6-11.9-9.3-14.5s-12.4-1.7-17.1 2.4l-224 192c-3.5 3-5.6 7.5-5.6 12.1s2 9.1 5.6 12.1l224 192c4.7 4.1 11.4 5 17.1 2.4s9.3-8.3 9.3-14.5zm16-104.4v97l181.6 155.6c4.7 4.1 11.4 5 17.1 2.4s9.3-8.3 9.3-14.5V64c0-6.2-3.6-11.9-9.3-14.5s-12.4-1.7-17.1 2.4z"})
  );
}

export default LanBackwardFastThin;

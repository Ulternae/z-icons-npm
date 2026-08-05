import React from 'react';

export function LanArrowRightFromFileThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 16h133.5q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V280h16v-93.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-56h-16v56c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m336 312H264c-4.4 0-8 3.6-8 8s3.6 8 8 8h276.7l-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l72-72c3.1-3.1 3.1-8.2 0-11.3l-72-72c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l58.3 58.4zm-40-168h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1l122.5 122.5c2.3 2.3 4.3 4.8 6.1 7.4"})
  );
}

export default LanArrowRightFromFileThin;

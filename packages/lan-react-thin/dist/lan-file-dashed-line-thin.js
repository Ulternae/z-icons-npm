import React from 'react';

export function LanFileDashedLineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 16h133.5q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V240h16v-53.5c0-17-6.7-33.3-18.7-45.3L338.7 18.7C326.7 6.7 310.5 0 293.5 0H160c-35.3 0-64 28.7-64 64v176h16V64c0-26.5 21.5-48 48-48m-48 432v-96H96v96c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-96h-16v96c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48m344-288h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1l122.5 122.5c2.3 2.3 4.3 4.8 6.1 7.4M8 288c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm208 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8zm208 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanFileDashedLineThin;

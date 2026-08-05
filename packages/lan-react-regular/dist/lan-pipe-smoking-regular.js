import React from 'react';

export function LanPipeSmokingRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M426.5 36.6C442 13.7 467.8 0 495.4 0H616c13.3 0 24 10.7 24 24s-10.7 24-24 24h-43L320.7 433.1c-32.3 49.2-87.2 78.9-146.1 78.9C78.2 512 0 433.8 0 337.4V231.7c0-29.4 23.7-53.3 53.1-53.6l180.8-1.8c29.8-.3 54.1 23.8 54.1 53.6v11.7zM515.6 48h-20.1c-11.7 0-22.6 5.8-29.2 15.5l-76 112.5h41.5l83.9-128zM400.3 224h-42.4L284 333.4c-5.9 8.7-16.8 12.6-26.9 9.5s-17-12.4-17-22.9v-90.1c0-3.1-2.5-5.6-5.7-5.6l-180.9 1.8c-3.1 0-5.5 2.5-5.5 5.6v105.7C48 407.3 104.7 464 174.6 464c42.7 0 82.5-21.5 105.9-57.2z"})
  );
}

export default LanPipeSmokingRegular;

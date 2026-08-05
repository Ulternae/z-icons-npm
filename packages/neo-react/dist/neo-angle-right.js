import React from 'react';

export function NeoAngleRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 336 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M123.4 546.9c-9.6 8.6-21.9 13.1-34.4 13.1-35.4 0-59.6-33.7-51.7-66.4C47.3 452 63 372.1 63 280S47.3 108 37.3 66.4C29.4 33.8 53.6 0 89 0c12.5 0 24.8 4.5 34.4 13.1 15.2 13.6 53.1 48.3 93.9 92 40.4 43.3 85 97.1 112.3 148.7 4.4 8.4 6.4 17.5 6.4 26.3s-2 17.9-6.4 26.3c-27.2 51.6-71.9 105.4-112.3 148.7-40.7 43.7-78.7 78.4-93.9 92zm-29.7-48.6c17.5-15.9 49.1-45.6 82.6-81.5 39.4-42.3 80-91.9 103.7-136.8-23.7-44.9-64.2-94.5-103.7-136.8-33.5-35.9-65.1-65.6-82.6-81.5 10.6 46 25.3 126.2 25.3 218.3s-14.7 172.3-25.3 218.3"})
  );
}

export default NeoAngleRight;

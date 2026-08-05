import React from 'react';

export function LanHatCowboyRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M269.6 81.8q-5.4-1.8-11.1-1.8c-16.4 0-30.6 11.4-34.1 27.4L198.5 224h243l-25.9-116.6C412 91.4 397.9 80 381.5 80c-3.8 0-7.5.6-11 1.8l-2.9 1a149.6 149.6 0 0 1-94.9 0l-2.9-1zM187.8 272l-17.2 77.6c-16.8-3.8-31.8-12-44-23.3l51-229.3c8.4-38 42.1-65 81-65 8.9 0 17.8 1.4 26.2 4.3l2.9 1c21 7 43.6 7 64.6 0l2.9-1c8.5-2.8 17.3-4.3 26.2-4.3 38.9 0 72.5 27 81 65l51 229.3c-12.2 11.3-27.2 19.5-44 23.3L452.2 272H187.9zM24 232c13.3 0 24 10.7 24 24 0 79.5 64.5 144 144 144h256c79.5 0 144-64.5 144-144 0-13.3 10.7-24 24-24s24 10.7 24 24c0 106-86 192-192 192H192C86 448 0 362 0 256c0-13.3 10.7-24 24-24"})
  );
}

export default LanHatCowboyRegular;

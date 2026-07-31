import React from 'react';

export function CoreMoneyBillWave({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M248.2 427.8c8-2 16.2-4.1 24.7-6.3 68.8-17.8 153-39.5 239.1-25.4V71.5c-54.2-15.3-111.9-5.4-184.2 12.7-8 2-16.2 4.1-24.7 6.3-68.8 17.8-153 39.5-239.1 25.4v324.6c54.2 15.3 111.9 5.4 184.2-12.7M288 28.3c96-24.5 192-48.9 288 0v403.3c0 23.9-25.6 39.7-48.7 33.4-79.8-21.8-159.6-1.5-239.3 18.9-96 24.5-192 48.9-288 0V80.5c0-23.9 25.6-39.7 48.7-33.4 79.7 21.8 159.5 1.5 239.3-18.8M328 256a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-136 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
  );
}

export default CoreMoneyBillWave;

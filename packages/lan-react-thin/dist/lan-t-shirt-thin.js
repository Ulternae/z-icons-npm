import React from 'react';

export function LanTShirtThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m171.1 30.4-136 122.4 70.2 84.2 57.9-43.4c2.4-1.8 5.7-2.1 8.4-.8s4.4 4.2 4.4 7.2v272c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V200c0-3 1.7-5.8 4.4-7.2s6-1.1 8.4.8l57.9 43.4 70.2-84.2-136-122.4C458.6 21.1 445.3 16 431.4 16h-16.8c-7.6 45.4-47 80-94.6 80s-87.1-34.6-94.7-80h-16.8c-13.8 0-27.2 5.1-37.5 14.4zM416 0h15.4c17.8 0 34.9 6.6 48.2 18.5l141.8 127.6c3.2 2.9 3.5 7.8.8 11.1l-80 96c-2.7 3.3-7.5 3.8-10.9 1.3L480 216v256c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V216l-51.2 38.4c-3.4 2.6-8.2 2-10.9-1.3l-80-96c-2.8-3.3-2.4-8.2.8-11.1L160.4 18.5C173.6 6.6 190.8 0 208.6 0zm-17.6 16H241.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64"})
  );
}

export default LanTShirtThin;

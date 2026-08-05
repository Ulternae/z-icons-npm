import React from 'react';

export function LanDreidelRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M471.5 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-144 144 69.1 69.1c18.7 18.7 18.7 49.1 0 67.9L291.2 461.2l-4.7 4.3c-9.8 8-21.7 12.9-34.3 14.2l-6.3.3H80.4c-26.5 0-48-21.5-48-48V266.5c0-14.9 5.2-29.2 14.5-40.6l4.3-4.7L190.5 81.9c18.7-18.7 49.1-18.7 67.9 0l69.1 69.1zM85.2 255.2c-2.2 2.2-3.8 5.1-4.4 8.2l-.3 3.1V432H246c4.2 0 8.3-1.7 11.3-4.7l68.3-68.3-172.1-172.1zM187.4 153l172.1 172.1 37.1-37.1-172.1-172.1z"})
  );
}

export default LanDreidelRegular;

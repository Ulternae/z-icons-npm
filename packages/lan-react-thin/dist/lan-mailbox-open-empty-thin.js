import React from 'react';

export function LanMailboxOpenEmptyThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M552 224c13.3 0 24 10.7 24 24v64c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-72h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-40 88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8h-40zM480 64c88.4 0 160 71.6 160 160v192c0 36.2-29.3 62.2-64 64H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h88V208c0-79.5 64.5-144 144-144zM240 80c-70.7 0-128 57.3-128 128v256h208c26.5 0 48-21.5 48-48V208c0-70.7-57.3-128-128-128m66 0c46.3 23.9 78 72.3 78 128v208c0 19.1-8.4 36.3-21.7 48H576c26.5 0 48-21.5 48-48V224c0-77-60.5-140-136.6-143.8L480 80z"})
  );
}

export default LanMailboxOpenEmptyThin;

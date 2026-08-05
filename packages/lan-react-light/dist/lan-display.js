import React from 'react';

export function LanDisplay({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64h384c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m384-32H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64h117.1l-10.7 64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16h-58.4l-10.7-64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64M298.4 416l10.7 64H202.9l10.7-64h84.9z"})
  );
}

export default LanDisplay;
